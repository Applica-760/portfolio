import { SimpleGrid } from '@mantine/core';
import type { ReactNode } from 'react';

interface LinkCardContainerProps {
  children: ReactNode;
}

function LinkCardContainer({ children }: LinkCardContainerProps) {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2 }}
      spacing="lg"
      style={{ 
        marginTop: '1rem', 
        marginBottom: '1rem',
        maxWidth: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {children}
    </SimpleGrid>
  );
}

export default LinkCardContainer;
