import { Paper, Title, Text, Stack } from '@mantine/core';
import { useContent } from '../../hooks/useContent';
import { profileContent } from '../../contents';

function SummarySection() {
  const { get } = useContent();
  const profile = get(profileContent);

  return (
    <Paper p="md" radius="md">
      <Stack gap="md">
        {profile.summary.items.map((item, index) => (
          <div key={index}>
            <Title order={3} size="h4" mb="xs">
              {item.subtitle}
            </Title>
            <Text size="md" pl="md">
              {item.body}
            </Text>
          </div>
        ))}
      </Stack>
    </Paper>
  );
}

export default SummarySection;
