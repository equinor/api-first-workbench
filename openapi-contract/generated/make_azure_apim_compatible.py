import sys
import yaml


def make_azure_apim_compatible(yaml_path):
    with open(yaml_path, 'r') as stream:
        try:
            loaded_yaml = yaml.safe_load(stream)
            pop_examples(loaded_yaml, 0)
            output = yaml_path.split('.y')[0] + '-azure-apim-compatible.yaml'
            path = output.split('openapi-contract/')
            final_output = path[0] + 'openapi-contract/generated/' + path[1]
            stream = open(final_output, 'w')
            yaml.dump(loaded_yaml, stream)
        except yaml.YAMLError as exc:
            print(exc)


def pop_examples(dictionary, key_index):
    if type(dictionary) is not dict:
        return
    for key in list(dictionary.keys()):
        if key == 'examples':
            dictionary.pop(key)
        elif type(dictionary.get(key)) is dict:
            pop_examples(dictionary.get(key), key_index+1)
        else:
            continue


if __name__ == '__main__':
    if len(sys.argv) != 2:
        raise SystemError('You need to pass one argument as input (OpenAPI contract yaml file reference)')
    make_azure_apim_compatible(sys.argv[1])
