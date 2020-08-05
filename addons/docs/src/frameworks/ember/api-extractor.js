/* eslint-disable no-underscore-dangle */
/* global window */
export const setApiDoc = (doc) => {
  window.__EMBER_API_EXTRACTOR_DOC_MODEL__ = doc;
};

export const getApiDoc = () => {
  return window.__EMBER_API_EXTRACTOR_DOC_MODEL__;
};

export const extractArgTypes = (componentName) => {
  const doc = getApiDoc();
  if (!(doc && !doc.members)) {
    return null;
  }

  // console.log('COMPONENT', componentName);

  return null;

  // const entry = doc.members.find((member) => member.kind === 'EntryPoint');
  // if (!entry || !entry.members) {
  //   return null;
  // }

  // const canonicalReference = `${doc.name}!${componentName}:class`;

  // const component = findEntry()
};

const findEntry = (members, name, kind) => {
  return members.find((member) => member.kind === kind && member.name === name);
};

export const extractComponentDescription = (componentName) => {};
