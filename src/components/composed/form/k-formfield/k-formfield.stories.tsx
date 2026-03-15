import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import type { Meta, StoryObj } from '@storybook/react';

import { Form } from '@/components/ui/form';

import type { Option } from '../multi-select/multi-select';
import { KFormField, KFormFieldType } from './k-formfield';

const usageSnippet = [
  "import { useForm } from 'react-hook-form';",
  "import { Form } from '@kurlclub/ui-components';",
  "import { KFormField, KFormFieldType } from '@kurlclub/ui-components';",
  '',
  'export function KFormFieldExample() {',
  '  const form = useForm({',
  "    defaultValues: { name: '' },",
  '  });',
  '',
  '  return (',
  '    <Form {...form}>',
  '      <form className="w-[360px]">',
  '        <KFormField',
  '          control={form.control}',
  '          name="name"',
  '          fieldType={KFormFieldType.INPUT}',
  '          label="Full Name"',
  '          placeholder="Enter your name"',
  '        />',
  '      </form>',
  '    </Form>',
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
const options: Option[] = [
  { label: 'Option A', value: 'option-a' },
  { label: 'Option B', value: 'option-b' },
  { label: 'Option C', value: 'option-c' },
];

type FormValues = {
  demo: unknown;
};

type KFormFieldProps = Parameters<typeof KFormField>[0];
type WithoutIndexSignature<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
      ? never
      : symbol extends K
        ? never
        : K]: T[K];
};
type KFormFieldBaseProps = WithoutIndexSignature<KFormFieldProps>;
type KFormFieldStoryArgs = Omit<
  KFormFieldBaseProps,
  'control' | 'name' | 'renderSkeleton'
>;

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

const KFormFieldStoryWrapper = (args: KFormFieldStoryArgs) => (
  <KFormFieldStory {...args} />
);

const meta: Meta<typeof KFormFieldStoryWrapper> = {
  title: 'Form/KFormField',
  component: KFormFieldStoryWrapper,
  parameters: {
    docs: {
      description: { component: usageDescription },
    },
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
  },
  argTypes: {
    options: { table: { disable: true } },
    children: { table: { disable: true } },
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
    mandatory: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof KFormFieldStoryWrapper>;

const KFormFieldStory = (args: KFormFieldStoryArgs) => {
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
        <KFormField
          {...args}
          control={form.control}
          name="demo"
          renderSkeleton={() => (
            <div className="h-[52px] w-full rounded-md bg-secondary-blue-600" />
          )}
        />
      </form>
    </Form>
  );
};

export const Playground: Story = {
  render: (args) => <KFormFieldStory {...args} />,
  args: {
    fieldType: KFormFieldType.INPUT,
  },
};
