import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { ChevronDownIcon, SlashIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/composed/dropdown/dropdown';

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Breadcrumbs,
} from './breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Composed/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Members', href: '/members' },
      { label: 'John Doe' },
    ],
  },
};

export const Collapsed: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Members', href: '/members' },
      { label: 'Active', href: '/members/active' },
      { label: 'Details', href: '/members/active/details' },
      { label: 'John Doe' },
    ],
    maxItems: 3,
  },
};

export const CustomSeparator: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            className="text-primary-blue-200 hover:text-primary-blue-100"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-primary-blue-200">
          <SlashIcon className="w-4 h-4" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/components"
            className="text-primary-blue-200 hover:text-primary-blue-100"
          >
            Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-primary-blue-200">
          <SlashIcon className="w-4 h-4" />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-primary-blue-200">
            Breadcrumb
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

export const WithDropdown: Story = {
  render: function Component() {
    const [open, setOpen] = useState(false);

    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="text-primary-blue-200 hover:text-primary-blue-100"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-primary-blue-200" />
          <BreadcrumbItem>
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger className="flex items-center gap-1 text-primary-blue-200 hover:text-primary-blue-100">
                Components
                <ChevronDownIcon className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Documentation</DropdownMenuItem>
                <DropdownMenuItem>Themes</DropdownMenuItem>
                <DropdownMenuItem>GitHub</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-primary-blue-200" />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-primary-blue-200">
              Breadcrumb
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  },
};

export const WithEllipsis: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/"
            className="text-primary-blue-200 hover:text-primary-blue-100"
          >
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-primary-blue-200" />
        <BreadcrumbItem>
          <BreadcrumbEllipsis className="text-primary-blue-200" />
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-primary-blue-200" />
        <BreadcrumbItem>
          <BreadcrumbLink
            href="/components"
            className="text-primary-blue-200 hover:text-primary-blue-100"
          >
            Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-primary-blue-200" />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-primary-blue-200">
            Breadcrumb
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

export const Responsive: Story = {
  render: function Component() {
    const [open, setOpen] = useState(false);
    const items = [
      { href: '#', label: 'Home' },
      { href: '#', label: 'Documentation' },
      { href: '#', label: 'Building Your Application' },
      { href: '#', label: 'Data Fetching' },
      { label: 'Caching and Revalidating' },
    ];
    const ITEMS_TO_DISPLAY = 3;

    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href={items[0].href}
              className="text-primary-blue-200 hover:text-primary-blue-100"
            >
              {items[0].label}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-primary-blue-200" />
          {items.length > ITEMS_TO_DISPLAY && (
            <>
              <BreadcrumbItem>
                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger
                    className="flex items-center gap-1"
                    aria-label="Toggle menu"
                  >
                    <BreadcrumbEllipsis className="h-4 w-4 text-primary-blue-200" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {items.slice(1, -2).map((item, index) => (
                      <DropdownMenuItem key={index}>
                        <a href={item.href || '#'}>{item.label}</a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-primary-blue-200" />
            </>
          )}
          {items.slice(-ITEMS_TO_DISPLAY + 1).map((item, index) => (
            <BreadcrumbItem key={index}>
              {item.href ? (
                <>
                  <BreadcrumbLink
                    href={item.href}
                    className="max-w-20 truncate md:max-w-none text-primary-blue-200 hover:text-primary-blue-100"
                  >
                    {item.label}
                  </BreadcrumbLink>
                  <BreadcrumbSeparator className="text-primary-blue-200" />
                </>
              ) : (
                <BreadcrumbPage className="max-w-20 truncate md:max-w-none text-primary-blue-200">
                  {item.label}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    );
  },
};
