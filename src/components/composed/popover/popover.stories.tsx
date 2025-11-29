import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/composed/button/button';
import { Input } from '@/components/composed/form';

import { Popover, PopoverContent, PopoverTrigger } from './popover';

const meta: Meta<typeof Popover> = {
  title: 'Composed/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium leading-none text-white">Dimensions</h4>
          <p className="text-sm text-primary-blue-200">
            Set the dimensions for the layer.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Settings</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium leading-none text-white">Settings</h4>
            <p className="text-sm text-primary-blue-200">
              Configure your preferences
            </p>
          </div>
          <Input label="Name" placeholder="Enter name" />
          <Input label="Email" type="email" placeholder="Enter email" />
          <Button className="w-full">Save</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
