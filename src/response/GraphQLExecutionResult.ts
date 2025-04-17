import type { ExecutionResult } from 'graphql'
import type { GraphQLRequestInfo } from '../request/GraphQLRequestInfo'

/**
 * Interface for execution results.
 * Contains the GraphQL related ExecutionResult as well as statusCode and customHeaders that might
 * contain additional information for handling responses. The requestInformation is available
 * to have both the result and request information in one interface, e.g. to use it for caching.
 */
export interface GraphQLExecutionResult {
    executionResult: ExecutionResult
    statusCode?: number
    customHeaders?: Record<string, string>
    requestInformation?: GraphQLRequestInfo
}
