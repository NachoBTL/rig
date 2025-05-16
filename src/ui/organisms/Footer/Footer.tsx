import { Flex } from '@radix-ui/themes';
import { Button } from '@/ui/atoms/Button';

import { FOOTER_TEXTS } from './footer.constants';

interface Props {
  className?: string;
}

export default function Footer({ className }: Props) {
  return (
    <Flex align="center" justify="end" className={className}>
      <Flex gap="4" align="center">
        <Button variant="soft" aria-label={FOOTER_TEXTS.save} size="3">
          {FOOTER_TEXTS.save}
        </Button>
        <Button variant="solid" aria-label={FOOTER_TEXTS.continue} size="3">
          {FOOTER_TEXTS.continue}
        </Button>
      </Flex>
    </Flex>
  );
}
