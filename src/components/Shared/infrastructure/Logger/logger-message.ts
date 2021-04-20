import chalk from 'chalk'

const { green } = chalk
const { log } = console

export function loggerMessage(message: string): void {
    log(green(message))
}