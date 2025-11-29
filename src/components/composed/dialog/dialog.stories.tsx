import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/composed/button/button';
import { useAppDialog } from '@/hooks/use-app-dialog';
import { DialogProvider } from '@/providers/dialog-provider';

import { Dialog } from './dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Composed/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

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

export const CustomWidth: Story = {
  render: function Component() {
    const [open, setOpen] = useState(false);
    return (
      <Dialog
        title="Custom Width Dialog"
        open={open}
        onOpenChange={() => setOpen(!open)}
        trigger={
          <Button onClick={() => setOpen(true)}>Open Wide Dialog</Button>
        }
        className="max-w-2xl"
      >
        <p className="text-white">
          This dialog has a custom width using the className prop.
        </p>
      </Dialog>
    );
  },
};

export const LongContent: Story = {
  render: function Component() {
    const [open, setOpen] = useState(false);
    return (
      <Dialog
        title="Terms and Conditions"
        open={open}
        onOpenChange={() => setOpen(!open)}
        trigger={<Button onClick={() => setOpen(true)}>View Terms</Button>}
        footer={<Button onClick={() => setOpen(false)}>I Agree</Button>}
      >
        <div className="text-white space-y-4 max-h-[400px] overflow-y-auto">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
          <p>Excepteur sint occaecat cupidatat non proident.</p>
        </div>
      </Dialog>
    );
  },
};

/**
 * Using DialogProvider with useAppDialog hook
 * Step 1: Wrap your app with DialogProvider
 * Step 2: Use useAppDialog hook to show dialogs programmatically
 */
export const WithProvider: Story = {
  render: function Component() {
    return (
      <DialogProvider>
        <DialogExample />
      </DialogProvider>
    );
  },
};

function DialogExample() {
  const { showAlert, showConfirm, showSuccess } = useAppDialog();

  return (
    <div className="flex flex-col gap-4">
      <Button
        onClick={() =>
          showAlert({
            title: 'Alert',
            description: 'This is an alert dialog.',
          })
        }
      >
        Show Alert
      </Button>

      <Button
        onClick={() =>
          showConfirm({
            title: 'Delete Item',
            description: 'Are you sure you want to delete this item?',
            variant: 'destructive',
            onConfirm: () => {
              console.log('Item deleted');
            },
          })
        }
      >
        Show Confirm
      </Button>

      <Button
        onClick={() =>
          showSuccess({
            title: 'Success',
            description: 'Operation completed successfully!',
          })
        }
      >
        Show Success
      </Button>

      <Button
        onClick={() =>
          showConfirm({
            title: 'Async Action',
            description: 'This will simulate an async operation.',
            loadingLabel: 'Processing...',
            onConfirm: async () => {
              await new Promise((resolve) => setTimeout(resolve, 2000));
              console.log('Async operation completed');
            },
          })
        }
      >
        Show Async Confirm
      </Button>
    </div>
  );
}
