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
