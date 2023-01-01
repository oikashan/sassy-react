import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { SassyAvatar } from '../../src';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components / SassyAvatar',
  component: SassyAvatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes,
} as ComponentMeta<typeof SassyAvatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SassyAvatar> = (args) => (
  <SassyAvatar {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  size: 'md',
  color: '#ff339e',
  src: '/sassy-react-logo.png',
  fallbackImgSrc: '/fallback.png',
};

/**
 * Notice the src attribute. Surely no such image exists and hence our fallback
 * jumps in to save the day!
 */
export const InvalidSource = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InvalidSource.args = {
  size: 'md',
  src: 'https://not-sassy.png',
  fallbackImgSrc: '/fallback.png',
};

/**
 * If you don't provide the `src` and the `fallbackImgSrc` attribute, this cool
 * little dude will show up in any color you want.
 */
export const AllSourcesInvalid = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AllSourcesInvalid.args = {
  size: 'md',
  color: '#ff339e',
};
