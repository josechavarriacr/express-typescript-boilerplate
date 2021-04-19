import express from 'express'
import bodyParser, { urlencoded } from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import fs from 'fs'
import path from 'path'
// import setRoutes from './routes'

export const app = express()

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
  path.resolve('access.log'),
  { flags: 'a' }
)
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
app.use(morgan('dev'))


app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(cors())
app.use(urlencoded({ extended: true }))
// app.use('/api', setRoutes)

export default app