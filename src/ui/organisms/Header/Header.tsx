import { Flex } from '@radix-ui/themes';
import HeaderMenuLeft from './HeaderMenuLeft';
import HeaderMenuRight from './HeaderMenuRight';
import Logo from '@/assets/img/logo.svg?url';

interface Props {
  currentScreen: 'screenHome' | 'screenForm';
  className?: string;
}

export default function Header({ currentScreen, className }: Props) {
  return (
    <Flex justify="between" align="center" className={className}>
      <Flex direction="column" gap="3">
        <Flex gap="4" align="center">
          <img src={Logo} alt="Logo" width="228px" height="60px" />
          {currentScreen === 'screenHome' ? <HeaderMenuLeft /> : null}
        </Flex>
      </Flex>

      <Flex direction="column" gap="3">
        <Flex gap="4" align="center" justify="end">
          <HeaderMenuRight currentScreen={currentScreen} />
        </Flex>
      </Flex>
    </Flex>
  );
}
