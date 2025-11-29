'use client';

import { type Table } from '@tanstack/react-table';
import { X } from 'lucide-react';

import { Button } from '@/components/composed/button/button';
import { Search } from '@/components/composed/search/search';

import { DataTableFacetedFilter } from './data-table-faceted-filter';
import { DataTableViewOptions } from './data-table-view-options';

export interface FilterConfig {
  columnId: string;
  title: string;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  onSearch?: (term: string) => void;
  filters?: FilterConfig[];
  searchPlaceholder?: string;
}

export function DataTableToolbar<TData>({
  table,
  onSearch,
  filters = [],
  searchPlaceholder = 'Search...',
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex flex-col gap-3 w-full md:flex-row md:items-center md:justify-between">
      <div className="flex items-center flex-wrap gap-2 min-w-0 flex-1">
        {/* Search Bar */}
        {onSearch && (
          <Search
            onSearch={onSearch}
            placeholder={searchPlaceholder}
            wrapperClass="min-w-[140px] flex-1 md:flex-initial md:min-w-[200px] md:max-w-[300px]"
          />
        )}

        {/* Dynamic Filters */}
        <div className="flex items-center flex-wrap gap-2 min-w-0">
          {filters.map((filter) => {
            const column = table.getColumn(filter.columnId);
            return (
              column && (
                <DataTableFacetedFilter
                  key={filter.columnId}
                  column={column}
                  title={filter.title}
                  options={filter.options}
                />
              )
            );
          })}
        </div>

        {/* Reset Button */}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 text-xs md:px-3 md:text-sm shrink-0"
          >
            Reset
            <X className="h-3 w-3 md:h-4 md:w-4" />
          </Button>
        )}
      </div>

      <div className="flex items-center justify-end md:justify-start shrink-0">
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
