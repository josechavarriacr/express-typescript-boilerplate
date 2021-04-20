import { Router } from 'express';
import glob from 'glob';
import path from 'path'

export function registerRoutes(router: Router) {
  const pathToFind = path.resolve(__dirname, '../../../../../')
  const routes = glob.sync(pathToFind + '**/*.route.*');
  routes.map(route => register(route, router));
}

function register(routePath: string, router: Router) {
  const route = require(routePath);
  route.register(router);
}
