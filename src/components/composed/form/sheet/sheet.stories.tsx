import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../button/button';
import { Sheet } from './sheet';

const meta = {
  title: 'Form/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Sheet title',
    },
    description: {
      control: 'text',
      description: 'Sheet description',
    },
    position: {
      control: 'radio',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Sheet position',
    },
    width: {
      control: 'radio',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
      description: 'Sheet width (responsive)',
    },
  },
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: function Component() {
    const [isOpen, setIsOpen] = useState(false);
    const openSheet = () => setIsOpen(true);
    const closeSheet = () => setIsOpen(false);

    return (
      <>
        <Button onClick={openSheet}>Open Sheet</Button>
        <Sheet
          title="Edit Profile"
          isOpen={isOpen}
          onClose={closeSheet}
          position="right"
          width="sm"
          footer={
            <div className="flex justify-end gap-3">
              <Button
                variant="secondary"
                onClick={closeSheet}
                className="h-[46px] min-w-[90px]"
              >
                Cancel
              </Button>
              <Button onClick={closeSheet} className="h-[46px] min-w-[73px]">
                Save
              </Button>
            </div>
          }
        >
          <div className="space-y-4">
            <p className="text-white">Sheet content goes here...</p>
            <p className="text-gray-400 text-sm">
              This is an example of how to use the Sheet component.
            </p>
          </div>
        </Sheet>
      </>
    );
  },
};

export const WithDescription: Story = {
  render: function Component() {
    const [isOpen, setIsOpen] = useState(false);
    const openSheet = () => setIsOpen(true);
    const closeSheet = () => setIsOpen(false);

    return (
      <>
        <Button onClick={openSheet}>Open Sheet</Button>
        <Sheet
          title="Settings"
          description="Manage your account settings and preferences"
          isOpen={isOpen}
          onClose={closeSheet}
          position="right"
          width="sm"
          footer={
            <div className="flex justify-end gap-3">
              <Button
                variant="secondary"
                onClick={closeSheet}
                className="h-[46px] min-w-[90px]"
              >
                Cancel
              </Button>
              <Button onClick={closeSheet} className="h-[46px] min-w-[73px]">
                Save
              </Button>
            </div>
          }
        >
          <div className="space-y-4">
            <p className="text-white">Sheet content goes here...</p>
          </div>
        </Sheet>
      </>
    );
  },
};

export const LeftPosition: Story = {
  render: function Component() {
    const [isOpen, setIsOpen] = useState(false);
    const openSheet = () => setIsOpen(true);
    const closeSheet = () => setIsOpen(false);

    return (
      <>
        <Button onClick={openSheet}>Open Sheet</Button>
        <Sheet
          title="Filters"
          isOpen={isOpen}
          onClose={closeSheet}
          position="left"
          width="sm"
          footer={
            <div className="flex justify-end gap-3">
              <Button
                variant="secondary"
                onClick={closeSheet}
                className="h-[46px] min-w-[90px]"
              >
                Cancel
              </Button>
              <Button onClick={closeSheet} className="h-[46px] min-w-[73px]">
                Apply
              </Button>
            </div>
          }
        >
          <div className="space-y-4">
            <p className="text-white">Filter options go here...</p>
          </div>
        </Sheet>
      </>
    );
  },
};

export const MediumWidth: Story = {
  render: function Component() {
    const [isOpen, setIsOpen] = useState(false);
    const openSheet = () => setIsOpen(true);
    const closeSheet = () => setIsOpen(false);

    return (
      <>
        <Button onClick={openSheet}>Open Sheet</Button>
        <Sheet
          title="Medium Sheet"
          isOpen={isOpen}
          onClose={closeSheet}
          position="right"
          width="md"
          footer={
            <div className="flex justify-end gap-3">
              <Button
                variant="secondary"
                onClick={closeSheet}
                className="h-[46px] min-w-[90px]"
              >
                Cancel
              </Button>
              <Button onClick={closeSheet} className="h-[46px] min-w-[73px]">
                Save
              </Button>
            </div>
          }
        >
          <div className="space-y-4">
            <p className="text-white">Medium width sheet content...</p>
          </div>
        </Sheet>
      </>
    );
  },
};

export const LargeWidth: Story = {
  render: function Component() {
    const [isOpen, setIsOpen] = useState(false);
    const openSheet = () => setIsOpen(true);
    const closeSheet = () => setIsOpen(false);

    return (
      <>
        <Button onClick={openSheet}>Open Sheet</Button>
        <Sheet
          title="Large Sheet"
          isOpen={isOpen}
          onClose={closeSheet}
          position="right"
          width="lg"
          footer={
            <div className="flex justify-end gap-3">
              <Button
                variant="secondary"
                onClick={closeSheet}
                className="h-[46px] min-w-[90px]"
              >
                Cancel
              </Button>
              <Button onClick={closeSheet} className="h-[46px] min-w-[73px]">
                Save
              </Button>
            </div>
          }
        >
          <div className="space-y-4">
            <p className="text-white">Large width sheet content...</p>
          </div>
        </Sheet>
      </>
    );
  },
};

export const FullWidth: Story = {
  render: function Component() {
    const [isOpen, setIsOpen] = useState(false);
    const openSheet = () => setIsOpen(true);
    const closeSheet = () => setIsOpen(false);

    return (
      <>
        <Button onClick={openSheet}>Open Sheet</Button>
        <Sheet
          title="Full Width Sheet"
          isOpen={isOpen}
          onClose={closeSheet}
          position="right"
          width="full"
          footer={
            <div className="flex justify-end gap-3">
              <Button
                variant="secondary"
                onClick={closeSheet}
                className="h-[46px] min-w-[90px]"
              >
                Cancel
              </Button>
              <Button onClick={closeSheet} className="h-[46px] min-w-[73px]">
                Save
              </Button>
            </div>
          }
        >
          <div className="space-y-4">
            <p className="text-white">Full width sheet content...</p>
          </div>
        </Sheet>
      </>
    );
  },
};

export const TopPosition: Story = {
  render: function Component() {
    const [isOpen, setIsOpen] = useState(false);
    const openSheet = () => setIsOpen(true);
    const closeSheet = () => setIsOpen(false);

    return (
      <>
        <Button onClick={openSheet}>Open Sheet</Button>
        <Sheet
          title="Top Sheet"
          isOpen={isOpen}
          onClose={closeSheet}
          position="top"
          width="sm"
          footer={
            <div className="flex justify-end gap-3">
              <Button
                variant="secondary"
                onClick={closeSheet}
                className="h-[46px] min-w-[90px]"
              >
                Cancel
              </Button>
              <Button onClick={closeSheet} className="h-[46px] min-w-[73px]">
                Save
              </Button>
            </div>
          }
        >
          <div className="space-y-4">
            <p className="text-white">Top positioned sheet content...</p>
          </div>
        </Sheet>
      </>
    );
  },
};

export const BottomPosition: Story = {
  render: function Component() {
    const [isOpen, setIsOpen] = useState(false);
    const openSheet = () => setIsOpen(true);
    const closeSheet = () => setIsOpen(false);

    return (
      <>
        <Button onClick={openSheet}>Open Sheet</Button>
        <Sheet
          title="Bottom Sheet"
          isOpen={isOpen}
          onClose={closeSheet}
          position="bottom"
          width="sm"
          footer={
            <div className="flex justify-end gap-3">
              <Button
                variant="secondary"
                onClick={closeSheet}
                className="h-[46px] min-w-[90px]"
              >
                Cancel
              </Button>
              <Button onClick={closeSheet} className="h-[46px] min-w-[73px]">
                Save
              </Button>
            </div>
          }
        >
          <div className="space-y-4">
            <p className="text-white">Bottom positioned sheet content...</p>
          </div>
        </Sheet>
      </>
    );
  },
};
