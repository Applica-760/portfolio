import { Card, Text, Badge, Group } from '@mantine/core';
import { Link, useParams } from 'react-router-dom';
import type { Work } from '../../contents';

interface WorkCardProps {
  work: Work;
}

function WorkCard({ work }: WorkCardProps) {
  const { lang } = useParams<{ lang: string }>();

  return (
    <Card
      component={Link}
      to={`/${lang}/works/${work.id}`}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{
        textDecoration: 'none',
        color: 'inherit',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      <Text fw={600} size="lg" mb="xs">
        {work.title}
      </Text>
      <Text size="sm" c="dimmed" mb="md">
        {work.description}
      </Text>
      <Group gap="xs">
        {work.tags.map((tag) => (
          <Badge key={tag} variant="light" size="sm" tt="none">
            {tag}
          </Badge>
        ))}
      </Group>
    </Card>
  );
}

export default WorkCard;