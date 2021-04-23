
import config from './components/Shared/infrastructure/Config/Environment/env.config';
import server from './components/Shared/infrastructure/Http/Express/express-server.config';
import { loggerMessage } from './components/Shared/infrastructure/Logger/logger-message';
import { loggerInfo } from './components/Shared/infrastructure/Logger/logger-info';
import mongoConnection from './components/Shared/infrastructure/Persistence/Mongo/mongo-connection';

const { port, env, apiName } = config

server.listen(port, () => {
    loggerMessage(`${apiName} is running at http://localhost:${port}`)
    loggerMessage(`${apiName} is running in ${env} mode`)
    mongoConnection.run()
    loggerInfo('Press CTRL-C to stop\n')
})