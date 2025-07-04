import type {
    ExecutionResult,
    GraphQLError,
    GraphQLFormattedError,
} from 'graphql'
import type { Logger } from '../logger/Logger'
import type { GraphQLServerRequest } from '../request/GraphQLServerRequest'
import type { StandardSchemaV1 } from '../validation/StandardSchemaV1'
import type { GraphQLServerResponse } from './GraphQLServerResponse'
import type { ResponseFormat } from './ResponseFormat'

export interface ResponseParameters {
    // Required fields
    readonly context: Record<string, unknown>
    readonly executionResult: ExecutionResult
    readonly formatErrorFunction: (error: GraphQLError) => GraphQLFormattedError
    readonly logger: Logger
    readonly response: GraphQLServerResponse
    readonly responseEndChunkFunction: (
        executionResult: ExecutionResult | undefined,
    ) => unknown
    readonly responseStandardSchema: StandardSchemaV1
    // Optional fields
    readonly customHeaders?: Record<string, string>
    readonly request?: GraphQLServerRequest
    readonly responseFormat?: ResponseFormat
    readonly statusCode?: number
}
