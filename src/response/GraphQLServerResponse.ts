export interface GraphQLServerResponse {
    statusCode: number
    // Either header or setHeader should be provided in order to set the response headers.
    header?(name: string, value: number | string | ReadonlyArray<string>): this
    setHeader?(
        name: string,
        value: number | string | ReadonlyArray<string>,
    ): this
    // Either end or send should be provided in order to send the response.
    end?(chunk: unknown, callback?: () => void): this
    send?(chunk: unknown, callback?: () => void): this
    removeHeader(name: string): void
}
