import chalk from 'chalk'

const { green } = chalk
const { log } = console

export function loggerMessage(message: string): void {
    const emoji = String.fromCodePoint(0x2705)
    log(green(`  ${emoji}  ${message}`))
}