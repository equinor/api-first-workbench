FROM stoplight/prism:latest

COPY openapi-contract/generated/api-contract-flattened.yaml ./

EXPOSE 4010
USER 9000
CMD ["proxy", "-h", "0.0.0.0",  "api-contract-flattened.yaml", "https://api-dev.gateway.equinor.com"]