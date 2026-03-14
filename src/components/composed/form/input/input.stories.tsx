import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

type Variant = 'default' | 'login';
type StoryArgs = React.ComponentProps<typeof Input> & {
  variant?: Variant;
};

const meta = {
  title: 'Form/Input',
  component: Input,
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
      description: 'Visual variant for the input',
    },
    label: {
      control: 'text',
      description: 'Label for the input field',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'number', 'tel', 'url'],
      description: 'Input type',
    },
    size: {
      control: 'radio',
      options: ['sm', 'default'],
      description: 'Size of the input field',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input field',
    },
    mandatory: {
      control: 'boolean',
      description: 'Mark field as mandatory',
    },
    suffix: {
      control: 'text',
      description: 'Suffix text (e.g., cm, kg)',
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
      <Input
        {...rest}
        isLogin={variant === 'login'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Full Name',
    type: 'text',
    placeholder: 'Enter your Full Name',
  },
};

export const WithSuffix: Story = {
  render: function Component(args) {
    const { variant = 'default', ...rest } = args;
    const [value, setValue] = useState(args.value || '');
    return (
      <Input
        {...rest}
        isLogin={variant === 'login'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Height',
    type: 'number',
    suffix: 'cm',
    placeholder: 'Enter height',
  },
};

export const Mandatory: Story = {
  render: function Component(args) {
    const { variant = 'default', ...rest } = args;
    const [value, setValue] = useState(args.value || '');
    return (
      <Input
        {...rest}
        isLogin={variant === 'login'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Full Name',
    mandatory: true,
    type: 'text',
    placeholder: 'Enter your name',
  },
};

export const Small: Story = {
  render: function Component(args) {
    const { variant = 'default', ...rest } = args;
    const [value, setValue] = useState(args.value || '');
    return (
      <Input
        {...rest}
        isLogin={variant === 'login'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Phone',
    type: 'tel',
    size: 'sm',
    placeholder: 'Enter phone number',
  },
};

export const Disabled: Story = {
  render: function Component(args) {
    const { variant = 'default', ...rest } = args;
    const [value, setValue] = useState(args.value || '');
    return (
      <Input
        {...rest}
        isLogin={variant === 'login'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Username',
    type: 'text',
    disabled: true,
    value: 'johndoe',
  },
};

export const Login: Story = {
  render: function Component(args) {
    const { variant = 'default', ...rest } = args;
    const [value, setValue] = useState(args.value || '');
    return (
      <Input
        {...rest}
        isLogin={variant === 'login'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Email',
    type: 'email',
    variant: 'login',
  },
};
