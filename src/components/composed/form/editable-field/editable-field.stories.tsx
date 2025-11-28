import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { EditableFormField } from './editable-field';

const meta = {
  title: 'Components/Form/EditableField',
  component: EditableFormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EditableFormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputField: Story = {
  render: function Component() {
    const [value, setValue] = useState('John Doe');
    const [isEditing, setIsEditing] = useState(false);
    return (
      <div className="w-[400px] space-y-4">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 bg-primary-green-700 text-white rounded"
        >
          {isEditing ? 'View Mode' : 'Edit Mode'}
        </button>
        <EditableFormField
          type="input"
          label="Full Name"
          value={value}
          onChange={setValue}
          isEditing={isEditing}
        />
      </div>
    );
  },
};

export const InputWithSuffix: Story = {
  render: function Component() {
    const [value, setValue] = useState('175');
    const [isEditing, setIsEditing] = useState(true);
    return (
      <div className="w-[400px] space-y-4">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 bg-primary-green-700 text-white rounded"
        >
          {isEditing ? 'View Mode' : 'Edit Mode'}
        </button>
        <EditableFormField
          type="input"
          label="Height"
          value={value}
          onChange={setValue}
          suffix="cm"
          isEditing={isEditing}
        />
      </div>
    );
  },
};

export const SelectField: Story = {
  render: function Component() {
    const [value, setValue] = useState('admin');
    const [isEditing, setIsEditing] = useState(false);
    return (
      <div className="w-[400px] space-y-4">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 bg-primary-green-700 text-white rounded"
        >
          {isEditing ? 'View Mode' : 'Edit Mode'}
        </button>
        <EditableFormField
          type="select"
          label="Role"
          value={value}
          onChange={setValue}
          options={[
            { value: 'admin', label: 'Administrator' },
            { value: 'user', label: 'User' },
            { value: 'guest', label: 'Guest' },
          ]}
          isEditing={isEditing}
        />
      </div>
    );
  },
};
