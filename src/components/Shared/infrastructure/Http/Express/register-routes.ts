import { Router } from 'express';
import todosRouter from '../../../../Todo/infrastructure/todos.route';
import { HttpRequest, HttpResponse } from './express-controller';

export function registerRoutes(router: Router) {
  router.get('/', (req: HttpRequest, res: HttpResponse) => res.json('Express + TypeScript Server'));
  router.use('/api/todos', todosRouter)
}
