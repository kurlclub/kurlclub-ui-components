import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Password } from './password';

const usageSnippet = [
  "import { useState } from 'react';",
  "import { Password } from '@kurlclub/ui-components';",
  '',
  'export function PasswordExample() {',
  "  const [value, setValue] = useState('');",
  '',
  '  return (',
  '    <Password',
  '      label="Password"',
  '      value={value}',
  '      onChange={(e) => setValue(e.target.value)}',
  '      placeholder="Enter password"',
  '    />',
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
type Variant = 'default' | 'login';
type StoryArgs = React.ComponentProps<typeof Password> & {
  variant?: Variant;
};

const meta: Meta<StoryArgs> = {
  title: 'Form/Password',
  component: Password,
  parameters: {
    docs: {
      description: { component: usageDescription },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    variant: 'default',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'login'],
      description: 'Visual variant for the password field',
    },
    label: {
      control: 'text',
      description: 'Label for the password field',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the password field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    isLogin: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<StoryArgs>;

export const Default: Story = {
  render: function Component(args) {
    const { variant = 'default', ...rest } = args;
    const [value, setValue] = useState(args.value || '');
    return (
      <Password
        {...rest}
        isLogin={variant === 'login'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Password',
  },
};

export const WithValue: Story = {
  render: function Component(args) {
    const { variant = 'default', ...rest } = args;
    const [value, setValue] = useState(args.value || '');
    return (
      <Password
        {...rest}
        isLogin={variant === 'login'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Current Password',
    value: 'mypassword123',
  },
};

export const Disabled: Story = {
  render: function Component(args) {
    const { variant = 'default', ...rest } = args;
    const [value, setValue] = useState(args.value || '');
    return (
      <Password
        {...rest}
        isLogin={variant === 'login'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Password',
    disabled: true,
  },
};

export const Login: Story = {
  render: function Component(args) {
    const { variant = 'default', ...rest } = args;
    const [value, setValue] = useState(args.value || '');
    return (
      <Password
        {...rest}
        isLogin={variant === 'login'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    label: 'Password',
    variant: 'login',
  },
};
