import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import ProfilePictureUploader from './profile-uploader';

const meta = {
  title: 'Uploader/ProfileUploader',
  component: ProfilePictureUploader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    files: {
      table: { disable: true },
    },
    onChange: {
      table: { disable: true },
    },
    isSmall: {
      control: 'boolean',
    },
    existingImageUrl: {
      control: 'text',
    },
  },
} satisfies Meta<typeof ProfilePictureUploader>;

export default meta;
type Story = StoryObj<typeof ProfilePictureUploader>;

export const Default: Story = {
  render: function Component(args) {
    const [file, setFile] = useState<File | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { files: _, onChange: __, ...restArgs } = args;
    return (
      <ProfilePictureUploader files={file} onChange={setFile} {...restArgs} />
    );
  },
  args: {
    isSmall: false,
  },
};

export const Small: Story = {
  render: function Component() {
    const [file, setFile] = useState<File | null>(null);
    return <ProfilePictureUploader files={file} onChange={setFile} isSmall />;
  },
};

export const WithExistingImage: Story = {
  render: function Component() {
    const [file, setFile] = useState<File | null>(null);
    return (
      <ProfilePictureUploader
        files={file}
        onChange={setFile}
        existingImageUrl="/assets/tony.png"
      />
    );
  },
};
