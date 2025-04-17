import type { DateFunction } from '@dreamit/funpara'

export interface Logger {
    readonly loggerName: string
    readonly serviceName: string
    readonly debugEnabled: boolean

    debug(
        logMessage: string,
        context?: unknown,
        dateFunction?: DateFunction,
    ): void
    error(
        logMessage: string,
        error: Error,
        customErrorName?: string,
        context?: unknown,
        dateFunction?: DateFunction,
    ): void
    info(
        logMessage: string,
        context?: unknown,
        dateFunction?: DateFunction,
    ): void
    warn(
        logMessage: string,
        context?: unknown,
        dateFunction?: DateFunction,
    ): void
}
