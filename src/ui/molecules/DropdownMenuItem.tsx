import React from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import styles from './DropdownMenu.module.css';

const DropdownMenuItem = ({ children }: { children: React.ReactNode }) => {
  return <RadixDropdownMenu.Item className={styles.Item}>{children}</RadixDropdownMenu.Item>;
};

export default DropdownMenuItem;
