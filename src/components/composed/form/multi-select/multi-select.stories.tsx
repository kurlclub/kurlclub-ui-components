import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { MultiSelect, type Option } from './multi-select';

const meta: Meta<typeof MultiSelect> = {
  title: 'Form/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A multi-select component with search functionality, badge display, and optional maximum selection limit. Built on top of Radix UI Command and Popover primitives.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const certifications: Option[] = [
  { value: 'cpt', label: 'Certified Personal Trainer' },
  { value: 'yoga', label: 'Yoga Instructor' },
  { value: 'pilates', label: 'Pilates Instructor' },
  { value: 'nutrition', label: 'Nutrition Specialist' },
  { value: 'crossfit', label: 'CrossFit Level 1' },
  { value: 'zumba', label: 'Zumba Instructor' },
  { value: 'spinning', label: 'Spinning Instructor' },
];

/**
 * Default multi-select with no items selected.
 * Users can search and select multiple items.
 */
export const Default: Story = {
  render: function Component() {
    const [selected, setSelected] = useState<Option[]>([]);
    return (
      <div className="w-[400px]">
        <MultiSelect
          options={certifications}
          selected={selected}
          onChange={setSelected}
          placeholder="Select certifications..."
        />
      </div>
    );
  },
};

/**
 * Multi-select with pre-selected items.
 * Demonstrates how selected items are displayed as badges.
 */
export const WithPreselected: Story = {
  render: function Component() {
    const [selected, setSelected] = useState<Option[]>([
      certifications[0],
      certifications[1],
    ]);
    return (
      <div className="w-[400px]">
        <MultiSelect
          options={certifications}
          selected={selected}
          onChange={setSelected}
          placeholder="Select certifications..."
        />
      </div>
    );
  },
};

/**
 * Multi-select with maximum selection limit.
 * Users can only select up to 3 items. Once the limit is reached,
 * the dropdown shows a message and prevents further selections.
 */
export const MaxSelected: Story = {
  render: function Component() {
    const [selected, setSelected] = useState<Option[]>([]);
    return (
      <div className="w-[400px]">
        <MultiSelect
          options={certifications}
          selected={selected}
          onChange={setSelected}
          placeholder="Select up to 3 certifications..."
          maxSelected={3}
        />
      </div>
    );
  },
};

/**
 * Disabled multi-select component.
 * Users cannot interact with the component or modify selections.
 */
export const Disabled: Story = {
  render: function Component() {
    const [selected, setSelected] = useState<Option[]>([certifications[0]]);
    return (
      <div className="w-[400px]">
        <MultiSelect
          options={certifications}
          selected={selected}
          onChange={setSelected}
          disabled
        />
      </div>
    );
  },
};

/**
 * Multi-select with custom empty message.
 * Shows when search returns no results.
 */
export const CustomEmptyMessage: Story = {
  render: function Component() {
    const [selected, setSelected] = useState<Option[]>([]);
    return (
      <div className="w-[400px]">
        <MultiSelect
          options={certifications}
          selected={selected}
          onChange={setSelected}
          placeholder="Search certifications..."
          emptyMessage="No certifications found. Try a different search."
        />
      </div>
    );
  },
};
