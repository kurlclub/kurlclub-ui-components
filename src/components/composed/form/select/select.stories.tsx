import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './select';

const meta = {
  title: 'Form/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the select field',
    },
    size: {
      control: 'radio',
      options: ['sm', 'default'],
      description: 'Size of the select field',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the select field',
    },
    options: {
      control: 'object',
      description: 'Array of options with label and value',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const countries = [
  { label: 'United States', value: 'US' },
  { label: 'United Kingdom', value: 'UK' },
  { label: 'Canada', value: 'CA' },
  { label: 'United Arab Emirates', value: 'AE' },
  { label: 'India', value: 'IN' },
];

const SelectWrapper = (args: React.ComponentProps<typeof Select>) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <div className="w-[400px]">
      <Select {...args} value={value} onValueChange={setValue} />
    </div>
  );
};

export const Default: Story = {
  render: SelectWrapper,
  args: {
    label: 'Select Country',
    options: countries,
  },
};

export const Small: Story = {
  render: SelectWrapper,
  args: {
    label: 'Country',
    options: countries,
    size: 'sm',
  },
};

export const WithValue: Story = {
  render: SelectWrapper,
  args: {
    label: 'Country',
    options: countries,
    value: 'IN',
  },
};

export const Disabled: Story = {
  render: SelectWrapper,
  args: {
    label: 'Country',
    options: countries,
    disabled: true,
  },
};
