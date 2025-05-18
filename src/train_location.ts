import {getCachedStationById, getStationForRailway, Station} from './station'
import {stripBeforeColon} from './util'
import {staticData} from './staticData'
import {loadJsonCached} from './loaders/cached_data_loader'

export type TrainLocation = {
  delay: number;
  railway: string;
  railwayName?: string;
  operator: string;
  operatorName?: string;
  direction: string;
  trainNumber: string;
  trainType: string;
  trainTypeName?: string;
  trainOwner: string;
  trainOwnerName?: string;
  viaRailway?: {id: string, name?: string}[];
  fromStation: Station | null;
  toStation: Station | null;
  originStation?: Station[];
  destinationStation?: Station[];
}

export const convertTrainLocation = (data: any) => {
  let fromStation = data["odpt:fromStation"]
  if (fromStation) {
    fromStation = getCachedStationById(stripBeforeColon(fromStation), true)
  }
  let toStation = data["odpt:toStation"]
  if (toStation) {
    toStation = getCachedStationById(stripBeforeColon(toStation), true)
  }
  return {
    delay: data["odpt:delay"],
    railway: stripBeforeColon(data["odpt:railway"]),
    railwayName: staticData.railway[stripBeforeColon(data["odpt:railway"])],
    operator: stripBeforeColon(data["odpt:operator"]),
    operatorName: staticData.operator[stripBeforeColon(data["odpt:operator"])],
    direction: stripBeforeColon(data["odpt:railDirection"]),
    trainNumber: data["odpt:trainNumber"],
    trainType: stripBeforeColon(data["odpt:trainType"]),
    trainTypeName: staticData.trainType[stripBeforeColon(data["odpt:railway"])][stripBeforeColon(data["odpt:trainType"])],
    trainOwner: stripBeforeColon(data["odpt:trainOwner"]),
    trainOwnerName: staticData.operator[stripBeforeColon(data["odpt:trainOwner"])],
    viaRailway: data["odpt:viaRailway"]?.map(stripBeforeColon)?.map((id: string) => ({id, name: staticData.railway[id]})),
    fromStation,
    toStation,
    originStation: data["odpt:originStation"]?.map(stripBeforeColon).map((id: string) => getCachedStationById(id)),
    destinationStation: data["odpt:destinationStation"]?.map(stripBeforeColon).map((id: string) => getCachedStationById(id)),
  } as TrainLocation
}

export const getTrainLocationForRailway = async (railway: string): Promise<TrainLocation[]> => {
  await getStationForRailway(railway)
  const rawData = await loadJsonCached('TrainLocation_' + railway, `https://api-public.odpt.org/api/v4/odpt:Train?odpt:railway=odpt.Railway:${railway}`, 5)
  return rawData.map(convertTrainLocation)
}
