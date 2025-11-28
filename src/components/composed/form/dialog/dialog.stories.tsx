import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../button/button';
import { Dialog } from './dialog';

const meta = {
  title: 'Components/Form/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Component() {
    const [open, setOpen] = useState(false);
    return (
      <Dialog
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
      </Dialog>
    );
  },
};

export const WithoutFooter: Story = {
  render: function Component() {
    const [open, setOpen] = useState(false);
    return (
      <Dialog
        title="Information"
        open={open}
        onOpenChange={() => setOpen(!open)}
        trigger={<Button onClick={() => setOpen(true)}>Show Info</Button>}
      >
        <p className="text-white">
          This is an informational dialog without footer actions.
        </p>
      </Dialog>
    );
  },
};

export const WithoutTitle: Story = {
  render: function Component() {
    const [open, setOpen] = useState(false);
    return (
      <Dialog
        open={open}
        onOpenChange={() => setOpen(!open)}
        trigger={<Button onClick={() => setOpen(true)}>Open</Button>}
      >
        <p className="text-white">Dialog content without a title.</p>
      </Dialog>
    );
  },
};
