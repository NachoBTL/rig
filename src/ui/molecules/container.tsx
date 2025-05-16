import React from 'react';

// Third-Party libraries
import { Box, Container as RadixContainer } from '@radix-ui/themes';

// Styles
import styles from './Container.module.css';

interface ContainerProps {
  size?: keyof typeof sizes;
  className?: string;
  children?: React.ReactNode;
}

const sizes = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  full: '100%',
};

export default function Container({ size = 'xl', className = '', children }: ContainerProps) {
  return (
    <Box className={`${styles['box-container']} ${className}`}>
      <RadixContainer className={`${sizes[size]} ${styles['container-base']}`}>
        <Box py="5">{children}</Box>
      </RadixContainer>
    </Box>
  );
}
