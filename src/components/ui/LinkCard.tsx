import { Card, Text, Image, Box, Stack } from '@mantine/core';

interface LinkCardProps {
  url: string;
  title: string;
  description?: string;
  image?: string;
}

function LinkCard({ url, title, description, image }: LinkCardProps) {
  return (
    <Card
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      shadow="lg"
      padding="md"
      radius="md"
      withBorder
      style={{
        textDecoration: 'none',
        color: 'inherit',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
        borderWidth: '2px',
        display: 'block',
        height: '100%',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      <Card.Section style={{ aspectRatio: '2/1', overflow: 'hidden' }}>
        {image ? (
          <Image
            src={image}
            height="100%"
            width="100%"
            alt={title}
            fit="cover"
          />
        ) : (
          <Box
            style={{
              height: '100%',
              width: '100%',
              backgroundColor: '#e9ecef',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text size="lg" c="dimmed" fw={500}>
              No Image
            </Text>
          </Box>
        )}
      </Card.Section>

      <Stack gap={4} mt="sm">
        <Text 
          fw={600} 
          size="lg" 
          lineClamp={2} 
          style={{ 
            minHeight: '3.6em',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            wordBreak: 'break-word',
          }}
        >
          {title}
        </Text>
        {description && (
          <Text size="sm" c="dimmed">
            {description}
          </Text>
        )}
      </Stack>
    </Card>
  );
}

export default LinkCard;
