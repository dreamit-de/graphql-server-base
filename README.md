# graphql-server-base

Base package for [@dreamit/graphql-server][1]. Contains constants and interfaces that can be used in graphql-server and extensions.

## Installation

```sh
npm install --save @dreamit/graphql-server-base
```

TypeScript declarations are provided within the project.

**Note:**

If you want to publish your own extension it is advised to install **@dreamit/graphql-server-base** as **peerDependency**. This way you can define which version range your extension supports and it might be usable in multiple major versions of [@dreamit/graphql-server][1] (if they depend on the same range of this base module).
Example in package.json for peerDependencies:

```json
"peerDependencies": {
    "@dreamit/graphql-server-base": "^1.0.0"
}
```

## Compatibility

**@dreamit/graphql-server-base** is compatible with [graphql-js][2] version ^16.0.0 and [funpara][3] version ^1.0.0. For compatibility with [@dreamit/graphql-server][1] please check **Compatibility** section in the **graphql-server** readme.

## Content of this base module

All content of this module is exported in the root **index.ts** file. This means you can import it using an import statement like

```typescript
import { MetricsClient } from '@dreamit/graphql-server-base'
```

### Constants

In **error/ErrorNameConstants.ts** constants to identify/display errors are provided. In **request/ContentType.ts** the content type used by [@dreamit/graphql-server][1] is available as type.

### Interfaces

Interfaces for creating your own **Logger** or **MetricsClient** are available in this module. Additionally, the interfaces used by [@dreamit/graphql-server][1] for handling requests and responses are provided. For validation and [Standard Schema][4] support the **StandardSchemaV1** interface is contained in the project and exported.

## Example

The `NoLogger` class in the [@dreamit/graphql-testing][5] library can be used as an example on how to implement the `Logger` interface.

## Contact

If you have questions or issues please visit our [Issue page](https://github.com/dreamit/graphql-server-base/issues)
and open a new issue if there are no fitting issues for your topic yet.

## License

graphql-server is under [MIT-License](./LICENSE).

[1]: https://github.com/dreamit-de/graphql-server
[2]: https://github.com/graphql/graphql-js
[3]: https://github.com/dreamit-de/funpara
[4]: https://standardschema.dev/
[5]: https://github.com/dreamit-de/graphql-testing
