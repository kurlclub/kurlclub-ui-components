import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button/button';
import { KSheet } from './k-sheet';

const meta = {
  title: 'Components/Form/KSheet',
  component: KSheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
  render: function Component() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Sheet (Right)</Button>
        <KSheet
          title="Edit Profile"
          isOpen={open}
          onClose={setOpen}
          position="right"
          footer={
            <>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Save Changes</Button>
            </>
          }
        >
          <div className="space-y-4">
            <p className="text-white">Sheet content goes here...</p>
          </div>
        </KSheet>
      </>
    );
  },
};

export const Left: Story = {
  render: function Component() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Sheet (Left)</Button>
        <KSheet title="Filters" isOpen={open} onClose={setOpen} position="left">
          <div className="space-y-4">
            <p className="text-white">Filter options...</p>
          </div>
        </KSheet>
      </>
    );
  },
};

export const WithDescription: Story = {
  render: function Component() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Sheet</Button>
        <KSheet
          title="Settings"
          description="Manage your account settings and preferences"
          isOpen={open}
          onClose={setOpen}
        >
          <div className="space-y-4">
            <p className="text-white">Settings content...</p>
          </div>
        </KSheet>
      </>
    );
  },
};
