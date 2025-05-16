import React from 'react';
import { forwardRef } from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import styles from './DropdownMenu.module.css';
interface DropdownMenuProps {
  trigger?: React.ReactNode;
  content: React.ReactNode;
}

const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ trigger, content, ...props }, ref) => {
    return (
      <RadixDropdownMenu.Root>
        <RadixDropdownMenu.Trigger asChild>{trigger}</RadixDropdownMenu.Trigger>
        <RadixDropdownMenu.Portal>
          <RadixDropdownMenu.Content className={styles.Content} sideOffset={5} ref={ref} {...props}>
            {content}
          </RadixDropdownMenu.Content>
        </RadixDropdownMenu.Portal>
      </RadixDropdownMenu.Root>
    );
  }
);

export default DropdownMenu;
