import { configure } from '@storybook/react';

configure([
  require.context('../components', true, /\.*\/index\.stories\.js$/),
], module);
