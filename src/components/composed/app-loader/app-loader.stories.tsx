import type { Meta, StoryObj } from '@storybook/react';

import { AppLoader } from './app-loader';

const meta: Meta<typeof AppLoader> = {
  title: 'Composed/AppLoader',
  component: AppLoader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppLoader>;

export const Default: Story = {
  render: () => (
    <div className="h-screen w-screen">
      <AppLoader />
    </div>
  ),
};
