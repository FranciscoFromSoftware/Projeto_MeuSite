import React from 'react';
import { cn } from '@/src/lib/utils';

interface DataCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  headerIcon?: React.ReactNode;
  footer?: React.ReactNode;
  idTag?: string;
}

export const DataCard: React.FC<DataCardProps> = ({
  title,
  subtitle,
  children,
  className,
  variant = 'outline',
  headerIcon,
  footer,
  idTag,
}) => {
  const variantStyles = {
    primary: 'border-primary/20 hover:border-primary/40',
    secondary: 'border-secondary/20 hover:border-secondary/40',
    tertiary: 'border-tertiary/20 hover:border-tertiary/40',
    outline: 'border-outline/20 hover:border-primary/30',
  };

  return (
    <div className={cn(
      "relative bg-surface-low border transition-colors p-6 flex flex-col gap-4 overflow-hidden",
      variantStyles[variant],
      className
    )}>
      {idTag && (
        <div className="absolute top-0 right-0 p-2 bg-surface-high border-b border-l border-outline/20 font-mono text-[10px] text-on-surface-variant">
          {idTag}
        </div>
      )}
      
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          {headerIcon && <div className="text-primary">{headerIcon}</div>}
          <h3 className="font-headline font-bold text-xl uppercase tracking-tight text-primary">
            {title}
          </h3>
        </div>
        {subtitle && (
          <p className="font-mono text-[10px] text-secondary uppercase tracking-widest">
            {subtitle}
          </p>
        )}
      </div>

      <div className="flex-1">
        {children}
      </div>

      {footer && (
        <div className="pt-4 border-t border-outline/10">
          {footer}
        </div>
      )}
    </div>
  );
};
