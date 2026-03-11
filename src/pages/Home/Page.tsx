import { Container, Title, Paper, Stack, SimpleGrid } from '@mantine/core';
import { useContent } from '../../hooks/useContent';
import WorkCard from '../../components/works/WorkCard';
import ProfileSection from '../../components/profile/ProfileSection';
import SummarySection from '../../components/profile/SummarySection';
import LinkCard from '../../components/ui/LinkCard';
import LinkCardContainer from '../../components/ui/LinkCardContainer';
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

      <Stack gap="lg" mb="3rem">
        <Title order={2} size="h1">
          {profile.summary.heading}
        </Title>
        <SummarySection />
      </Stack>

      <Stack gap="lg" mb="3rem">
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

      <Stack gap="lg">
        <Title order={2} size="h1">
          {profile.links.heading}
        </Title>
        <LinkCardContainer>
          {profile.links.items.map((link) => (
            <LinkCard key={link.url} {...link} />
          ))}
        </LinkCardContainer>
        
      </Stack>
    </Container>
  );
}

export default HomePage;