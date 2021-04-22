import { Router } from 'express';
import todosRouter from '../../../../Todo/infrastructure/todos.route';
import { HttpRequest, HttpResponse } from './express-controller';
import MiddlewareErrors from './middleware-error';
import MiddlewareNotFound from './middleware-not-found';

export function registerRoutes(router: Router) {
  router.get('/', (req: HttpRequest, res: HttpResponse) => res.json('Express + TypeScript Server'))

    // Routes
  router.use('/api/todos', todosRouter)

    // 505 error
  router.use(MiddlewareErrors)

  // 404 not found
  router.all('*', MiddlewareNotFound)
}
