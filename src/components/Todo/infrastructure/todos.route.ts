import { HttpRequest, HttpResponse } from '../../Shared/infrastructure/Http/Express/express-controller'
import { HttpRouter } from '../../Shared/infrastructure/Http/Express/express-routes'


const todosRouter = HttpRouter()

todosRouter.route('/').get((req: HttpRequest, res: HttpResponse) => res.json('Todo Endpoint'))

export default todosRouter
