import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Sample from '@react-component-boilerplate/component'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Sample',
  component: Sample,
} as ComponentMeta<typeof Sample>;

const Template1: ComponentStory<typeof Sample> = (args) => <Sample
  colorSetting={{
    font: '#bbb'
  }}
  backgroundSet={{
    front: {
      x1: 'https://media2.giphy.com/media/3YKEA2gTCbZMoMWbKk/giphy.gif?cid=ecf05e47i4yzazwb16525v8vh2pzjt6fh02z8sllky9nc6kh&rid=giphy.gif&ct=g 1030w',
      x2: 'https://media0.giphy.com/media/3ohzAN9PzGgxpQaiM8/giphy.gif?cid=ecf05e47nio07ieflmuggzj8sb0nagr48zuqi4qa5a54zham&rid=giphy.gif&ct=g 2000w',
      size: '(max-width: 1030px) 1030px, (max-width: 2000px) 2000px'
    }
  }}
  {
  ...args
} />;

export const ImageBackground = Template1.bind({})

const Template2: ComponentStory<typeof Sample> = (args) => <Sample
  colorSetting={{
    font: '#fff'
  }}
  backgroundSet={{
    front: {
      x1: <div style={{ width: '100%', height: '100%', background: '#1d1e22'}} />
    }
  }}
  {
    ...args
  } />;

export const ComponentBackground = Template2.bind({})