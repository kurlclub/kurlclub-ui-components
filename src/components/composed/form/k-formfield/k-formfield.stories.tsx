import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import type { Meta, StoryObj } from '@storybook/react';

import { Form } from '@/components/ui/form';

import type { Option } from '../multi-select/multi-select';
import { KFormField, KFormFieldType } from './k-formfield';

const options: Option[] = [
  { label: 'Option A', value: 'option-a' },
  { label: 'Option B', value: 'option-b' },
  { label: 'Option C', value: 'option-c' },
];

type FormValues = {
  demo: unknown;
};

type KFormFieldProps = Parameters<typeof KFormField>[0];

const getDefaultValue = (
  fieldType: KFormFieldType,
  mode?: 'range' | 'single'
) => {
  switch (fieldType) {
    case KFormFieldType.CHECKBOX:
      return false;
    case KFormFieldType.MULTISELECT:
      return [];
    case KFormFieldType.SELECT:
      return options[0]?.value ?? '';
    case KFormFieldType.DATE_PICKER:
    case KFormFieldType.UI_DATE_PICKER:
      if (mode === 'range') {
        const today = new Date();
        return { from: today, to: today };
      }
      return '';
    default:
      return '';
  }
};

const meta = {
  title: 'Form/KFormField',
  component: KFormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    fieldType: KFormFieldType.INPUT,
    label: 'Full Name',
    placeholder: 'Enter your name',
    size: 'default',
    mode: 'single',
    showPresets: false,
    showYearSelector: true,
    options,
    renderSkeleton: () => (
      <div className="h-[52px] w-full rounded-md bg-secondary-blue-600" />
    ),
  },
  argTypes: {
    control: { table: { disable: true } },
    name: { table: { disable: true } },
    options: { table: { disable: true } },
    children: { table: { disable: true } },
    renderSkeleton: { table: { disable: true } },
    fieldType: {
      control: 'select',
      options: Object.values(KFormFieldType),
    },
    size: {
      control: 'radio',
      options: ['sm', 'default'],
    },
    mode: {
      control: 'radio',
      options: ['single', 'range'],
    },
    disabled: {
      control: 'boolean',
    },
    mandetory: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof KFormField>;

export default meta;

type Story = StoryObj<typeof meta>;

const KFormFieldStory = (args: Omit<KFormFieldProps, 'control' | 'name'>) => {
  const form = useForm<FormValues>({
    defaultValues: {
      demo: getDefaultValue(args.fieldType, args.mode),
    },
  });

  useEffect(() => {
    form.reset({
      demo: getDefaultValue(args.fieldType, args.mode),
    });
  }, [args.fieldType, args.mode, form]);

  return (
    <Form {...form}>
      <form className="w-[360px]">
        <KFormField {...args} control={form.control} name="demo" />
      </form>
    </Form>
  );
};

export const Playground: Story = {
  render: (args) => <KFormFieldStory {...args} />,
};
