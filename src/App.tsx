import { Flex, Text, Button } from '@radix-ui/themes';
// import { Icon } from '@/ui/atoms/Icon';

export default function App() {
  return (
    <>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let's go</Button>
        {/*         <Icon name="flash" size={32} />
         */}{' '}
      </Flex>
    </>
  );
}
