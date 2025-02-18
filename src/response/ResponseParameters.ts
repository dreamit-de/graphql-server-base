import { ExecutionResult, GraphQLError, GraphQLFormattedError } from 'graphql'
import { Logger } from '../logger/Logger'
import { GraphQLServerRequest } from '../request/GraphQLServerRequest'
import { StandardSchemaV1 } from '../validation/StandardSchemaV1'
import { GraphQLServerResponse } from './GraphQLServerResponse'

export interface ResponseParameters {
    readonly context: unknown
    readonly customHeaders?: Record<string, string>
    readonly executionResult?: ExecutionResult
    readonly formatErrorFunction: (error: GraphQLError) => GraphQLFormattedError
    readonly logger: Logger
    readonly request?: GraphQLServerRequest
    readonly response: GraphQLServerResponse
    readonly responseEndChunkFunction?: (
        executionResult: ExecutionResult | undefined,
    ) => unknown
    readonly responseStandardSchema?: StandardSchemaV1
    readonly statusCode?: number
}
