import chalk from 'chalk'

const { red } = chalk
const { error } = console

export function loggerError(message: string): void {
    const emojiX = String.fromCodePoint(0x274C)
    const emojiXplotingHead = String.fromCodePoint(0x1F92F)
    error(red(`  ${emojiXplotingHead} ${emojiX} ${message}`))
}