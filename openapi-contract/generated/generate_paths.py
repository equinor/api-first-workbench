import sys
import yaml


def add_maintenance_api_to_path(yaml_path):
    with open(yaml_path, 'r') as stream:
        try:
            loaded_yaml = yaml.safe_load(stream)
            prepend_paths(loaded_yaml)
            output = yaml_path.split('.y')[0] + '-with-full-path.yaml'
            path = output.split('openapi-contract/')
            final_output = path[0] + 'openapi-contract/generated/' + path[1]
            stream = open(final_output, 'w')
            yaml.dump(loaded_yaml, stream)
        except yaml.YAMLError as exc:
            print(exc)

# Add the api-first-workbench prefix defined in API Management to all paths
def prepend_paths(oas):
    if type(oas) is not dict:
        return
    paths = oas['paths']
    for key in list(paths):
        paths['/api-first-workbench' + key] = paths[key]
        del paths[key]


if __name__ == '__main__':
    if len(sys.argv) != 2:
        raise SystemError('You need to pass one argument with input to OAS yml file')
    add_maintenance_api_to_path(sys.argv[1])
