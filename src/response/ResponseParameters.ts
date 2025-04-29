import {
    type ExecutionResult,
    GraphQLError,
    type GraphQLFormattedError,
} from 'graphql'
import type { Logger } from '../logger/Logger'
import type { GraphQLServerRequest } from '../request/GraphQLServerRequest'
import type { StandardSchemaV1 } from '../validation/StandardSchemaV1'
import type { GraphQLServerResponse } from './GraphQLServerResponse'

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
    readonly statusCode?: number
}
