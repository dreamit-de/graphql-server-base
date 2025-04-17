import type { GraphQLRequestInfo } from './GraphQLRequestInfo'
import type { GraphQLServerRequest } from './GraphQLServerRequest'

export function isGraphQLServerRequest(
    request: GraphQLServerRequest | GraphQLRequestInfo,
): request is GraphQLServerRequest {
    return 'headers' in request && 'method' in request
}
