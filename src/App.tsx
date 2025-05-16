import { Box, Section } from '@radix-ui/themes';

import Container from './ui/molecules/container';
import Header from '@/ui/organisms/Header/Header';
import Footer from '@/ui/organisms/Footer/Footer';

export default function App() {
  return (
    <Container size="xl">
      <Header currentScreen="screenForm"></Header>
      <Box py="9">
        <Section py="9">
          <p>Main</p>
          <p>Hello from Radix Themes :)</p>
        </Section>
        <Footer></Footer>
      </Box>
    </Container>
  );
}
