import {staticData} from './staticData'
import {loadJsonCached} from './loaders/cached_data_loader'
import {stripBeforeColon} from './util'

export type PartialStation = {
  id?: string;
  code?: string;
  name: string;
}

export type Station = PartialStation & {
  /**
   * 駅ID
   */
  id: string;
  latitude: number;
  longitude: number;
  /**
   * 駅名
   */
  name: string;
  /**
   * 路線ID
   */
  railway: string;
  /**
   * 路線名
   */
  railwayName: string;
  /**
   * 運行者ID
   */
  operator: string;
  /**
   * 運行者名
   */
  operatorName: string;
  /**
   * 駅ナンバリングコード
   */
  code?: string;
  /**
   * 駅名(英語/日本語)
   */
  localized_title?: {
    [language: string]: string;
  };
  /**
   * 接続している路線
   */
  connectingRailway?: {
    railway: string;
    railwayName?: string;
  }[];
  /**
   * 接続している駅
   */
  connectingStation?: { id: string }[] | PartialStation[] | Station[];
}

/**
 * Converts the station. Please call fillConnectingStation after calling this method.
 * @param data
 */
export const convertStation = (data: any) => {
  const station = {
    id: stripBeforeColon(data["owl:sameAs"]),
    latitude: data["geo:lat"],
    longitude: data["geo:long"],
    name: data["dc:title"],
    railway: stripBeforeColon(data["odpt:railway"]),
    railwayName: staticData.railway[stripBeforeColon(data["odpt:railway"])],
    operator: stripBeforeColon(data["odpt:operator"]),
    operatorName: staticData.operator[stripBeforeColon(data["odpt:operator"])],
    code: data["odpt:stationCode"],
    localized_title: data["odpt:stationTitle"],
    connectingRailway: data["odpt:connectingRailway"]?.map((id: string) => ({
      railway: stripBeforeColon(id),
      railwayName: staticData.railway[stripBeforeColon(id)],
    })),
    connectingStation: data["odpt:connectingStation"]?.map((id: string) => ({id})),
  } as Station
  if (data["owl:sameAs"] && !staticData.station[data["owl:sameAs"]]) {
    staticData.station[stripBeforeColon(data["owl:sameAs"])] = {
      ...station,
      code: data["odpt:stationCode"],
      name: data["dc:title"],
    }
  }
  return station
}

const fillConnectingStation = (station: Station): Station => {
  const data = {
    ...station,
    connectingStation: station.connectingStation?.map(({id}) => getCachedStationById(stripBeforeColon(id)))
  } as Station
  // update cache
  if (!staticData.station[data.id] || (staticData.station[data.id] as Station).connectingStation?.find(station => station.id?.startsWith("odpt.Station:") === true)) {
    staticData.station[data.id] = {
      ...data,
      connectingStation: data.connectingStation?.map(station => {
        delete (station as Station).connectingRailway
        delete (station as Station).connectingStation
        return station
      })
    } as {code?: string, name: string} // hack
  }
  return data
}

/**
 * Returns the *cached* station (in staticData) by id.
 * @param id the station id (For example, Toei.Asakusa.Oshiage)
 * @param omitExtra Whether to exclude extra values (such as connectingRailway and connectingStation)
 */
export const getCachedStationById = (id: string, omitExtra?: boolean): PartialStation | Station => {
  const stripped = stripBeforeColon(id)
  const operator = stripped.split(".")[0]
  const railway = `${operator}.${ stripped.split(".")[1]}`
  const data = staticData.station[stripped] || {
    id: stripped,
    railway,
    railwayName: staticData.railway[railway],
    operator,
    operatorName: staticData.operator[operator],
    name: stripped.split(".").pop(),
  }
  if (!omitExtra) {
    return {
      ...data,
      id: stripped,
      railway,
      railwayName: staticData.railway[railway],
      operator,
      operatorName: staticData.operator[operator],
    }
  }
  return {
    ...data,
    connectingRailway: undefined,
    connectingStation: undefined,
  }
}

export const getStationForRailway = async (railway: string): Promise<Station[]> => {
  const rawData = await loadJsonCached('Station_' + railway, `https://api.odpt.org/api/v4/odpt:Station?acl:consumerKey=${process.env.ODPT_KEY}&odpt:railway=odpt.Railway:${railway}`, 60 * 60 * 24 * 7)
  return rawData.map(convertStation).map(fillConnectingStation)
}
