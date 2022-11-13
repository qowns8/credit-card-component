import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Sample from '@react-component-boilerplate/component'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Sample',
  component: Sample,
} as ComponentMeta<typeof Sample>;

const Template1: ComponentStory<typeof Sample> = (args) => <div style={{ width: '856px', height: '539px', fontSize: '28px'}}>
  <Sample
    colorSetting={{
      font: 'white'
    }}
    backgroundSet={{
      front: {
        x1: 'https://images4.alphacoders.com/116/1164518.jpg 1030w',
        x2: 'https://images4.alphacoders.com/116/1164518.jpg 2000w',
        size: '(max-width: 1030px) 1030px, (max-width: 2000px) 2000px'
      },
      back: {
        x1: 'https://images2.alphacoders.com/120/1209113.jpg 1030w',
        x2: 'https://images2.alphacoders.com/120/1209113.jpg 2000w',
        size: '(max-width: 1030px) 1030px, (max-width: 2000px) 2000px'
      }
    }}
    {
      ...args
    } />
</div>

export const ImageBackground = Template1.bind({})

const Template2: ComponentStory<typeof Sample> = (args) => <Sample
  colorSetting={{
    font: '#bbb'
  }}
  backgroundSet={{
    front: {
      x1: <div style={{ width: '100%', height: '100%', background: '#1d1e22'}} />
    },
    back: {
      x1: <div style={{ width: '100%', height: '100%', background: '#1d1e22'}} />
    }
  }}
  {
    ...args
  } />;

export const ComponentBackground = Template2.bind({})