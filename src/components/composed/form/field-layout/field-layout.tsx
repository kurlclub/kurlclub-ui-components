import React from 'react';

import { cn } from '@/lib/utils';

type GapSize = 'sm' | 'md' | 'lg';
type ColumnCount = 1 | 2 | 3 | 4;
type ColumnSpan = 1 | 2 | 3 | 4;

const gapClasses: Record<GapSize, string> = {
  sm: 'gap-2',
  md: 'gap-3',
  lg: 'gap-4',
};

const gridColumns: Record<ColumnCount, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
};

const gridColumnsSm: Record<ColumnCount, string> = {
  1: 'sm:grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-3',
  4: 'sm:grid-cols-4',
};

const gridColumnsMd: Record<ColumnCount, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
};

const gridColumnsLg: Record<ColumnCount, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
};

const gridColumnsXl: Record<ColumnCount, string> = {
  1: 'xl:grid-cols-1',
  2: 'xl:grid-cols-2',
  3: 'xl:grid-cols-3',
  4: 'xl:grid-cols-4',
};

const spanColumns: Record<ColumnSpan, string> = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
};

const spanColumnsSm: Record<ColumnSpan, string> = {
  1: 'sm:col-span-1',
  2: 'sm:col-span-2',
  3: 'sm:col-span-3',
  4: 'sm:col-span-4',
};

const spanColumnsMd: Record<ColumnSpan, string> = {
  1: 'md:col-span-1',
  2: 'md:col-span-2',
  3: 'md:col-span-3',
  4: 'md:col-span-4',
};

const spanColumnsLg: Record<ColumnSpan, string> = {
  1: 'lg:col-span-1',
  2: 'lg:col-span-2',
  3: 'lg:col-span-3',
  4: 'lg:col-span-4',
};

const spanColumnsXl: Record<ColumnSpan, string> = {
  1: 'xl:col-span-1',
  2: 'xl:col-span-2',
  3: 'xl:col-span-3',
  4: 'xl:col-span-4',
};

export const FieldRow = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      'flex flex-wrap justify-between gap-3 sm:flex-nowrap',
      className
    )}
  >
    {children}
  </div>
);

export const FieldColumn = ({
  children,
  auto = false,
  className,
}: {
  children: React.ReactNode;
  auto?: boolean;
  className?: string;
}) => (
  <div className={cn('w-full', auto ? 'sm:w-full' : 'sm:w-1/2', className)}>
    {children}
  </div>
);

export const FieldStack = ({
  children,
  gap = 'md',
  className,
}: {
  children: React.ReactNode;
  gap?: GapSize;
  className?: string;
}) => (
  <div className={cn('flex flex-col', gapClasses[gap], className)}>
    {children}
  </div>
);

export const FieldGrid = ({
  children,
  columns = 1,
  smColumns = 2,
  mdColumns,
  lgColumns,
  xlColumns,
  gap = 'md',
  className,
}: {
  children: React.ReactNode;
  columns?: ColumnCount;
  smColumns?: ColumnCount;
  mdColumns?: ColumnCount;
  lgColumns?: ColumnCount;
  xlColumns?: ColumnCount;
  gap?: GapSize;
  className?: string;
}) => (
  <div
    className={cn(
      'grid',
      gapClasses[gap],
      gridColumns[columns],
      smColumns ? gridColumnsSm[smColumns] : null,
      mdColumns ? gridColumnsMd[mdColumns] : null,
      lgColumns ? gridColumnsLg[lgColumns] : null,
      xlColumns ? gridColumnsXl[xlColumns] : null,
      className
    )}
  >
    {children}
  </div>
);

export const FieldGridItem = ({
  children,
  span,
  smSpan,
  mdSpan,
  lgSpan,
  xlSpan,
  className,
}: {
  children: React.ReactNode;
  span?: ColumnSpan;
  smSpan?: ColumnSpan;
  mdSpan?: ColumnSpan;
  lgSpan?: ColumnSpan;
  xlSpan?: ColumnSpan;
  className?: string;
}) => (
  <div
    className={cn(
      span ? spanColumns[span] : null,
      smSpan ? spanColumnsSm[smSpan] : null,
      mdSpan ? spanColumnsMd[mdSpan] : null,
      lgSpan ? spanColumnsLg[lgSpan] : null,
      xlSpan ? spanColumnsXl[xlSpan] : null,
      className
    )}
  >
    {children}
  </div>
);
