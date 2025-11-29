import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { RichTextEditor } from './rich-text-editor';

const meta: Meta<typeof RichTextEditor> = {
  title: 'Composed/RichTextEditor',
  component: RichTextEditor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RichTextEditor>;

export const Default: Story = {
  render: function Component() {
    const [content, setContent] = useState('');

    return (
      <div className="w-[600px]">
        <RichTextEditor content={content} onUpdate={setContent} />
      </div>
    );
  },
};

export const WithContent: Story = {
  render: function Component() {
    const [content, setContent] = useState(
      '<h1>Welcome to Kurl Club</h1><p>This is a <strong>rich text editor</strong> with <em>formatting</em> options.</p><ul><li>Bold text</li><li>Italic text</li><li>Lists</li></ul>'
    );

    return (
      <div className="w-[600px]">
        <RichTextEditor content={content} onUpdate={setContent} />
        <div className="mt-4 p-4 bg-secondary-blue-600 rounded">
          <p className="text-sm text-primary-blue-200 mb-2">HTML Output:</p>
          <pre className="text-xs text-white overflow-auto">{content}</pre>
        </div>
      </div>
    );
  },
};
