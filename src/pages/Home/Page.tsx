import { Container, Title, Paper, Stack, SimpleGrid } from '@mantine/core';
import { useContent } from '../../hooks/useContent';
import WorkCard from '../../components/works/WorkCard';
import ProfileSection from '../../components/profile/ProfileSection';
import { worksContent, profileContent } from '../../contents';

function HomePage() {
  const { get } = useContent();
  const works = get(worksContent);
  const profile = get(profileContent);

  return (
    <Container size="lg" py="xl">
      <Stack gap="lg" mb="3rem">
        <Title order={2} size="h1">
          {profile.heading}
        </Title>
        <ProfileSection />
      </Stack>

      <Stack gap="lg">
        <Title order={2} size="h1">
          {works.heading}
        </Title>
        <Paper p="md" radius="md">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {works.works.map((work) => (
            <WorkCard
              key={work.id}
              work={work}
            />
          ))}
        </SimpleGrid>
        </Paper>
      </Stack>
    </Container>
  );
}

export default HomePage;