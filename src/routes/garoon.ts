import express from "express"
const router = express.Router()
import asyncHandler from "express-async-handler"

const padZero = (num: number) => (num < 10 ? `0${num}` : num)

router.get("/visitors", asyncHandler(async (req, res) => {
  const numbers: number[] = []
  for (let i = 1; i < 67; i++) {
    numbers.push(i)
  }
  const now = new Date()
  const date = req.query.date?.toString() || `${now.getFullYear()}-${padZero(now.getMonth() + 1)}-${padZero(now.getDate())}`
  const rangeStart = `${date}T00:00:00+09:00`
  const rangeEnd = `${date}T23:59:59+09:00`
  const response = await fetch(`https://${process.env.CYBOZU_SUBDOMAIN}.cybozu.com/g/api/v1/schedule/events?target=${req.query.target?.toString()}&targetType=user&rangeStart=${encodeURIComponent(rangeStart)}&rangeEnd=${encodeURIComponent(rangeEnd)}&keyword=来客`, {
    headers: {
      'X-Cybozu-Authorization': process.env.GAROON_AUTH!,
    },
  })
  const data = await response.json()
  res.header("Content-Type: application/json; charset=utf-8").send(data).end()
}))

export default router
