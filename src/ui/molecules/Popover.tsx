import { ReactNode, forwardRef } from 'react';
import * as RadixPopover from '@radix-ui/react-popover';

import styles from './Popover.module.css';

interface PopoverProps {
  trigger: ReactNode;
  content: ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
}

const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ trigger, content, side = 'bottom', align = 'start', sideOffset = 5 }, ref) => {
    return (
      <RadixPopover.Root>
        <RadixPopover.Trigger asChild className={styles.trigger}>
          {trigger}
        </RadixPopover.Trigger>
        <RadixPopover.Portal>
          <RadixPopover.Content
            ref={ref}
            className={styles.content}
            side={side}
            align={align}
            sideOffset={sideOffset}
          >
            {content}
            <RadixPopover.Close className={`${styles.button} ${styles.close}`} aria-label="Close">
              X
            </RadixPopover.Close>
            <RadixPopover.Arrow className={`${styles.arrow} ${styles[`arrow-${side}`]}`} />
          </RadixPopover.Content>
        </RadixPopover.Portal>
      </RadixPopover.Root>
    );
  }
);

Popover.displayName = 'Popover';

export default Popover;
