import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Search } from './search';

const meta: Meta<typeof Search> = {
  title: 'Composed/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {
  render: function Component() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
      <div className="w-[400px]">
        <Search onSearch={setSearchTerm} />
        {searchTerm && (
          <p className="mt-4 text-sm text-white">Search term: {searchTerm}</p>
        )}
      </div>
    );
  },
};

export const WithPlaceholder: Story = {
  render: function Component() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
      <div className="w-[400px]">
        <Search onSearch={setSearchTerm} placeholder="Search members..." />
        {searchTerm && (
          <p className="mt-4 text-sm text-white">Search term: {searchTerm}</p>
        )}
      </div>
    );
  },
};

export const WithCustomWidth: Story = {
  render: function Component() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
      <div className="w-[600px]">
        <Search onSearch={setSearchTerm} wrapperClass="w-full" />
        {searchTerm && (
          <p className="mt-4 text-sm text-white">Search term: {searchTerm}</p>
        )}
      </div>
    );
  },
};
