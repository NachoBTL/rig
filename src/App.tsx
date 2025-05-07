import { Flex } from '@radix-ui/themes';
import Popover from '@/ui/atoms/Popover';

export default function App() {
  return (
    <>
      <Flex direction="column" gap="2">
        <p>Hello from Radix Themes :)</p>
        <Flex direction="row" gap="2">
          <Popover
            trigger={<button>?</button>}
            content={
              <div>
                <h4>Lorem ipsum</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Nunc volutpat elit dictumst lorem nullam
                  ac quis gravida imperdiet. Neque aliquam vitae rhoncus aenean non aliquam aliquam
                  morbi. In nibh mi tincidunt posuere volutpat tristique scelerisque.
                </p>
              </div>
            }
            side="right"
          />
        </Flex>
      </Flex>
    </>
  );
}
