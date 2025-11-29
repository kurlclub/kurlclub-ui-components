import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import type { InputProps } from './input';
import { Input } from './input';

const meta = {
  title: 'Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultComponent = (args: InputProps) => {
  const [value, setValue] = useState('');
  return (
    <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

const WithSuffixComponent = (args: InputProps) => {
  const [value, setValue] = useState('');
  return (
    <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

const MandatoryComponent = (args: InputProps) => {
  const [value, setValue] = useState('');
  return (
    <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

const SmallComponent = (args: InputProps) => {
  const [value, setValue] = useState('');
  return (
    <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

export const Default: Story = {
  render: DefaultComponent,
  args: {
    label: 'Email Address',
    type: 'email',
  },
};

export const WithSuffix: Story = {
  render: WithSuffixComponent,
  args: {
    label: 'Height',
    type: 'number',
    suffix: 'cm',
  },
};

export const Mandatory: Story = {
  render: MandatoryComponent,
  args: {
    label: 'Full Name',
    mandetory: true,
    type: 'text',
  },
};

export const Small: Story = {
  render: SmallComponent,
  args: {
    label: 'Phone',
    type: 'tel',
    size: 'sm',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Username',
    type: 'text',
    disabled: true,
    value: 'johndoe',
  },
};
