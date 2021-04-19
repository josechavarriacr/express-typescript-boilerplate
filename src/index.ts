import chalk from 'chalk'
import express from 'express'
const app = express();
const PORT = 3000;
const { blue, red } = chalk



app.get('/', (req, res) => res.send('Express + TypeScript Server??'));
app.listen(PORT, () => {
    console.log(blue(`Server is running at https://localhost:${PORT}`))
});