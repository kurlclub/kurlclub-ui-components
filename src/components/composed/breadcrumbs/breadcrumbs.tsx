'use client';

import * as React from 'react';

import { ChevronRightIcon, SlashIcon } from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui';

export interface BreadcrumbItemType {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItemType[];
  separator?: 'chevron' | 'slash' | React.ReactNode;
  maxItems?: number;
  className?: string;
}

// Simple wrapper component for basic use cases
export function Breadcrumbs({
  items,
  separator = 'chevron',
  maxItems,
  className,
}: BreadcrumbsProps) {
  const getSeparator = () => {
    if (separator === 'chevron')
      return <ChevronRightIcon className="w-4 h-4" />;
    if (separator === 'slash') return <SlashIcon className="w-4 h-4" />;
    return separator;
  };

  const renderItems = () => {
    if (!maxItems || items.length <= maxItems) {
      return items.map((item, index) => (
        <React.Fragment key={index}>
          <BreadcrumbItem>
            {item.href ? (
              <BreadcrumbLink
                href={item.href}
                className="text-primary-blue-200 hover:text-primary-blue-100"
              >
                {item.label}
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage className="text-primary-blue-200">
                {item.label}
              </BreadcrumbPage>
            )}
          </BreadcrumbItem>
          {index < items.length - 1 && (
            <BreadcrumbSeparator className="text-primary-blue-200">
              {getSeparator()}
            </BreadcrumbSeparator>
          )}
        </React.Fragment>
      ));
    }

    const lastItems = items.slice(-2);
    return (
      <>
        <BreadcrumbItem>
          <BreadcrumbLink
            href={items[0].href}
            className="text-primary-blue-200 hover:text-primary-blue-100"
          >
            {items[0].label}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-primary-blue-200">
          {getSeparator()}
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbEllipsis className="text-primary-blue-200" />
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-primary-blue-200">
          {getSeparator()}
        </BreadcrumbSeparator>
        {lastItems.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.href ? (
                <BreadcrumbLink
                  href={item.href}
                  className="text-primary-blue-200 hover:text-primary-blue-100"
                >
                  {item.label}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="text-primary-blue-200">
                  {item.label}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < lastItems.length - 1 && (
              <BreadcrumbSeparator className="text-primary-blue-200">
                {getSeparator()}
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>{renderItems()}</BreadcrumbList>
    </Breadcrumb>
  );
}

// Export all primitives for advanced use cases
export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
