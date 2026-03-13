import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Password } from './password';

type Variant = 'default' | 'login';
type StoryArgs = React.ComponentProps<typeof Password> & {
  variant?: Variant;
};

const meta = {
  title: 'Form/Password',
  component: Password,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    variant: 'default',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'login'],
      description: 'Visual variant for the password field',
    },
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
    isLogin: {
      table: { disable: true },
    },
  },
} satisfies Meta<StoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Component(args) {
    const { variant = 'default', ...rest } = args;
    const [value, setValue] = useState(args.value || '');
    return (
      <Password
        {...rest}
        isLogin={variant === 'login'}
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
    const { variant = 'default', ...rest } = args;
    const [value, setValue] = useState(args.value || '');
    return (
      <Password
        {...rest}
        isLogin={variant === 'login'}
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
    const { variant = 'default', ...rest } = args;
    const [value, setValue] = useState(args.value || '');
    return (
      <Password
        {...rest}
        isLogin={variant === 'login'}
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

export const Login: Story = {
  render: function Component(args) {
    const { variant = 'default', ...rest } = args;
    const [value, setValue] = useState(args.value || '');
    return (
      <Password
        {...rest}
        isLogin={variant === 'login'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Password',
    variant: 'login',
  },
};
