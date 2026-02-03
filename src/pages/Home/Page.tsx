import { Container, Title, Stack, SimpleGrid } from '@mantine/core';
import { useContent } from '../../hooks/useContent';
import WorkCard from '../../components/works/WorkCard';
import ProfileSection from '../../components/profile/ProfileSection';
import { worksContent } from '../../contents';

function HomePage() {
  const { get } = useContent();
  const works = get(worksContent);

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl" mb="3rem">
        <ProfileSection />
      </Stack>

      <Stack gap="lg">
        <Title order={2} size="h3">
          {works.heading}
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
          {works.works.map((work) => (
            <WorkCard
              key={work.id}
              work={work}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}

export default HomePage;