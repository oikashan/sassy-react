import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { SassyButton } from '../../src';

import {
  defaultArgTypesWithChildren,
  getOptionalStringArgType,
} from './stories.utils';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components / SassyButton',
  component: SassyButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ...defaultArgTypesWithChildren,
    iconTop: getOptionalStringArgType(
      "A valid node to insert above the button's text"
    ),
    iconEnd: getOptionalStringArgType(
      "A valid node to insert next to the button's text"
    ),
    iconBottom: getOptionalStringArgType(
      "A valid node to insert below the button's text"
    ),
    iconStart: getOptionalStringArgType(
      "A valid node to insert before the button's text"
    ),
  },
} as ComponentMeta<typeof SassyButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SassyButton> = (args) => (
  <SassyButton {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Button',
  iconTop: '💄',
  iconEnd: '👅',
  iconBottom: '👄',
  iconStart: '👅',
};
