import {getStationForRailway} from './station'
import {stripBeforeColon} from './util'
import {staticData} from './staticData'
import {loadJsonCached} from './loaders/cached_data_loader'

export type TrainInformation = {
  railway: string;
  railwayName?: string;
  operator: string;
  operatorName?: string;
  timeOfOrigin: string;
  text: {[lang: string]: string};
}

export const convertTrainInformation = (data: any) => {
  return {
    railway: stripBeforeColon(data["odpt:railway"]),
    railwayName: staticData.railway[stripBeforeColon(data["odpt:railway"])],
    operator: stripBeforeColon(data["odpt:operator"]),
    operatorName: staticData.operator[stripBeforeColon(data["odpt:operator"])],
    timeOfOrigin: data["odpt:timeOfOrigin"],
    text: data["odpt:trainInformationText"] as {[lang: string]: string},
  } as TrainInformation
}

export const getTrainInformationForRailway = async (railway: string): Promise<TrainInformation[]> => {
  await getStationForRailway(railway)
  if (staticData.train_alert_format[railway] === "GTFS-RT") {
    //const gtfsRealtime = await getGtfsRealtimeData('GTFS-RT_' + railway, )
    return []
  } else if (staticData.train_alert_format[railway] === "JSON") {
    const rawData = await loadJsonCached('TrainInformation_' + railway, `https://api.odpt.org/api/v4/odpt:TrainInformation?acl:consumerKey=${process.env.ODPT_KEY}&odpt:railway=odpt.Railway:${railway}`, 60)
    return rawData.map(convertTrainInformation)
  } else {
    throw new Error(`Unknown train location format: ${staticData.train_alert_format[railway]}`)
  }
}
