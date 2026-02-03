import { Container, Title, Text, Stack, Badge, Group } from '@mantine/core';
import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContent } from '../../hooks/useContent';
import { worksContent } from '../../contents';
import MarkdownRenderer from '../../components/ui/MarkdownRenderer';

function WorkDetailPage() {
  const { id, lang } = useParams<{ id: string; lang: string }>();
  const { get, language } = useContent();
  const works = get(worksContent);
  const [markdownContent, setMarkdownContent] = useState<string>('');

  const work = works.works.find((w) => w.id === id);

  useEffect(() => {
    if (work && work.id === '1') {
      import(`../../contents/works/project1.${language}.md?raw`)
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
        <Title order={1}>{work.title}</Title>
        
        <Group gap="xs">
          {work.tags.map((tag) => (
            <Badge key={tag} variant="light" size="lg" tt="none">
              {tag}
            </Badge>
          ))}
        </Group>

        <Text size="sm" c="dimmed">
          {work.description}
        </Text>

        {markdownContent && <MarkdownRenderer content={markdownContent} />}
      </Stack>
    </Container>
  );
}

export default WorkDetailPage;