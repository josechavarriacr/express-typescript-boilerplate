import express, { Request, Response, Router } from 'express';
import bodyParser, { urlencoded } from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import fs from 'fs'
import path from 'path'
import compress from 'compression'
import { registerRoutes } from './app.routes'
import chalk from 'chalk'
import * as http from 'http'

// import setRoutes from './routes'

// export const app = express()

// // create a write stream (in append mode)
// const accessLogStream = fs.createWriteStream(
//   path.resolve('access.log'),
//   { flags: 'a' }
// )
// // setup the logger
// app.use(morgan('combined', { stream: accessLogStream }))
// app.use(morgan('dev'))


// app.disable('x-powered-by')
// app.use(bodyParser.json())
// app.use(cors())
// app.use(urlencoded({ extended: true }))
// // app.use('/api', setRoutes)

// export default app

export class Server {
  private express: express.Express
  private port: number
  private accessLogStream = fs.createWriteStream(path.resolve('access.log'),{ flags: 'a' })
  private httpServer?: http.Server;

  constructor(port: number) {
    this.port = port
    this.express = express()

    this.express.use(morgan('combined', { stream: this.accessLogStream }))
    this.express.use(morgan('dev'))
    this.express.disable('x-powered-by')
    this.express.use(bodyParser.json())
    this.express.use(cors())
    this.express.use(urlencoded({ extended: true }))
    this.express.use(compress())
    const router = Router()
    // router.use(errorHandler())
    this.express.use(router)

    registerRoutes(router)

    router.use((err: Error, req: Request, res: Response, next: Function) => {
      // tracking error log
      res.status(500).send(err.message)
    })
  }

  async listen(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = this.express.listen(this.port, () => {
        chalk.green(`Backend App is running at http://localhost:${this.port} in ${this.express.get('env')} mode`)
        chalk.green('  Press CTRL-C to stop\n')
        resolve()
      })
    })
  }

  getHTTPServer() { return this.httpServer }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) return reject(error)
          return resolve()
        })
      }
      return resolve()
    })
  }

}
