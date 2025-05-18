import express from "express"
const router = express.Router()
import asyncHandler from "express-async-handler"
import {getTimetableForRailway} from '../timetable'
import {getStationForRailway} from '../station'
import {staticData} from '../staticData'
import {getTrainLocationForRailway} from '../train_location'

router.get("/data", (_req, res) => {
  res.header("Content-Type: application/json; charset=utf-8").send(staticData).end()
})

router.get("/station", asyncHandler(async (req, res) => {
  if (!req.query.railway?.toString()) {
    res.status(400).send("railway is required").end()
    return
  }
  res.header("Content-Type: application/json; charset=utf-8").send(await getStationForRailway(req.query.railway.toString())).end()
}))

router.get("/timetable", asyncHandler(async (req, res) => {
  if (!req.query.railway?.toString()) {
    res.status(400).send("railway is required").end()
    return
  }
  res.header("Content-Type: application/json; charset=utf-8").send(await getTimetableForRailway(req.query.railway.toString())).end()
}))

router.get("/train_location", asyncHandler(async (req, res) => {
  if (!req.query.railway?.toString()) {
    res.status(400).send("railway is required").end()
    return
  }
  let data = await getTrainLocationForRailway(req.query.railway.toString())
  const trainNumber = req.query.train_number?.toString()
  if (trainNumber) {
    data = data.filter(train => train.trainNumber === trainNumber)
  }
  res.header("Content-Type: application/json; charset=utf-8").send(data).end()
}))

export default router
