import express, { Request, Response, Router } from 'express';
import bodyParser, { urlencoded } from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import fs from 'fs'
import path from 'path'
import { registerRoutes } from './app.routes';
// import compress from 'compression'
// import { registerRoutes } from './server.routes'

// import setRoutes from './routes'

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
  // server.use(compress())

  // Routes
  const router = Router()
  // router.use(errorHandler())
server.use(router)
registerRoutes(router)
router.use((err: Error, req: Request, res: Response, next: Function) => {
  // tracking error log
  res.status(500).send(err.message)
})

export default server

//   async listen(): Promise<void> {
//     return new Promise(resolve => {
//       this.httpServer = this.express.listen(this.port, () => {
//         chalk.green(`Backend App is running at http://localhost:${this.port} in ${this.express.get('env')} mode`)
//         chalk.green('  Press CTRL-C to stop\n')
//         resolve()
//       })
//     })
//   }
// }
