import { global } from '@storybook/global';

const { window: globalWindow } = global;

globalWindow.STORYBOOK_NAME = process.env.STORYBOOK_NAME;
globalWindow.STORYBOOK_ENV = 'ember';
