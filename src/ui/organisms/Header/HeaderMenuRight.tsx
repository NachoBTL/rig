import { Button } from '@/ui/atoms/Button';
import { MobileIcon, PersonIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons';
import { HEADER_TEXTS } from './header.constants';

interface Props {
  currentScreen: 'screenHome' | 'screenForm';
}

export default function HeaderMenuRight({ currentScreen }: Props) {
  return (
    <>
      <Button variant="ghost" aria-label="Phone" size="3">
        <MobileIcon /> {HEADER_TEXTS.phone}
      </Button>
      <Button variant="ghost" aria-label={HEADER_TEXTS.login} size="3">
        <PersonIcon /> {HEADER_TEXTS.login}
      </Button>

      {currentScreen === 'screenHome' ? (
        <Button variant="solid" aria-label={HEADER_TEXTS.quote} size="3">
          {HEADER_TEXTS.quote}
        </Button>
      ) : (
        <Button variant="soft" aria-label={HEADER_TEXTS.help} size="3">
          <QuestionMarkCircledIcon /> {HEADER_TEXTS.help}
        </Button>
      )}
    </>
  );
}
