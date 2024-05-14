import * as log from 'pino'

export const logger = log.pino({
    timestamp: () => `"timestamp":"${new Date(Date.now()).toISOString()}"`
})