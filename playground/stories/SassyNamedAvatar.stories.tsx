import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { SassyNamedAvatar } from '../../src';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components / SassyNamedAvatar',
  component: SassyNamedAvatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
} as ComponentMeta<typeof SassyNamedAvatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SassyNamedAvatar> = (args) => (
  <SassyNamedAvatar {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  size: 'md',
  name: 'Hello World',
  backgroundColor: '#ff339e',
};
