# openapi-contract
The OpenAPI contract is central for the whole workbench. 

It is basis for:
- Developer documentation
- Test cases
- Mock data
- Maturing/specification
- Openapi-proxy-validator
- Code generation

## openapi-editor
[openapi-editor](https://github.com/Codermar/openapi-editor) can be used to edit the OpenAPI/Swagger definition.
The openapi-editor is a wrapper on top of the standard swagger-editor, but also persist the file constantly on the file system to all easier version management.

There are also multiple other editors which can be used.

## Setup 
Install via `npm -g install openapi-editor`

## Run
Run via `npx openapi-editor --file ./api-contract.yaml`

## Developer documentation
Developer documentation is automatically generated based on [Redoc](https://github.com/Redocly/redoc) and published to [https://equinor.github.io/api-first-workbench/](https://equinor.github.io/api-first-workbench/). 
This is done using Github action `.github/workflows/openapi_generate_redoc_docs.yml`.

If the commit to API contract is done outside the main branch, for example `release/v1.1.0`, the documentation url will contain the branch name [https://equinor.github.io/api-first-workbench/v1.1.0](https://equinor.github.io/api-first-workbench/v1.1.0).

## Generated files
The following files are generated via Github actions when the `api-contract.yaml` is updated.

`openapi-contract/generated/api-contract-apim-compatible.yaml` - Compensates for [unsupported OpenAPI functionality in Azure API Management](https://docs.microsoft.com/en-us/azure/api-management/api-management-api-import-restrictions#unsupported)  
`openapi-contract/generated/api-contract-with-full-path.yaml` - Needed for openapi-proxy-validator to give the full path of all endpoint (ie. include the API root name)  
`openapi-contract/generated/api-contract-flattened.yaml` - Normalizes $ref and allOf references in the API. Needed for openapi-proxy-validator.
