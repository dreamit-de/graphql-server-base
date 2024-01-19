import { ExecutionResult, GraphQLError, GraphQLFormattedError } from 'graphql'
import { GraphQLServerRequest, GraphQLServerResponse, Logger } from '..'

export interface ResponseParameters {
    readonly response: GraphQLServerResponse
    readonly context: unknown
    readonly logger: Logger
    readonly formatErrorFunction: (error: GraphQLError) => GraphQLFormattedError
    readonly request?: GraphQLServerRequest
    readonly customHeaders?: Record<string, string>
    readonly executionResult?: ExecutionResult
    readonly statusCode?: number
    readonly responseEndChunkFunction?: (
        executionResult: ExecutionResult | undefined,
    ) => unknown
}
