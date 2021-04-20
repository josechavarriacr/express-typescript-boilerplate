import chalk from 'chalk'

const { blue } = chalk
const { info } = console

export function loggerInfo(message: string): void {
    info(blue(message))
}