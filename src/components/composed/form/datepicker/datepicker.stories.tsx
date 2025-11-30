import * as React from 'react';
import { type DateRange } from 'react-day-picker';

import type { Meta, StoryObj } from '@storybook/react';

import {
  DateOfBirthPicker,
  DatePicker,
  DateRangePicker,
  NaturalLanguageDatePicker,
} from './datepicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Data/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Simple: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <DatePicker value={date} onChange={setDate} label="Select Date" />;
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>();
    return (
      <DatePicker
        value={date}
        onChange={setDate}
        label="Appointment Date"
        placeholder="Pick a date"
      />
    );
  },
};

export const Range: Story = {
  render: () => {
    const [range, setRange] = React.useState<DateRange | undefined>();
    return (
      <DateRangePicker
        value={range}
        onChange={setRange}
        label="Select Date Range"
        numberOfMonths={2}
      />
    );
  },
};

export const DateOfBirth: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>();
    return <DateOfBirthPicker value={date} onChange={setDate} />;
  },
};

export const NaturalLanguage: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>();
    return (
      <div className="w-80">
        <NaturalLanguageDatePicker
          value={date}
          onChange={setDate}
          label="Schedule Date"
          placeholder="tomorrow, next week, in 3 days"
        />
        {date && (
          <p className="text-muted-foreground mt-2 text-sm">
            Selected: {date.toLocaleDateString()}
          </p>
        )}
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <DatePicker
        value={date}
        onChange={setDate}
        label="Disabled Date Picker"
        disabled
      />
    );
  },
};

export const AllVariations: Story = {
  render: () => {
    const [date1, setDate1] = React.useState<Date | undefined>();
    const [date2, setDate2] = React.useState<Date | undefined>();
    const [range, setRange] = React.useState<DateRange | undefined>();
    const [date3, setDate3] = React.useState<Date | undefined>();

    return (
      <div className="flex flex-col gap-6 w-96">
        <DatePicker
          value={date1}
          onChange={setDate1}
          label="Simple Date Picker"
        />
        <DateOfBirthPicker value={date2} onChange={setDate2} />
        <DateRangePicker
          value={range}
          onChange={setRange}
          label="Date Range"
          numberOfMonths={1}
        />
        <NaturalLanguageDatePicker
          value={date3}
          onChange={setDate3}
          placeholder="Try: tomorrow, next week"
        />
      </div>
    );
  },
};
