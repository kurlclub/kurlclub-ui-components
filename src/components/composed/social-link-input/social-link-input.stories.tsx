import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { SocialLinkInput } from './social-link-input';

const usageSnippet = [
  "import { useState } from 'react';",
  "import { SocialLinkInput } from '@kurlclub/ui-components';",
  '',
  'export function SocialLinkInputExample() {',
  "  const [value, setValue] = useState('');",
  '',
  '  return (',
  '    <SocialLinkInput',
  '      value={value}',
  '      onChange={setValue}',
  '      label="Website"',
  '      placeholder="https://example.com"',
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
const meta: Meta<typeof SocialLinkInput> = {
  title: 'Composed/SocialLinkInput',
  component: SocialLinkInput,
  parameters: {
    docs: {
      description: { component: usageDescription },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SocialLinkInput>;

export const Default: Story = {
  render: function Component() {
    const [value, setValue] = useState('');

    return (
      <div className="w-[400px]">
        <SocialLinkInput value={value} onChange={setValue} />
      </div>
    );
  },
};

export const WithValue: Story = {
  render: function Component() {
    const [value, setValue] = useState('https://www.google.com');

    return (
      <div className="w-[400px]">
        <SocialLinkInput value={value} onChange={setValue} />
      </div>
    );
  },
};

export const InvalidURL: Story = {
  render: function Component() {
    const [value, setValue] = useState('not-a-valid-url');

    return (
      <div className="w-[400px]">
        <SocialLinkInput value={value} onChange={setValue} />
      </div>
    );
  },
};

export const CustomLabel: Story = {
  render: function Component() {
    const [value, setValue] = useState('');

    return (
      <div className="w-[400px]">
        <SocialLinkInput
          value={value}
          onChange={setValue}
          label="LinkedIn Profile"
          placeholder="https://www.linkedin.com/in/username"
        />
      </div>
    );
  },
};
