import { NextFunction } from 'express'
import { loggerError } from '../../Logger/logger-error'
import { HttpRequest, HttpResponse } from './express-controller'

const MiddlewareErrors = (err: Error, req: HttpRequest, res: HttpResponse, next: NextFunction ) => {
    // push error into tracking errors
    loggerError(err.message)
    res.status(500).json({
        status: false,
        message: err.message,
        key:'error:notfound'
    })
}

export default MiddlewareErrors