import type { Meta, StoryObj } from '@storybook/react';

import { KSwitch } from './k-switch';

const meta = {
  title: 'Components/Form/KSwitch',
  component: KSwitch,
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
