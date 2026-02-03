import { Container, Group, Text, Stack } from '@mantine/core';
import { Link, useParams } from 'react-router-dom';
import { useContent } from '../../hooks/useContent';
import { uiContent } from '../../contents';
import LanguageSwitcher from '../ui/LanguageSwitcher';

function Header() {
  const { get } = useContent();
  const { lang } = useParams<{ lang: string }>();
  const ui = get(uiContent);

  return (
    <header style={{ borderBottom: '1px solid #e0e0e0', padding: '1rem 0' }}>
      <Container size="lg">
        <Group justify="space-between">
          <Link to={`/${lang}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Stack gap={0}>
              <Text size="lg" fw={700}>
                {ui.header.title}
              </Text>
              <Text size="sm" c="dimmed">
                {ui.header.subtitle}
              </Text>
            </Stack>
          </Link>
          <Group gap="md">
            <LanguageSwitcher />
          </Group>
        </Group>
      </Container>
    </header>
  );
}

export default Header;