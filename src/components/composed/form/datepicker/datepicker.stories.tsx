import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { KDatePicker } from './datepicker';

const meta: Meta<typeof KDatePicker> = {
  title: 'Data/DatePicker',
  component: KDatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    captionLayout: {
      control: 'select',
      options: ['label', 'dropdown', 'dropdown-months', 'dropdown-years'],
      description: 'Layout for month/year caption',
    },
    buttonVariant: {
      control: 'select',
      options: ['ghost', 'outline', 'default'],
      description: 'Button variant for navigation',
    },
    mode: {
      control: 'select',
      options: ['single', 'range'],
      description: 'Selection mode',
    },
    numberOfMonths: {
      control: 'number',
      description: 'Number of months to display',
    },
    showOutsideDays: {
      control: 'boolean',
      description: 'Show days outside current month',
    },
    showPresets: {
      control: 'boolean',
      description: 'Show preset sidebar (range mode only)',
    },
    floating: {
      control: 'boolean',
      description: 'Use floating label style',
    },
  },
};

export default meta;
type Story = StoryObj<typeof KDatePicker>;

function SingleDateComponent(args: React.ComponentProps<typeof KDatePicker>) {
  const [date, setDate] = React.useState<Date | undefined>();
  return (
    <div className="w-80">
      <KDatePicker
        {...args}
        value={date}
        onDateChange={(value) => setDate(value as Date | undefined)}
        label="Select Date"
      />
    </div>
  );
}

function DateRangeComponent(args: React.ComponentProps<typeof KDatePicker>) {
  const [range, setRange] = React.useState<{
    from: Date | undefined;
    to?: Date | undefined;
  }>();
  return (
    <div className="w-80">
      <KDatePicker
        {...args}
        value={range}
        onDateChange={(value) =>
          setRange(value as { from: Date | undefined; to?: Date | undefined })
        }
        label="Select Date Range"
      />
    </div>
  );
}

export const SingleDate: Story = {
  args: {
    mode: 'single',
    captionLayout: 'label',
    buttonVariant: 'ghost',
    showOutsideDays: true,
    floating: false,
  },
  render: SingleDateComponent,
};

export const SingleWithDropdown: Story = {
  args: {
    mode: 'single',
    captionLayout: 'dropdown',
    buttonVariant: 'ghost',
    showOutsideDays: true,
    floating: false,
  },
  render: SingleDateComponent,
};

export const DateRange: Story = {
  args: {
    mode: 'range',
    numberOfMonths: 2,
    captionLayout: 'label',
    buttonVariant: 'ghost',
    showOutsideDays: true,
    showPresets: false,
    floating: false,
  },
  render: DateRangeComponent,
};

export const WithPresets: Story = {
  args: {
    mode: 'range',
    numberOfMonths: 2,
    captionLayout: 'label',
    buttonVariant: 'ghost',
    showPresets: true,
    floating: false,
  },
  render: DateRangeComponent,
};

function FloatingComponent(args: React.ComponentProps<typeof KDatePicker>) {
  const [date, setDate] = React.useState<Date | undefined>();
  return (
    <div className="w-80">
      <KDatePicker
        {...args}
        value={date}
        onDateChange={(value) => setDate(value as Date | undefined)}
        label="Date of Birth"
      />
    </div>
  );
}

export const FloatingLabel: Story = {
  args: {
    mode: 'single',
    captionLayout: 'label',
    floating: true,
  },
  render: FloatingComponent,
};

export const FloatingWithDropdown: Story = {
  args: {
    mode: 'single',
    captionLayout: 'dropdown',
    floating: true,
  },
  render: FloatingComponent,
};
