import { Paper, Title, Text, Stack, Group, Anchor, Image } from '@mantine/core';
import { useContent } from '../../hooks/useContent';
import { profileContent, techStack } from '../../contents';

function ProfileSection() {
  const { get } = useContent();
  const profile = get(profileContent);

  return (
    <Paper p="md" radius="md">
      <Text mb="lg" component="div">
        {profile.bio.split('{0}').map((part, index, array) => (
          index < array.length - 1 ? (
            <span key={index}>
              {part}
              <Anchor href="https://github.com/Applica-760" target="_blank" rel="noopener noreferrer">
                {profile.bioLinkText}
              </Anchor>
            </span>
          ) : part
        ))}
      </Text>

      <Title order={3} size="h4" mb="sm">
        {profile.career.heading}
      </Title>
      <Stack gap="xs" mb="lg">
        {profile.career.items.map((item, index) => (
          <Text key={index} size="md" pl="md">
            {item}
          </Text>
        ))}
      </Stack>

      <Title order={3} size="h4" mb="sm">
        {profile.techStack.heading}
      </Title>
      <Group gap="xs" pl="md">
        {techStack.map((tech) => (
          <Image
            key={tech}
            src={`https://skillicons.dev/icons?i=${tech}`}
            alt={tech}
            w={48}
            h={48}
            style={{
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
          />
        ))}
      </Group>
    </Paper>
  );
}

export default ProfileSection;