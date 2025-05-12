import { forwardRef, ReactNode } from 'react';

// Atomic architecture
import { Input, InputProps } from '@/ui/atoms/Input';

// Styles
import styles from './input-icon.module.css';

interface InputIconProps extends InputProps {
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const InputIcon = forwardRef<HTMLInputElement, InputIconProps>(
  ({ className, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className={`${styles['input-container']} ${className}`}>
        {leftIcon && <span className={styles['left-icon']}>{leftIcon}</span>}

        <Input ref={ref} {...props} />

        {rightIcon && <span className={styles['right-icon']}>{rightIcon}</span>}
      </div>
    );
  }
);

InputIcon.displayName = 'InputIcon';
