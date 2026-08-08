import { Anchor, Container, Paper, Title, Text, Stack, Group } from '@mantine/core';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContent } from '../../hooks/useContent';
import { worksContent } from '../../contents';
import MarkdownRenderer from '../../components/ui/MarkdownRenderer';
import TagList from '../../components/works/TagList';

function WorkDetailPage() {
  const { id, lang } = useParams<{ id: string; lang: string }>();
  const { get, language } = useContent();
  const works = get(worksContent);
  const [markdownContent, setMarkdownContent] = useState<string>('');

  const work = works.works.find((w) => w.id === id);

  useEffect(() => {
    if (work) {
      import(`../../contents/works/${work.id}/content.${language}.md?raw`)
        .then((module) => {
          setMarkdownContent(module.default);
        })
        .catch(() => {
          setMarkdownContent('');
        });
    }
  }, [work, language]);

  if (!work) {
    return <Navigate to={`/${lang}`} replace />;
  }

  return (
    <Container size="lg" py="xl">
      <Anchor component={Link} to={`/${lang}`} size="lg" fw={700} c="gray.5" style={{ left: '1rem', position: 'fixed', top: '4rem' }}>
        {'< Top'}
      </Anchor>
      <Stack
        gap="xs"
        mb="lg"
        style={{ borderLeft: '4px solid var(--mantine-primary-color-filled)', paddingLeft: '0.75rem' }}
      >
        <Group gap="xs">
          <Title order={1}>{work.title}</Title>
          <TagList tags={work.tags} size="md" />
        </Group>

        <Text size="sm" c="dimmed">
          {work.description}
        </Text>
      </Stack>

      <Paper p="lg" radius="md" withBorder style={{ borderWidth: '2px' }}>
        {markdownContent && <MarkdownRenderer content={markdownContent} />}
      </Paper>
    </Container>
  );
}

export default WorkDetailPage;
