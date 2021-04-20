import chalk from 'chalk';
import config from './components/Shared/infrastructure/Http/env.config';
import app from './components/Shared/infrastructure/Http/Express/express-server.config';
const { port } = config

app.get('/', (req, res) => res.send('Express + TypeScript Server??'));

app.listen(port, () => {
    console.log(chalk.blue(`Server is running at http://localhost:${port}`))
});