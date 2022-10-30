import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sample from '@react-component-boilerplate/component'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Sample',
  component: Sample,
} as ComponentMeta<typeof Sample>;

const Template: ComponentStory<typeof Sample> = (args) => <Sample
  colorSetting={{
    font: '#bbb'
  }}
  backgroundSet={{
    front: {
      x1: 'https://www.sciencenews.org/wp-content/uploads/2022/10/100622_lg_glob-cluster_feat-1030x580.jpg 1030w',
      x2: 'https://cdn.nextgov.com/media/img/cd/2020/10/19/NGspace20201019/route-fifty-lead-image.jpg?1627412209 2000w',
      size: '(max-width: 1030px) 1030px, (max-width: 2000px) 2000px'
    }
  }}
  {
  ...args
} />;

export const abc = Template.bind({})
