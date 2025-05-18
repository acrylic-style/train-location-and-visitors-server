import express from 'express'
import logger from 'morgan'
import cors from 'cors'

import indexRouter from './routes/index'
import garoonRouter from './routes/garoon'

const app = express()

app.set('x-powered-by', false)

app.use(cors({origin: '*'}))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', indexRouter)
app.use('/garoon', garoonRouter)

export default app
