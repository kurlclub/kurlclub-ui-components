import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './select';

const meta = {
  title: 'Components/Form/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const countries = [
  { label: 'United States', value: 'US' },
  { label: 'United Kingdom', value: 'UK' },
  { label: 'Canada', value: 'CA' },
  { label: 'Australia', value: 'AU' },
  { label: 'India', value: 'IN' },
];

export const Default: Story = {
  args: {
    label: 'Select Country',
    options: countries,
  },
};

export const Small: Story = {
  args: {
    label: 'Country',
    options: countries,
    size: 'sm',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Country',
    options: countries,
    value: 'IN',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Country',
    options: countries,
    disabled: true,
  },
};
