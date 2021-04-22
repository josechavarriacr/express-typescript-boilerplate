import { HttpRequest, HttpResponse, HttpNextFunction } from '../../Shared/infrastructure/Http/Express/express-controller'
import TodoService from '../domain/todo.service'
import { TodoMongoRepository } from '../infrastructure/todo.mongo.repository'

class TodoController {
    private service: TodoService

    constructor() {
        this.service = new TodoService(new TodoMongoRepository())
        this.findAll = this.findAll.bind(this)
    }

    async findAll(req: HttpRequest, res: HttpResponse, next: HttpNextFunction) {
        try {
            const data = await this.service.findAll()
            const message = 'my message'
            const key = 'todo:found'
            const response = {  data, message, key }
            res.status(200).json(response)
        } catch (error) {
            next(error)
        }
    }
    async create(req: HttpRequest, res: HttpResponse, next: HttpNextFunction) {
        
    }
}

export default new TodoController()