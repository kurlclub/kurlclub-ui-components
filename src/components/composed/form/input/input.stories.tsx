import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './input';

const meta = {
  title: 'Components/Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email',
  },
};

export const WithSuffix: Story = {
  args: {
    label: 'Height',
    type: 'number',
    suffix: 'cm',
  },
};

export const Mandatory: Story = {
  args: {
    label: 'Full Name',
    mandetory: true,
    type: 'text',
  },
};

export const Small: Story = {
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
