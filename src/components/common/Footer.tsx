import { Container, Text, Center } from '@mantine/core';
import { useContent } from '../../hooks/useContent';
import { uiContent } from '../../contents';

function Footer() {
  const { get } = useContent();
  const ui = get(uiContent);

  return (
    <footer style={{ borderTop: '1px solid #e0e0e0', marginTop: '2rem' }}>
      <Container size="lg">
        <Center py="xl">
          <Text size="sm" c="dimmed">
            {ui.footer.copyright}
          </Text>
        </Center>
      </Container>
    </footer>
  );
}

export default Footer;