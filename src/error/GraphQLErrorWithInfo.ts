import type { GraphQLError } from 'graphql'

export interface GraphQLErrorWithInfo {
    graphQLError: GraphQLError
    statusCode?: number
    customHeaders?: Record<string, string>
}
