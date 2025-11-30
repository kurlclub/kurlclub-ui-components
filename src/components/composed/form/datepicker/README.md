# DatePicker Components

Composed calendar/datepicker components built on top of shadcn Calendar UI.

## Quick Start

```tsx
import { DatePicker } from '@kurlclub/ui-components';

function MyForm() {
  const [date, setDate] = useState<Date>();

  return <DatePicker value={date} onChange={setDate} label="Select Date" />;
}
```

## Components

### DatePicker

Simple single date selection with popover.

```tsx
<DatePicker
  value={date}
  onChange={setDate}
  label="Appointment Date"
  placeholder="Pick a date"
  disabled={false}
  className="w-full"
/>
```

### DateRangePicker

Select a date range with multiple months.

```tsx
<DateRangePicker
  value={range}
  onChange={setRange}
  label="Booking Period"
  numberOfMonths={2}
/>
```

### DateOfBirthPicker

Optimized for DOB with dropdown year/month selection.

```tsx
<DateOfBirthPicker value={dob} onChange={setDob} label="Date of birth" />
```

### NaturalLanguageDatePicker

Parse natural language like "tomorrow", "next week", "in 3 days".

```tsx
<NaturalLanguageDatePicker
  value={date}
  onChange={setDate}
  label="Schedule Date"
  placeholder="tomorrow, next week, in 3 days"
/>
```

**Supported phrases:**

- `tomorrow`, `today`, `yesterday`
- `next week`, `next month`
- `in 3 days`, `in 2 weeks`
- `next monday`, `this friday`

## Props

All components share these common props:

| Prop          | Type                | Default | Description        |
| ------------- | ------------------- | ------- | ------------------ |
| `value`       | `Date \| DateRange` | -       | Selected date(s)   |
| `onChange`    | `(date) => void`    | -       | Change handler     |
| `label`       | `string`            | -       | Label text         |
| `placeholder` | `string`            | varies  | Placeholder text   |
| `disabled`    | `boolean`           | `false` | Disabled state     |
| `className`   | `string`            | -       | Additional classes |

**DateRangePicker only:**
| Prop | Type | Default |
|------|------|---------|
| `numberOfMonths` | `number` | `2` |

## Styling

Components use Tailwind CSS and inherit theme styles:

- Borders and shadows
- Proper spacing
- Dark mode support
- Focus states

## Examples

See Storybook for interactive examples:

```bash
npm run storybook
```

Navigate to: **Composed > Form > DatePicker**
