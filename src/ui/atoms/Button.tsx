import { forwardRef } from 'react';
import { Button as RadixButton, ButtonProps as RadixButtonProps } from '@radix-ui/themes';

type TypeProp = 'button' | 'submit' | 'reset';
type VariantProp = 'classic' | 'solid' | 'soft' | 'surface' | 'outline' | 'ghost' | undefined;

interface ButtonProps extends RadixButtonProps {
  className?: string;
  type?: TypeProp;
  variant?: VariantProp;
  isDisabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, type, variant, isDisabled, ...props }, ref) => {
    return (
      <RadixButton
        ref={ref}
        className={className}
        type={type}
        variant={variant}
        disabled={isDisabled}
        {...props}
      >
        {children}
      </RadixButton>
    );
  }
);

Button.displayName = 'Button';
