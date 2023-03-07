import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['filled', 'outlined'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  id: 'filled-template',
  children: 'Filled',
};

export const Outlined = Template.bind({});
Outlined.args = {
  id: 'outlined-template',
  children: 'Outlined',
};
