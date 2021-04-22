import { NextFunction } from 'express'
import { loggerError } from '../../Logger/logger-error'
import { HttpRequest, HttpResponse } from './express-controller'

const  MiddlewareNotFound = (req: HttpRequest, res: HttpResponse) => {
    loggerError('The route does not exists')
    res.status(404).json({
        status: false,
        message: 'The route does not exists',
    })
}

export default  MiddlewareNotFound