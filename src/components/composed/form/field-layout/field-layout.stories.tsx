import type { Meta, StoryObj } from '@storybook/react';

import {
  FieldColumn,
  FieldGrid,
  FieldGridItem,
  FieldRow,
  FieldStack,
} from './field-layout';

const meta = {
  title: 'Form/FieldLayout',
  component: FieldRow,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Layout helpers for arranging form fields in rows, stacks, and responsive grids.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FieldRow>;

export default meta;
type Story = StoryObj<typeof meta>;

const SampleField = ({ label }: { label: string }) => (
  <div className="rounded-md border border-secondary-blue-500/30 bg-secondary-blue-700 px-3 py-2 text-sm text-primary-blue-100">
    {label}
  </div>
);

export const RowWithColumns: Story = {
  render: () => (
    <FieldRow>
      <FieldColumn>
        <SampleField label="First Name" />
      </FieldColumn>
      <FieldColumn>
        <SampleField label="Last Name" />
      </FieldColumn>
    </FieldRow>
  ),
};

export const StackedFields: Story = {
  render: () => (
    <FieldStack>
      <SampleField label="Email Address" />
      <SampleField label="Phone Number" />
      <SampleField label="Company Name" />
    </FieldStack>
  ),
};

export const ResponsiveGrid: Story = {
  render: () => (
    <FieldGrid smColumns={2} mdColumns={3} lgColumns={4}>
      <SampleField label="Field A" />
      <SampleField label="Field B" />
      <SampleField label="Field C" />
      <SampleField label="Field D" />
      <SampleField label="Field E" />
      <SampleField label="Field F" />
      <SampleField label="Field G" />
      <SampleField label="Field H" />
    </FieldGrid>
  ),
};

export const GridWithSpans: Story = {
  render: () => (
    <FieldGrid columns={1} smColumns={4}>
      <FieldGridItem smSpan={2}>
        <SampleField label="Address Line 1" />
      </FieldGridItem>
      <FieldGridItem smSpan={2}>
        <SampleField label="Address Line 2" />
      </FieldGridItem>
      <FieldGridItem smSpan={1}>
        <SampleField label="City" />
      </FieldGridItem>
      <FieldGridItem smSpan={1}>
        <SampleField label="State" />
      </FieldGridItem>
      <FieldGridItem smSpan={2}>
        <SampleField label="Postal Code" />
      </FieldGridItem>
    </FieldGrid>
  ),
};
