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
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the password field',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the password field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
} satisfies Meta<typeof Password>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Component(args) {
    const [value, setValue] = useState(args.value || '');
    return (
      <Password
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Password',
  },
};

export const WithValue: Story = {
  render: function Component(args) {
    const [value, setValue] = useState(args.value || '');
    return (
      <Password
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Current Password',
    value: 'mypassword123',
  },
};

export const Disabled: Story = {
  render: function Component(args) {
    const [value, setValue] = useState(args.value || '');
    return (
      <Password
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Password',
    disabled: true,
  },
};
