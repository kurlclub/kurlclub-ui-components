import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Edit2, Eye } from 'lucide-react';

import { Button } from '@/components/composed/button/button';

import { EditableFormField } from './editable-field';

const usageSnippet = [
  "import { useState } from 'react';",
  "import { EditableFormField, Button } from '@kurlclub/ui-components';",
  '',
  'export function EditableFieldExample() {',
  "  const [value, setValue] = useState('John Doe');",
  '  const [isEditing, setIsEditing] = useState(false);',
  '',
  '  return (',
  '    <div className="space-y-3">',
  '      <Button size="sm" onClick={() => setIsEditing(!isEditing)}>',
  "        {isEditing ? 'View' : 'Edit'}",
  '      </Button>',
  '      <EditableFormField',
  '        type="input"',
  '        label="Full Name"',
  '        value={value}',
  '        onChange={setValue}',
  '        isEditing={isEditing}',
  '      />',
  '    </div>',
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
const meta = {
  title: 'Form/EditableField',
  parameters: {
    docs: {
      description: { component: usageDescription },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof EditableFormField>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic input field that can be toggled between view and edit modes.
 * Click the edit button to enable editing.
 */
export const InputField: Story = {
  render: function Component() {
    const [value, setValue] = useState('John Doe');
    const [isEditing, setIsEditing] = useState(false);
    return (
      <div className="w-[400px] bg-secondary-blue-700 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white text-lg font-medium">User Profile</h3>
          <Button
            size="sm"
            variant={isEditing ? 'default' : 'outline'}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? (
              <>
                <Eye className="h-4 w-4 mr-2" />
                View
              </>
            ) : (
              <>
                <Edit2 className="h-4 w-4 mr-2" />
                Edit
              </>
            )}
          </Button>
        </div>
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

/**
 * Input field with a suffix unit (e.g., cm, kg, $).
 * Useful for measurements and quantities.
 */
export const InputWithSuffix: Story = {
  render: function Component() {
    const [value, setValue] = useState('175');
    const [isEditing, setIsEditing] = useState(false);
    return (
      <div className="w-[400px] bg-secondary-blue-700 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white text-lg font-medium">Measurements</h3>
          <Button
            size="sm"
            variant={isEditing ? 'default' : 'outline'}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? (
              <>
                <Eye className="h-4 w-4 mr-2" />
                View
              </>
            ) : (
              <>
                <Edit2 className="h-4 w-4 mr-2" />
                Edit
              </>
            )}
          </Button>
        </div>
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

/**
 * Select dropdown field for choosing from predefined options.
 * Displays the selected value in view mode.
 */
export const SelectField: Story = {
  render: function Component() {
    const [value, setValue] = useState('admin');
    const [isEditing, setIsEditing] = useState(false);
    return (
      <div className="w-[400px] bg-secondary-blue-700 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white text-lg font-medium">User Settings</h3>
          <Button
            size="sm"
            variant={isEditing ? 'default' : 'outline'}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? (
              <>
                <Eye className="h-4 w-4 mr-2" />
                View
              </>
            ) : (
              <>
                <Edit2 className="h-4 w-4 mr-2" />
                Edit
              </>
            )}
          </Button>
        </div>
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

/**
 * Multiple editable fields in a form layout.
 * Demonstrates how to use multiple fields together.
 */
export const MultipleFields: Story = {
  render: function Component() {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('john@example.com');
    const [role, setRole] = useState('user');
    const [age, setAge] = useState('28');
    const [isEditing, setIsEditing] = useState(false);

    return (
      <div className="w-[500px] bg-secondary-blue-700 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-white text-lg font-medium">
            Profile Information
          </h3>
          <Button
            size="sm"
            variant={isEditing ? 'default' : 'outline'}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? (
              <>
                <Eye className="h-4 w-4 mr-2" />
                View
              </>
            ) : (
              <>
                <Edit2 className="h-4 w-4 mr-2" />
                Edit
              </>
            )}
          </Button>
        </div>
        <div className="space-y-2">
          <EditableFormField
            type="input"
            label="Full Name"
            value={name}
            onChange={setName}
            isEditing={isEditing}
          />
          <EditableFormField
            type="input"
            label="Email"
            value={email}
            onChange={setEmail}
            isEditing={isEditing}
          />
          <EditableFormField
            type="select"
            label="Role"
            value={role}
            onChange={setRole}
            options={[
              { value: 'admin', label: 'Administrator' },
              { value: 'user', label: 'User' },
              { value: 'guest', label: 'Guest' },
            ]}
            isEditing={isEditing}
          />
          <EditableFormField
            type="input"
            label="Age"
            value={age}
            onChange={setAge}
            suffix="years"
            isEditing={isEditing}
          />
        </div>
      </div>
    );
  },
};
