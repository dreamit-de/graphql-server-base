import type { GraphQLErrorWithInfo } from '../error/GraphQLErrorWithInfo'

export interface GraphQLRequestInfo {
    query?: string
    variables?: Readonly<Record<string, unknown>>
    operationName?: string
    error?: GraphQLErrorWithInfo
}
