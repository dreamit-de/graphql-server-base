import type { DateFunction } from '@dreamit/funpara'

export interface Logger {
    readonly loggerName: string
    readonly serviceName: string
    readonly debugEnabled: boolean

    debug(
        logMessage: string,
        context: Record<string, unknown>,
        dateFunction?: DateFunction,
    ): void
    error(
        logMessage: string,
        context: Record<string, unknown>,
        error: Error,
        customErrorName?: string,
        dateFunction?: DateFunction,
    ): void
    info(
        logMessage: string,
        context: Record<string, unknown>,
        dateFunction?: DateFunction,
    ): void
    warn(
        logMessage: string,
        context: Record<string, unknown>,
        dateFunction?: DateFunction,
    ): void
}
