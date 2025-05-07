import { forwardRef } from 'react';

// Third-Party libraries
import { Button as RadixButton, ButtonProps as RadixButtonProps } from '@radix-ui/themes';

// Styles
import styles from './Button.module.css';

type TypeProp = 'button' | 'submit' | 'reset';
type VariantProp = 'classic' | 'solid' | 'soft' | 'surface' | 'outline' | 'ghost' | undefined;
type SizeProp = '1' | '2' | '3';

interface ButtonProps extends RadixButtonProps {
  className?: string;
  type?: TypeProp;
  variant?: VariantProp;
  size?: SizeProp;
  isDisabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, type = 'button', variant = 'classic', size = '2', ...props }, ref) => {
    return (
      <RadixButton
        ref={ref}
        className={`${styles.button} ${className}`}
        type={type}
        variant={variant}
        size={size}
        radius="medium"
        {...props}
      >
        {children}
      </RadixButton>
    );
  }
);

Button.displayName = 'Button';
