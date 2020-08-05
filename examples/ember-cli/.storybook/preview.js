import { setJSONDoc, setApiDoc } from '@storybook/addon-docs/ember';
// eslint-disable-next-line import/no-unresolved
import docJson from '../ember-output/storybook-docgen/index.json';
// eslint-disable-next-line import/no-unresolved
import apiDoc from './api-extractor.api.json';

setJSONDoc(docJson);
setApiDoc(apiDoc);
