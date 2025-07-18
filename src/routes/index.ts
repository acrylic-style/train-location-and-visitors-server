import express from "express"
const router = express.Router()
import asyncHandler from "express-async-handler"
import {getTimetableForRailway} from '../timetable'
import {getStationForRailway} from '../station'
import {staticData} from '../staticData'
import {getTrainLocationForRailway} from '../train_location'
import {getTrainInformationForRailway} from "../train_information";

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
  const railway = req.query.railway.toString()
  if (!staticData.train_location_format[railway]) {
    res.header("Content-Type: application/json; charset=utf-8").send([]).end()
    return
  }
  let data = await getTrainLocationForRailway(railway)
  const trainNumber = req.query.train_number?.toString()
  if (trainNumber) {
    data = data.filter(train => train.trainNumber === trainNumber)
  }
  res.header("Content-Type: application/json; charset=utf-8").send(data).end()
}))

router.get("/train_information", asyncHandler(async (req, res) => {
  if (!req.query.railway?.toString()) {
    res.status(400).send("railway is required").end()
    return
  }
  res.header("Content-Type: application/json; charset=utf-8").send(await getTrainInformationForRailway(req.query.railway.toString())).end()
}))

export default router
