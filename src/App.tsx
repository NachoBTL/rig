import { Flex, Text, Heading } from '@radix-ui/themes';
import { Button } from '@/ui/atoms/Button';

import Popover from '@/ui/molecules/Popover';

export default function App() {
  return (
    <>
      <Flex direction="column" gap="2">
        <p>Hello from Radix Themes :)</p>
        <Flex direction="row" gap="2">
          <Popover
            trigger={
              <Button variant="surface" radius="full">
                ?
              </Button>
            }
            content={
              <Flex direction="column" gap="2">
                <Heading as="h4" size="3" weight="bold">
                  Lorem ipsum
                </Heading>
                <Text size="3">
                  Lorem ipsum dolor sit amet consectetur. Nunc volutpat elit dictumst lorem nullam
                  ac quis gravida imperdiet. Neque aliquam vitae rhoncus aenean non aliquam aliquam
                  morbi. In nibh mi tincidunt posuere volutpat tristique scelerisque.
                </Text>
              </Flex>
            }
            side="right"
          />
        </Flex>
      </Flex>
    </>
  );
}
