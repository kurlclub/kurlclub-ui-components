import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { type ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Edit, MoreHorizontal, Trash2 } from 'lucide-react';

import { Button } from '@/components/composed/button/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui';

import { DataTable, DataTableToolbar, type FilterConfig } from './index';

const meta = {
  title: 'Data/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A powerful data table component with sorting, filtering, pagination, and column visibility controls. Built on TanStack Table.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof DataTable>;

// Sample data type
type Member = {
  uuid: string;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'pending';
  role: 'admin' | 'member' | 'guest';
  joinedDate: string;
};

// Sample data
const sampleMembers: Member[] = [
  {
    uuid: '1',
    name: 'John Doe',
    email: 'john@example.com',
    status: 'active',
    role: 'admin',
    joinedDate: '2024-01-15',
  },
  {
    uuid: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    status: 'active',
    role: 'member',
    joinedDate: '2024-02-20',
  },
  {
    uuid: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    status: 'inactive',
    role: 'guest',
    joinedDate: '2024-03-10',
  },
  {
    uuid: '4',
    name: 'Alice Williams',
    email: 'alice@example.com',
    status: 'pending',
    role: 'member',
    joinedDate: '2024-03-25',
  },
  {
    uuid: '5',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    status: 'active',
    role: 'admin',
    joinedDate: '2024-01-05',
  },
];

// Column definitions
const columns: ColumnDef<Member>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="justify-start p-0 h-auto font-medium hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      const colors = {
        active: 'bg-green-500/10 text-green-500 border-green-500',
        inactive: 'bg-gray-500/10 text-gray-500 border-gray-500',
        pending: 'bg-yellow-500/10 text-yellow-500 border-yellow-500',
      };
      return (
        <span
          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${colors[status as keyof typeof colors]}`}
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => {
      const role = row.getValue('role') as string;
      return <span className="capitalize">{role}</span>;
    },
  },
  {
    accessorKey: 'joinedDate',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="justify-start p-0 h-auto font-medium hover:bg-transparent"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Joined Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const member = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(member.uuid)}
            >
              Copy ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

// Filter configurations
const filters: FilterConfig[] = [
  {
    columnId: 'status',
    title: 'Status',
    options: [
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
      { label: 'Pending', value: 'pending' },
    ],
  },
  {
    columnId: 'role',
    title: 'Role',
    options: [
      { label: 'Admin', value: 'admin' },
      { label: 'Member', value: 'member' },
      { label: 'Guest', value: 'guest' },
    ],
  },
];

// Column definitions without sorting for Default story
const columnsWithoutSorting: ColumnDef<Member>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue('status') as string;
      const colors = {
        active: 'bg-green-500/10 text-green-500 border-green-500',
        inactive: 'bg-gray-500/10 text-gray-500 border-gray-500',
        pending: 'bg-yellow-500/10 text-yellow-500 border-yellow-500',
      };
      return (
        <span
          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${colors[status as keyof typeof colors]}`}
        >
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: 'role',
    header: 'Role',
    cell: ({ row }) => {
      const role = row.getValue('role') as string;
      return <span className="capitalize">{role}</span>;
    },
  },
  {
    accessorKey: 'joinedDate',
    header: 'Joined Date',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const member = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(member.uuid)}
            >
              Copy ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

/**
 * Basic data table with pagination.
 */
export const Default: Story = {
  render: function Component() {
    return (
      <div className="w-full">
        <DataTable columns={columnsWithoutSorting} data={sampleMembers} />
      </div>
    );
  },
};

/**
 * Data table with toolbar including search, filters, and column visibility controls.
 */
export const WithToolbar: Story = {
  render: function Component() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = sampleMembers.filter((member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="w-full">
        <DataTable
          columns={columns}
          data={filteredData}
          toolbar={(table) => (
            <DataTableToolbar
              table={table}
              onSearch={setSearchTerm}
              filters={filters}
              searchPlaceholder="Search members..."
            />
          )}
        />
      </div>
    );
  },
};

/**
 * Data table with initial sorting applied.
 */
export const WithSorting: Story = {
  render: function Component() {
    return (
      <div className="w-full">
        <DataTable
          columns={columns}
          data={sampleMembers}
          initialSorting={[{ id: 'name', desc: false }]}
        />
      </div>
    );
  },
};

/**
 * Data table with empty state.
 */
export const EmptyState: Story = {
  render: function Component() {
    return (
      <div className="w-full">
        <DataTable columns={columns} data={[]} />
      </div>
    );
  },
};

/**
 * Data table with large dataset to demonstrate pagination.
 */
export const LargeDataset: Story = {
  render: function Component() {
    const [searchTerm, setSearchTerm] = useState('');

    const largeDataset = Array.from({ length: 100 }, (_, i) => ({
      uuid: `${i + 1}`,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      status: ['active', 'inactive', 'pending'][i % 3] as Member['status'],
      role: ['admin', 'member', 'guest'][i % 3] as Member['role'],
      joinedDate: `2024-0${(i % 9) + 1}-${(i % 28) + 1}`,
    }));

    const filteredData = largeDataset.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="w-full">
        <DataTable
          columns={columns}
          data={filteredData}
          toolbar={(table) => (
            <DataTableToolbar
              table={table}
              onSearch={setSearchTerm}
              filters={filters}
              searchPlaceholder="Search users..."
            />
          )}
        />
      </div>
    );
  },
};
