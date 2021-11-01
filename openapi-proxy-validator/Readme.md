# openapi-proxy-validator
The OpenAPI validating proxy is used to verify the request and response from the API is inline with the API contract. 
Through this it supports the Test Driven Development (TDD) approach to API implementation. 

## Prism
The workbench uses [Prism](https://meta.stoplight.io/docs/prism/), an open-source tool, as the openapi-proxy-validator. 

## Setup
`openapi-proxy-validator/openapi_proxy_validator.Dockerfile`: The docker file for the prism system  
It uses `openapi-contract/generated/api-contract-flattened.yaml` as the API contract. This file is created from `openapi-contract/api-contract.yaml`, but allOf references used for inheritance has been normalized by through Github action job `.github/workflows/openapi_prepare_for_prism.yml`.
The last parameter to the CMD command must be the endpoint for the API.

`radixconfig.yaml`: Used in Equinor to configure the runtime environment of the openapi-proxy-validator
