import express, { Router } from 'express';
import bodyParser, { urlencoded } from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import fs from 'fs'
import path from 'path'
import { registerRoutes } from './register-routes';
import compress from 'compression'
export const server = express()

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.resolve('access.log'),{ flags: 'a' })
// setup the logger
server.use(morgan('combined', { stream: accessLogStream }))
server.use(morgan('dev'))


server.disable('x-powered-by')
server.use(bodyParser.json())
server.use(cors())
server.use(urlencoded({ extended: true }))
server.use(compress())

const router = Router()

server.use(router)
registerRoutes(router)

export default server
