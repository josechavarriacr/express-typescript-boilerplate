import config from './components/Shared/infrastructure/Http/env.config';
const { port } = config
import { Server } from './components/Shared/infrastructure/Http/Express/express-server.config'

const run = async() => {
    if (!port) throw new Error('Backoffice backend application has not been started')
    const app = new Server(port)
    return app.listen();
}

run()