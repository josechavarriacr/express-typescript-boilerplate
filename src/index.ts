
import config from './components/Shared/infrastructure/Http/env.config';
import server from './components/Shared/infrastructure/Http/Express/express-server.config';
import { HttpRequest, HttpResponse } from './components/Shared/infrastructure/Http/Express/express-controller';
import { loggerMessage } from './components/Shared/infrastructure/Logger/logger-message';
import { loggerInfo } from './components/Shared/infrastructure/Logger/logger-info';

const { port, env, apiName } = config

server.get('/', (req: HttpRequest, res: HttpResponse) => res.send('Express + TypeScript Server??'));
server.listen(port, () => {
    loggerInfo('')
    loggerMessage(`  ${apiName} is running at http://localhost:${port}`)
    loggerMessage(`  ${apiName} is running in ${env} mode`)
    loggerInfo('  Press CTRL-C to stop\n')
})