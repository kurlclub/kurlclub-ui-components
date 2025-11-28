import type { Meta, StoryObj } from '@storybook/react';

import { Password } from './password';

const meta = {
  title: 'Components/Form/Password',
  component: Password,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Password',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Current Password',
    defaultValue: 'mypassword123',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Password',
    disabled: true,
  },
};
