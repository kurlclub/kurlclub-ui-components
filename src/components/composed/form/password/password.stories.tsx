import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Password } from './password';

const meta = {
  title: 'Form/Password',
  component: Password,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Password>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultComponent = () => {
  const [value, setValue] = useState('');
  return (
    <Password
      label="Password"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const WithValueComponent = () => {
  const [value, setValue] = useState('mypassword123');
  return (
    <Password
      label="Current Password"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default: Story = {
  render: DefaultComponent,
  args: {
    label: 'Password',
  },
};

export const WithValue: Story = {
  render: WithValueComponent,
  args: {
    label: 'Current Password',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Password',
    disabled: true,
    value: '',
  },
};
