import type { Meta, StoryObj } from '@storybook/react';

import {
  FieldColumn,
  FieldGrid,
  FieldGridItem,
  FieldRow,
  FieldStack,
} from './field-layout';

const usageSnippet = [
  "import { FieldRow, FieldColumn } from '@kurlclub/ui-components';",
  '',
  'export function FieldLayoutExample() {',
  '  return (',
  '    <FieldRow>',
  '      <FieldColumn>',
  '        <div className="rounded-md border border-secondary-blue-500/30 bg-secondary-blue-700 px-3 py-2 text-sm text-primary-blue-100">',
  '          First Name',
  '        </div>',
  '      </FieldColumn>',
  '      <FieldColumn>',
  '        <div className="rounded-md border border-secondary-blue-500/30 bg-secondary-blue-700 px-3 py-2 text-sm text-primary-blue-100">',
  '          Last Name',
  '        </div>',
  '      </FieldColumn>',
  '    </FieldRow>',
  '  );',
  '}',
  '',
].join('\n');

const usageDescription = [
  'Usage example:',
  '',
  '```tsx',
  usageSnippet,
  '```',
  '',
].join('\n');
const meta = {
  title: 'Form/FieldLayout',
  component: FieldRow,
  parameters: {
    docs: {
      description: { component: usageDescription },
    },
    layout: 'padded',
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
  args: { children: null },
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
  args: { children: null },
  render: () => (
    <FieldStack>
      <SampleField label="Email Address" />
      <SampleField label="Phone Number" />
      <SampleField label="Company Name" />
    </FieldStack>
  ),
};

export const ResponsiveGrid: Story = {
  args: { children: null },
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
  args: { children: null },
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
