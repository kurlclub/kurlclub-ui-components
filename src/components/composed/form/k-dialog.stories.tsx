import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../button/button';
import { KDialog } from './k-dialog';

const meta = {
  title: 'Components/Form/KDialog',
  component: KDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Component() {
    const [open, setOpen] = useState(false);
    return (
      <KDialog
        title="Confirm Action"
        open={open}
        onOpenChange={() => setOpen(!open)}
        trigger={<Button onClick={() => setOpen(true)}>Open Dialog</Button>}
        footer={
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </div>
        }
      >
        <p className="text-white">
          Are you sure you want to proceed with this action?
        </p>
      </KDialog>
    );
  },
};

export const WithoutFooter: Story = {
  render: function Component() {
    const [open, setOpen] = useState(false);
    return (
      <KDialog
        title="Information"
        open={open}
        onOpenChange={() => setOpen(!open)}
        trigger={<Button onClick={() => setOpen(true)}>Show Info</Button>}
      >
        <p className="text-white">
          This is an informational dialog without footer actions.
        </p>
      </KDialog>
    );
  },
};

export const WithoutTitle: Story = {
  render: function Component() {
    const [open, setOpen] = useState(false);
    return (
      <KDialog
        open={open}
        onOpenChange={() => setOpen(!open)}
        trigger={<Button onClick={() => setOpen(true)}>Open</Button>}
      >
        <p className="text-white">Dialog content without a title.</p>
      </KDialog>
    );
  },
};
