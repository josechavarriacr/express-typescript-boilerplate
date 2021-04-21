import { HttpRequest, HttpResponse, HttpNextFunction } from '../../Shared/infrastructure/Http/Express/express-controller'

class TodoController {
    findAll = async (req: HttpRequest, res: HttpResponse, next: HttpNextFunction) => {
        try {
            res.json('hello from todo.controller')
        } catch (error) {
            next(error)
        }
    }
}

export default new TodoController()