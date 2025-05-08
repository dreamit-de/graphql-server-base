import type { DateFunction } from '@dreamit/funpara'
import type { LogLevel } from './LogLevel'

export interface LogEntryInput {
    context: Record<string, unknown>
    customErrorName?: string
    dateFunction?: DateFunction
    error?: Error
    logMessage: string
    loglevel?: LogLevel
    loggerName?: string
    serviceName?: string
}
