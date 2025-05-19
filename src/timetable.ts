import {stripBeforeColon} from './util'
import {staticData} from './staticData'
import {loadJsonCached} from './loaders/cached_data_loader'
import {getCachedStationById, getStationForRailway, Station} from './station'

export type TimetableTrain = {
  /**
   * 路線ID
   */
  railway: string;
  /**
   * 路線名
   */
  railwayName: string;
  /**
   * 適用される曜日など
   * @example Weekday, SaturdayHoliday
   */
  calendar: string;
  /**
   * 運行者ID
   */
  operator: string;
  /**
   * 運行者名
   */
  operatorName: string;
  /**
   * 列車種別ID
   * @example Toei.Local, Toei.AirportRapidLimitedExpress
   */
  trainType: string;
  /**
   * 列車種別名
   * @example 普通, エアポート快特
   */
  trainTypeName?: string;
  /**
   * 経由路線
   */
  viaRailway?: {id: string, name?: string}[];
  /**
   * 列車番号
   * @example 9999T
   */
  trainNumber: string;
  /**
   * 始発駅
   */
  originStation?: Station[];
  /**
   * 終着駅
   */
  destinationStation: Station[];
  /**
   * 方向
   */
  direction: string;
  /**
   * 時刻表
   */
  timetable: TimetableEntry[];
}

export type TimetableEntry = {
  /**
   * 到着時刻(始発駅の場合は存在しない)
   * @example 05:00
   */
  arrivalTime?: string;
  /**
   * 発車時刻(終着駅の場合は存在しない)
   * @example 06:00
   */
  departureTime?: string;
  /**
   * 到着駅
   */
  arrivalStation?: Station;
  /**
   * 発車駅
   */
  departureStation?: Station;
  /**
   * 発着番線
   */
  platformNumber: string;
}

export const convertTimetableTrain = (data: any) => {
  return {
    railway: stripBeforeColon(data["odpt:railway"]),
    railwayName: staticData.railway[stripBeforeColon(data["odpt:railway"])],
    calendar: stripBeforeColon(data["odpt:calendar"]),
    operator: stripBeforeColon(data["odpt:operator"]),
    operatorName: staticData.operator[stripBeforeColon(data["odpt:operator"])],
    trainType: stripBeforeColon(data["odpt:trainType"]),
    trainTypeName: staticData.trainType[stripBeforeColon(data["odpt:railway"])][stripBeforeColon(data["odpt:trainType"])],
    viaRailway: data["odpt:viaRailway"]?.map(stripBeforeColon)?.map((id: string) => ({id, name: staticData.railway[id]})),
    trainNumber: data["odpt:trainNumber"],
    originStation: data["odpt:originStation"]?.map(stripBeforeColon).map((id: string) => getCachedStationById(id)),
    destinationStation: data["odpt:destinationStation"]?.map(stripBeforeColon).map((id: string) => getCachedStationById(id)),
    direction: stripBeforeColon(data["odpt:railDirection"]),
    timetable: data["odpt:trainTimetableObject"].map(convertTimetableEntry),
  } as TimetableTrain
}

export const convertTimetableEntry = (data: any) => {
  let arrivalStation = data["odpt:arrivalStation"]
  if (arrivalStation) {
    arrivalStation = getCachedStationById(stripBeforeColon(arrivalStation), true)
  }
  let departureStation = data["odpt:departureStation"]
  if (departureStation) {
    departureStation = getCachedStationById(stripBeforeColon(departureStation), true)
  }
  return {
    arrivalTime: data["odpt:arrivalTime"],
    departureTime: data["odpt:departureTime"],
    arrivalStation,
    departureStation,
    platformNumber: data["odpt:platformNumber"],
  } as TimetableEntry
}

export const getTimetableForRailway = async (railway: string): Promise<Station[]> => {
  await getStationForRailway(railway)
  const rawData = await loadJsonCached('TrainTimetable_' + railway, `https://api.odpt.org/api/v4/odpt:TrainTimetable?acl:consumerKey=${process.env.ODPT_KEY}&odpt:railway=odpt.Railway:${railway}`, 60 * 60 * 24 * 7)
  return rawData.map(convertTimetableTrain)
}
