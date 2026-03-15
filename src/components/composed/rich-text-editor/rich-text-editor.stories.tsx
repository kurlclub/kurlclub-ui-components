import { useEffect, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import type { RichTextEditorProps } from './rich-text-editor';
import { RichTextEditor } from './rich-text-editor';

const usageSnippet = [
  "import { useState } from 'react';",
  "import { RichTextEditor } from '@kurlclub/ui-components';",
  '',
  'export function RichTextEditorExample() {',
  "  const [content, setContent] = useState('');",
  '',
  '  return (',
  '    <RichTextEditor',
  '      content={content}',
  '      onUpdate={setContent}',
  '      placeholder="Write a note..."',
  '      toolbarPreset="standard"',
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
const meta: Meta<typeof RichTextEditor> = {
  title: 'Composed/RichTextEditor',
  component: RichTextEditor,
  parameters: {
    docs: {
      description: { component: usageDescription },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RichTextEditor>;

type EditorStoryProps = Omit<RichTextEditorProps, 'content' | 'onUpdate'> & {
  initialContent: string;
  showOutput?: boolean;
};

const EditorStory = ({
  initialContent,
  showOutput,
  ...props
}: EditorStoryProps) => {
  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    setContent(initialContent);
  }, [initialContent]);

  return (
    <div className="w-[680px] space-y-4">
      <RichTextEditor {...props} content={content} onUpdate={setContent} />
      {showOutput && (
        <div className="rounded-md border border-secondary-blue-500 bg-secondary-blue-600 p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-primary-blue-200">
            HTML Output
          </p>
          <pre className="mt-2 max-h-44 overflow-auto text-xs text-white">
            {content}
          </pre>
        </div>
      )}
    </div>
  );
};

export const EntryLevel: Story = {
  render: () => (
    <EditorStory
      initialContent=""
      placeholder="Start typing your note..."
      toolbarPreset="entry"
    />
  ),
};

export const Default: Story = {
  render: () => (
    <EditorStory
      initialContent=""
      placeholder="Add a description, summary, or update..."
      toolbarPreset="standard"
    />
  ),
};

export const Basic: Story = {
  render: () => (
    <EditorStory
      initialContent=""
      placeholder="Write a short update..."
      toolbarPreset="basic"
    />
  ),
};

export const FullFeature: Story = {
  render: () => (
    <EditorStory
      initialContent=""
      placeholder="Write a detailed announcement or plan..."
      toolbarPreset="full"
    />
  ),
};

export const WithContent: Story = {
  render: () => (
    <EditorStory
      initialContent="<h1>Welcome to Kurl Club</h1><p>This is a <strong>rich text editor</strong> with <em>formatting</em> options.</p><ul><li>Bold text</li><li>Italic text</li><li>Lists</li></ul>"
      toolbarPreset="full"
      showOutput
    />
  ),
};
