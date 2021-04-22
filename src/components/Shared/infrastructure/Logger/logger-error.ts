import chalk from 'chalk'

const { red } = chalk
const { error } = console

export function loggerError(message: string): void {
    error(red(`❌ ${message}`))
}