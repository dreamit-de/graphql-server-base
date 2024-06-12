import { GraphQLRequestInfo, GraphQLServerRequest } from '../'

export function isGraphQLServerRequest(
    request: GraphQLServerRequest | GraphQLRequestInfo,
): request is GraphQLServerRequest {
    return 'headers' in request && 'method' in request
}
