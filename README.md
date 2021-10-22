# API First Workbench - Process and tools for using API First
API First is a core API design principle used by many companies including [Equinor](https://www.equinor.com/). 

With the process and tools in this repo, we provide a structured method of handling the complexity of API First from initial establishment and throughout the lifecycle of the API.
This to promote a Test Driven Development (TDD) approach to API development.
## Background
This repo was created based on the experience in the Maintenance API team in [Equinor](https://www.equinor.com/) and open-sourced under Apache 2.0 License.
[Equinor's API strategy](https://github.com/equinor/api-strategy/blob/master/docs/strategy.md) has been central and is a great reference.

The goal is for the repo to provide value both internally in the company and outside, and hopefully inspire others to contribute and improve upon it. 
## Features of our workbench
Promote a Test Driven Development (TDD) approach to API development through the following features: 

1. Manage and update OpenAPI contract via [openapi-editor](https://github.com/Codermar/openapi-editor)
1. Verification of OpenAPI contract adherence to standard and best practices through [Spectral](https://stoplight.io/open-source/spectral/) linting tool
1. Automatically generate developer documentation based on [Redoc](https://github.com/Redocly/redoc) - See [https://equinor.github.io/api-first-workbench/](https://equinor.github.io/api-first-workbench/)
1. Manage maturing of future releases through release branches with separate developer documentation available for each branch
1. OpenAPI validating proxy for verify implemented API is inline with contract using [Prism](https://github.com/stoplightio/prism) 
1. Code review process through pull requests with automated checks
1. Transform OpenAPI contract automatically to mitigate unsupported features in Azure API Management
1. Support API evolution through deprecation of endpoints and resource properties in OpenAPI contract
1. Issue templates for bug reports and feature requests

## Getting started
Itching to get started ? Do the following:  
1. Clone this repo
2. Setup github pages to use the gh-pages-source branch
3. Update the api-contract.yaml and commit
4. Wait 1-2 minutes for the Github actions to finish
5. Visit [https://<github_account>.github.io/<repo_name>/](https://<github_account>.github.io/<repo_name>/) for developer documentation

## API First
API First has two key elements:  
- Define the API using a standard specification language before any line of code is written
- Get feedback on the API definition from team members and client developers

With the API first approach, we can achieve:  
- Evolving the API and learn about it’s usage in an efficient matter, without having to write any code
- Decoupling of API design and development. The API definition becomes a contract that teams can work on without having to wait for the implementation to be completed. And the implementation can be changed / replaced without impacting the clients.
- Specifying APIs with a standard specification language facilitates usage of tools for generating documentation, mock code, automatic quality checks, API Management tools, etc.

