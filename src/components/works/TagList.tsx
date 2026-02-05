import { Badge, Group } from '@mantine/core';

interface TagListProps {
  tags: string[];
  size?: 'sm' |'md'| 'lg';
}

function TagList({ tags, size = 'sm' }: TagListProps) {
  return (
    <Group gap="xs">
      {tags.map((tag) => (
        <Badge key={tag} c="#FFFFFF" bg="#007bffd0" size={size} tt="none">
          {tag}
        </Badge>
      ))}
    </Group>
  );
}

export default TagList;
