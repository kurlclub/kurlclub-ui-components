import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './textarea';

const meta = {
  title: 'Components/Form/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KTextarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter description...',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Bio',
    defaultValue:
      'This is a sample bio text that demonstrates the auto-resize feature.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Comments',
    disabled: true,
    value: 'This field is disabled',
  },
};
