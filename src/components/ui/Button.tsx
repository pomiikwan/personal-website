import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-tactical font-medium transition-all duration-300',
          'focus:outline-none focus:ring-2 focus:ring-tech-cyan focus:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-tech-cyan text-background hover:bg-tech-cyan/90 shadow-lg hover:shadow-tech-cyan/50':
              variant === 'primary',
            'bg-tactical-green text-foreground hover:bg-tactical-green/90':
              variant === 'secondary',
            'border-2 border-tech-cyan text-tech-cyan hover:bg-tech-cyan/10':
              variant === 'outline',
            'hover:bg-card/80 text-foreground': variant === 'ghost',
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-4 py-2 text-base': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
