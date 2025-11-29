import type { Meta, StoryObj } from '@storybook/react';
import { AlertCircle, DollarSign, TrendingUp, Users } from 'lucide-react';

import InfoCard from './info-card';

const meta = {
  title: 'Composed/InfoCard',
  component: InfoCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    item: {
      control: 'object',
    },
  },
} satisfies Meta<typeof InfoCard>;

export default meta;
type Story = StoryObj<typeof InfoCard>;

export const Default: Story = {
  args: {
    item: {
      id: '1',
      icon: <Users className="w-5 h-5 text-primary-blue-500" />,
      color: 'primary-green-500',
      title: 'Total Members',
      count: 1234,
    },
  },
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
      <InfoCard
        item={{
          id: '1',
          icon: <Users className="w-5 h-5 text-primary-blue-500" />,
          color: 'primary-green-500',
          title: 'Total Members',
          count: 1234,
        }}
      />
      <InfoCard
        item={{
          id: '2',
          icon: <DollarSign className="w-5 h-5 text-primary-blue-500" />,
          color: 'secondary-pink-500',
          title: 'Total Revenue',
          count: '$45,678',
        }}
      />
      <InfoCard
        item={{
          id: '3',
          icon: <TrendingUp className="w-5 h-5 text-primary-blue-500" />,
          color: 'semantic-blue-500',
          title: 'Growth Rate',
          count: '+23%',
        }}
      />
      <InfoCard
        item={{
          id: '4',
          icon: <AlertCircle className="w-5 h-5 text-primary-blue-500" />,
          color: 'alert-red-400',
          title: 'Pending Issues',
          count: 8,
        }}
      />
    </div>
  ),
};
