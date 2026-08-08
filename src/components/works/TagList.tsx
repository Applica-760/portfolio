import { Group, Image } from '@mantine/core';
import type { TechIcon } from '../../contents';

interface TagListProps {
  tags: TechIcon[];
  size?: 'sm' |'md'| 'lg';
}

function TagList({ tags, size = 'sm' }: TagListProps) {
  const iconSize = { sm: 48, md: 51.2, lg: 80 }[size];

  if (tags.length === 0) return null;

  return (
    <Group gap="xs">
      {tags.map((tag) => (
        <Image
          key={tag.icon}
          src={`https://skillicons.dev/icons?i=${tag.icon}`}
          alt={tag.label}
          h={iconSize}
          w={iconSize}
        />
      ))}
    </Group>
  );
}

export default TagList;
