import { HttpRouter } from '../../Shared/infrastructure/Http/Express/express-routes'
import todoController from '../application/todo.controller'

const todosRouter = HttpRouter()

todosRouter.route('/')
    .get(todoController.findAll)
    .post(todoController.createOne)

export default todosRouter
