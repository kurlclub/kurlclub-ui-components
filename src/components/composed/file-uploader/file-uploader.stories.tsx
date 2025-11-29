import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FileUploader from './file-uploader';

const meta = {
  title: 'Uploader/FileUploader',
  component: FileUploader,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    file: {
      table: { disable: true },
    },
    onChange: {
      table: { disable: true },
    },
    label: {
      control: 'text',
    },
    accept: {
      control: 'check',
      options: [
        '.pdf',
        '.jpg',
        '.jpeg',
        '.png',
        '.gif',
        '.webp',
        '.doc',
        '.docx',
      ],
    },
    maxSize: {
      control: 'number',
    },
    compact: {
      control: 'boolean',
    },
    existingFileUrl: {
      control: 'text',
    },
  },
} satisfies Meta<typeof FileUploader>;

export default meta;
type Story = StoryObj<typeof FileUploader>;

export const Default: Story = {
  render: function Component(args) {
    const [file, setFile] = useState<File | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { file: _, onChange: __, ...restArgs } = args;
    return <FileUploader file={file} onChange={setFile} {...restArgs} />;
  },
  args: {
    label: 'Upload Document',
    accept: '.pdf,.jpg,.jpeg,.png',
    maxSize: 4 * 1024 * 1024,
    compact: false,
  },
};

export const WithExistingFile: Story = {
  render: function Component() {
    const [file, setFile] = useState<File | null>(null);
    return (
      <div className="space-y-4">
        <p className="text-sm text-gray-400">
          Default mode: Shows file card with eye button
        </p>
        <FileUploader
          file={file}
          onChange={setFile}
          existingFileUrl="/assets/tony-aadhaar.pdf"
        />
      </div>
    );
  },
};

export const WithExistingImage: Story = {
  render: function Component() {
    const [file, setFile] = useState<File | null>(null);
    return (
      <FileUploader
        file={file}
        onChange={setFile}
        existingFileUrl="/assets/tony.png"
        label="Profile Image"
      />
    );
  },
};

export const CompactMode: Story = {
  render: function Component() {
    const [file, setFile] = useState<File | null>(null);
    return (
      <div className="space-y-4">
        <p className="text-sm text-gray-400">
          Compact mode: Shows only "View Document" link button (use
          compact=true)
        </p>
        <FileUploader
          file={file}
          onChange={setFile}
          existingFileUrl="/assets/tony-aadhaar.pdf"
          compact
        />
      </div>
    );
  },
};

export const CustomLabel: Story = {
  render: function Component() {
    const [file, setFile] = useState<File | null>(null);
    return (
      <FileUploader file={file} onChange={setFile} label="Upload ID Document" />
    );
  },
};

export const ImagesOnly: Story = {
  render: function Component() {
    const [file, setFile] = useState<File | null>(null);
    return (
      <FileUploader
        file={file}
        onChange={setFile}
        accept=".jpg,.jpeg,.png"
        label="Upload Image"
      />
    );
  },
};
