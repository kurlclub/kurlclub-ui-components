import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

const meta = {
  title: 'Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
    mandetory: {
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
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Component(args) {
    const [value, setValue] = useState(args.value || '');
    return (
      <Input
        {...args}
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
    const [value, setValue] = useState(args.value || '');
    return (
      <Input
        {...args}
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
    const [value, setValue] = useState(args.value || '');
    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Full Name',
    mandetory: true,
    type: 'text',
    placeholder: 'Enter your name',
  },
};

export const Small: Story = {
  render: function Component(args) {
    const [value, setValue] = useState(args.value || '');
    return (
      <Input
        {...args}
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
    const [value, setValue] = useState(args.value || '');
    return (
      <Input
        {...args}
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
