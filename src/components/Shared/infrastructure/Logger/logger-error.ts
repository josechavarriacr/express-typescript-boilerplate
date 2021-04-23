import chalk from 'chalk'

const { red } = chalk
const { error } = console

export function loggerError(message: string): void {
    const emoji = String.fromCodePoint(0x274C)
    error(red(`  ${emoji}  ${message}`))
}