FROM stoplight/prism:latest

COPY OpenAPI/generated/maintenance-api-flattened.yaml ./

EXPOSE 4010
USER 9000
CMD ["proxy", "-h", "0.0.0.0",  "maintenance-api-flattened.yaml", "https://api-dev.gateway.equinor.com"]
