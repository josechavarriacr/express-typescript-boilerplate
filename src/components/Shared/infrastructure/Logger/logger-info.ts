import chalk from 'chalk'

const { blue } = chalk
const { info } = console

export function loggerInfo(message: string): void {
    const emoji = String.fromCodePoint(0x1F197)
    info(blue(`  ${emoji}  ${message}`))
}