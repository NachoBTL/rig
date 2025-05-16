import { Button } from '@/ui/atoms/Button';
import DropdownMenu from '@/ui/molecules/DropdownMenu';
import DropdownMenuItem from '@/ui/molecules/DropdownMenuItem';
import { HEADER_TEXTS } from './header.constants';

export default function HeaderMenuLeft() {
  return (
    <>
      <DropdownMenu
        trigger={
          <Button variant="ghost" aria-label={HEADER_TEXTS.guides} size="3">
            {HEADER_TEXTS.guides}
          </Button>
        }
        content={
          <>
            <DropdownMenuItem>{HEADER_TEXTS.faqs}</DropdownMenuItem>
            <DropdownMenuItem>{HEADER_TEXTS.resources}</DropdownMenuItem>
            <DropdownMenuItem>{HEADER_TEXTS.insurance}</DropdownMenuItem>
            <DropdownMenuItem>{HEADER_TEXTS.experts}</DropdownMenuItem>
          </>
        }
      />
      <Button variant="ghost" aria-label={HEADER_TEXTS.about} size="3">
        {HEADER_TEXTS.about}
      </Button>
      <Button variant="ghost" aria-label={HEADER_TEXTS.join} size="3">
        {HEADER_TEXTS.join}
      </Button>
      <Button variant="ghost" aria-label={HEADER_TEXTS.terms} size="3">
        {HEADER_TEXTS.terms}
      </Button>
    </>
  );
}
