import * as dotenv from'dotenv'

dotenv.config({ path: __dirname+'/.env' })
const env = process.env.NODE_ENV || 'development'

const config = {
  apiName: process.env.API_NAME || 'api name',
  env,
  isDev: env === 'development',
  isTest: env === 'testing',
  port: process.env.API_PORT || 5000,
  secrets: {
    jwt: process.env.JWT_SECRET || 'mercaditocr',
    jwtExp: process.env.JWT_EXP || '365d',
  },
}
export default config
