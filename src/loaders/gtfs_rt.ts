import {loadBinaryCached} from './cached_data_loader'
import GtfsRealtimeBindings from 'gtfs-realtime-bindings'

export const getGtfsRealtimeData = async (name: string, url: string, timeoutSeconds: number) => {
  const buffer = await loadBinaryCached(name, url, timeoutSeconds)
  return GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(buffer)
}
