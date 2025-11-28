import type { Meta, StoryObj } from '@storybook/react';

import { KPassword } from './k-password';

const meta = {
  title: 'Components/Form/KPassword',
  component: KPassword,
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
