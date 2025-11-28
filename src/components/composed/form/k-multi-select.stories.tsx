import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { KMultiSelect, type Option } from './k-multi-select';

const meta = {
  title: 'Components/Form/KMultiSelect',
  component: KMultiSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof KMultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

const certifications: Option[] = [
  { value: 'cpt', label: 'Certified Personal Trainer' },
  { value: 'yoga', label: 'Yoga Instructor' },
  { value: 'pilates', label: 'Pilates Instructor' },
  { value: 'nutrition', label: 'Nutrition Specialist' },
  { value: 'crossfit', label: 'CrossFit Level 1' },
];

export const Default: Story = {
  render: function Component() {
    const [selected, setSelected] = useState<Option[]>([]);
    return (
      <div className="w-[400px]">
        <KMultiSelect
          options={certifications}
          selected={selected}
          onChange={setSelected}
          placeholder="Select certifications..."
        />
      </div>
    );
  },
};

export const WithPreselected: Story = {
  render: function Component() {
    const [selected, setSelected] = useState<Option[]>([
      certifications[0],
      certifications[1],
    ]);
    return (
      <div className="w-[400px]">
        <KMultiSelect
          options={certifications}
          selected={selected}
          onChange={setSelected}
          placeholder="Select certifications..."
        />
      </div>
    );
  },
};

export const MaxSelected: Story = {
  render: function Component() {
    const [selected, setSelected] = useState<Option[]>([]);
    return (
      <div className="w-[400px]">
        <KMultiSelect
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

export const Disabled: Story = {
  render: function Component() {
    const [selected, setSelected] = useState<Option[]>([certifications[0]]);
    return (
      <div className="w-[400px]">
        <KMultiSelect
          options={certifications}
          selected={selected}
          onChange={setSelected}
          disabled
        />
      </div>
    );
  },
};
