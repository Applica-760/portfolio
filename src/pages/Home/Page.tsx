import { Container, Divider, Grid, Title, SimpleGrid } from '@mantine/core';
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
  const titleStyle = {
    borderLeft: '4px solid var(--mantine-primary-color-filled)',
    paddingLeft: '0.75rem',
  };

  return (
    <Container size="xl" py="xl">
      <Grid align="flex-start" gutter="lg">
        <Grid.Col span={{ base: 12, md: 2 }}>
          <Title order={2} size="h1" style={titleStyle}>{profile.heading}</Title>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 10 }}>
          <ProfileSection />
        </Grid.Col>
      </Grid>

      <Divider color="gray.3" my="md" />
      <Grid align="flex-start" gutter="lg">
        <Grid.Col span={{ base: 12, md: 2 }}>
          <Title order={2} size="h1" style={titleStyle}>{profile.summary.heading}</Title>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 10 }}>
          <SummarySection />
        </Grid.Col>
      </Grid>

      <Divider color="gray.3" my="md" />
      <Grid align="flex-start" gutter="lg">
        <Grid.Col span={{ base: 12, md: 2 }}>
          <Title order={2} size="h1" style={titleStyle}>{works.heading}</Title>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 10 }}>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            {works.works.map((work) => (
              <WorkCard key={work.id} work={work} />
            ))}
          </SimpleGrid>
        </Grid.Col>
      </Grid>

      <Divider color="gray.3" my="md" />
      <Grid align="flex-start" gutter="lg">
        <Grid.Col span={{ base: 12, md: 2 }}>
          <Title order={2} size="h1" style={titleStyle}>{profile.links.heading}</Title>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 10 }}>
          <LinkCardContainer>
            {profile.links.items.map((link) => (
              <LinkCard key={link.url} {...link} />
            ))}
          </LinkCardContainer>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default HomePage;
