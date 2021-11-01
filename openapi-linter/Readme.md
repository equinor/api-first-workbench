#openapi-linter
The OpenAPI linter is used to verify the consistency of the OpenAPI contract after doing changes. 

## Spectral
The workbench uses [Spectral](https://meta.stoplight.io/docs/spectral), an open-source tool, as the openapi-proxy-validator. 
In addition to OpenAPI 3.x rules, it allows us to define custom rules we believe is important in order to improve developer experience.

## Setup
`npm install -g @stoplight/spectral-cli` - Installing spectral locally
`.github/workflows/openapi-lint-spectral` - Github action job for running linting on any commits to the API contract.

## Running
Navigate to directory `openapi-linter/` and execute command `spectral lint ..\openapi-contract\api-contract.yaml`

## Ruleset
The ruleset of spectral is defined in file `openapi-linter/.spectral.yml`.

## Custom rules
`operation-description` - Error (and not just warning) if description is missing for an operation  
`oas3-valid-oas-content-example`- Error (and not just warning) if examples do not follow the data schema of the operation  
`operation-tag-defined`- Error (and not just warning) if there is no tag for an operation  
`patch-post-must-have-examples` - Custom rule for requiring examples when using patch and post verbs for an operation  
