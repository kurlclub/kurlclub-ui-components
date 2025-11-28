import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from './switch';

const meta = {
  title: 'Components/Form/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
};

export const Checked: Story = {
  args: {
    label: 'Auto-save',
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    label: 'Dark mode',
    checked: false,
  },
};
