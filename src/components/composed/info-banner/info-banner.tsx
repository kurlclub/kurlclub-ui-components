import type { ComponentType, FC } from 'react';

import { AlertTriangle, CheckCircle, Info, XCircle } from 'lucide-react';

import { cn } from '@/lib/utils';

import { BrandLogo } from '../brand-logo/brand-logo';
import type { BrandLogoVariant } from '../brand-logo/brand-logo';

type InfoBannerVariant = 'info' | 'warning' | 'success' | 'error';

interface InfoBannerProps {
  variant?: InfoBannerVariant;
  message: string;
  showIcon?: boolean;
  icon?: ComponentType<{ className?: string }>;
  showBrandLogo?: boolean;
  brandLogoVariant?: BrandLogoVariant;
}

const variantStyles: Record<
  InfoBannerVariant,
  {
    border: string;
    accent: string;
    icon: string;
    iconBg: string;
    glow: string;
  }
> = {
  info: {
    border: 'border-semantic-blue-500/30',
    accent: 'bg-semantic-blue-500',
    icon: 'text-semantic-blue-500',
    iconBg: 'bg-semantic-blue-500/15 border-semantic-blue-500/30',
    glow: 'from-semantic-blue-500/25',
  },
  warning: {
    border: 'border-neutral-ochre-500/30',
    accent: 'bg-neutral-ochre-500',
    icon: 'text-neutral-ochre-400',
    iconBg: 'bg-neutral-ochre-500/15 border-neutral-ochre-500/30',
    glow: 'from-neutral-ochre-500/25',
  },
  success: {
    border: 'border-neutral-green-500/30',
    accent: 'bg-neutral-green-500',
    icon: 'text-neutral-green-500',
    iconBg: 'bg-neutral-green-500/15 border-neutral-green-500/30',
    glow: 'from-neutral-green-500/25',
  },
  error: {
    border: 'border-alert-red-500/30',
    accent: 'bg-alert-red-500',
    icon: 'text-alert-red-500',
    iconBg: 'bg-alert-red-500/15 border-alert-red-500/30',
    glow: 'from-alert-red-500/25',
  },
};

const variantIcons: Record<
  InfoBannerVariant,
  ComponentType<{ className?: string }>
> = {
  info: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: XCircle,
};

export const InfoBanner: FC<InfoBannerProps> = ({
  variant = 'info',
  message,
  showIcon = true,
  icon,
  showBrandLogo = false,
  brandLogoVariant = 'app',
}) => {
  const Icon = icon ?? variantIcons[variant];
  const isAlert = variant === 'error' || variant === 'warning';

  return (
    <div
      role={isAlert ? 'alert' : 'status'}
      aria-live={isAlert ? 'assertive' : 'polite'}
      className={cn(
        'relative overflow-hidden rounded-lg border px-3 py-1 sm:px-4 sm:py-1.5',
        'bg-secondary-blue-500/70 text-white shadow-[0_10px_24px_-20px_rgba(0,0,0,0.6)]',
        'backdrop-blur-[2px]',
        variantStyles[variant].border
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/5 via-white/0 to-white/0" />
      <div
        className={cn(
          'absolute inset-y-0 left-0 w-1',
          variantStyles[variant].accent
        )}
      />
      <div
        className={cn(
          'pointer-events-none absolute -left-8 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full blur-2xl',
          'bg-linear-to-br to-transparent',
          variantStyles[variant].glow
        )}
      />

      <div className="relative flex items-center gap-2.5">
        {showIcon && (
          <div
            className={cn(
              'mt-0.5 flex h-5 w-5 items-center justify-center rounded-md border border-white/10 bg-white/5',
              variantStyles[variant].iconBg
            )}
          >
            <Icon className={cn('h-3 w-3', variantStyles[variant].icon)} />
          </div>
        )}
        <div className="min-w-0 flex-1 space-y-0.5">
          <p className="text-[11px] leading-relaxed text-white/70">{message}</p>
        </div>
        {showBrandLogo && (
          <div className="flex items-center">
            <div className="h-2 w-10 opacity-80 sm:h-2.5 sm:w-12">
              <BrandLogo variant={brandLogoVariant} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
