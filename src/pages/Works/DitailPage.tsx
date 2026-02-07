import { Container, Title, Text, Stack, Group } from '@mantine/core';
import { useParams, Navigate } from 'react-router-dom';
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
      <Stack gap="lg">
        <Group gap="xs">
          <Title order={1}>{work.title}</Title>
          
          <TagList tags={work.tags} size="md" />
        </Group>

        <Text size="sm" c="dimmed" style={{ paddingLeft: '1.5rem' }}>
          {work.description}
        </Text>

        {markdownContent && <MarkdownRenderer content={markdownContent} />}
      </Stack>
    </Container>
  );
}

export default WorkDetailPage;