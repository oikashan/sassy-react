// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTarget: '_self',
  brandUrl: window.location.host,
  brandTitle: 'Sassy React',
  brandImage: '/logo.png',
});
