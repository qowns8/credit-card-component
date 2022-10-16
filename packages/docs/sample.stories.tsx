import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sample from '@react-component-boilerplate/component'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Sample',
  component: Sample,
} as ComponentMeta<typeof Sample>;

const Template: ComponentStory<typeof Sample> = (args) => <Sample {...args} />;

export const abc = Template.bind({})
