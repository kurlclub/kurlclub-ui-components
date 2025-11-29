import React from 'react';

import { AlertTriangle, CheckCircle, Info, XCircle } from 'lucide-react';

type InfoBannerVariant = 'info' | 'warning' | 'success' | 'error';

interface InfoBannerProps {
  variant?: InfoBannerVariant;
  title?: string;
  message: string;
  showIcon?: boolean;
}

const variantStyles: Record<InfoBannerVariant, string> = {
  info: 'bg-primary-green-500/10 border-primary-green-500/20 text-gray-300',
  warning: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
  success: 'bg-green-500/10 border-green-500/20 text-green-400',
  error: 'bg-red-500/10 border-red-500/20 text-red-400',
};

const variantIcons: Record<
  InfoBannerVariant,
  React.ComponentType<{ className?: string }>
> = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: XCircle,
};

export const InfoBanner: React.FC<InfoBannerProps> = ({
  variant = 'info',
  title,
  message,
  showIcon = true,
}) => {
  const Icon = variantIcons[variant];

  return (
    <div
      className={`p-2 border rounded-md flex items-center gap-2 ${variantStyles[variant]}`}
    >
      {showIcon && <Icon className="w-4 h-4 shrink-0" />}
      <p className="text-xs flex-1">
        {title && <strong>{title}</strong>}
        {title && ' '}
        {message}
      </p>
    </div>
  );
};
