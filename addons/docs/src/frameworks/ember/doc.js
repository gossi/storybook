import {
  extractArgTypes as jsonExtractArgTypes,
  extractComponentDescription as jsonExtractComponentDescription,
} from './jsondoc';
import {
  extractArgTypes as apiExtractArgTypes,
  extractComponentDescription as apiExtractComponentDescription,
} from './api-extractor';

export const extractArgTypes = (componentName) => {
  // try json doc from ember-cli-addon-docs first
  let args = jsonExtractArgTypes(componentName);

  // try from api-extractor if not found yet
  if (!args) {
    args = apiExtractArgTypes(componentName);
  }

  return args;
};

export const extractComponentDescription = (componentName) => {
  // try json doc from ember-cli-addon-docs first
  let desc = jsonExtractComponentDescription(componentName);

  // try from api-extractor if not found yet
  if (!desc) {
    desc = apiExtractComponentDescription(componentName);
  }

  return desc;
};
