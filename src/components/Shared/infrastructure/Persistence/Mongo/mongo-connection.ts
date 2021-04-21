import mongoose, { ConnectionOptions } from 'mongoose'
import config from '../../Http/env.config'
import { loggerInfo } from '../../Logger/logger-info'

const { mongodbUrl } = config

let options: ConnectionOptions
 options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false,
    poolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4,
}

class MongoConnection {
  constructor() {
    try {
      loggerInfo('Establish new connection with the DB')
      mongoose.connect(mongodbUrl, options)
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default new MongoConnection()
