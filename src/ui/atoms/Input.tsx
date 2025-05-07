import { TextField } from '@radix-ui/themes';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

type TextFieldRootProps = ComponentPropsWithoutRef<typeof TextField.Root>;
type VariantProp = 'classic' | 'surface' | 'soft';
type SizeProp = '1' | '2' | '3';
type RadiusProp = 'none' | 'small' | 'medium' | 'large' | 'full';

export interface InputProps extends TextFieldRootProps {
  className?: string;
  variant?: VariantProp;
  size?: SizeProp;
  radius?: RadiusProp;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'classic', size = '2', radius = 'medium', ...props }, ref) => {
    return (
      <TextField.Root
        ref={ref}
        className={className}
        variant={variant}
        size={size}
        radius={radius}
        {...props}
      ></TextField.Root>
    );
  }
);

Input.displayName = 'Input';
