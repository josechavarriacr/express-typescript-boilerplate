import mongoose, { ConnectionOptions } from 'mongoose'
import config from '../../Config/Environment/env.config'
import { loggerInfo } from '../../Logger/logger-info'

const { mongodbUrl, database } = config

class MongoConnection {
    private options: ConnectionOptions
    constructor() {
        this.options = {
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
    }
    run() {
        try {
                loggerInfo(`  Establish new connection with the DB ${database}`)
                mongoose.connect(mongodbUrl, this.options)
            } catch (error) {
                throw new Error(error)
        }
    }
}

export default new MongoConnection()
