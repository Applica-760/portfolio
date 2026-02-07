import { Box } from '@mantine/core';
import type { ReactNode } from 'react';

interface ImageRowProps {
  children: ReactNode;
}

function ImageRow({ children }: ImageRowProps) {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '0.5rem',
        marginTop: '1rem',
        marginBottom: '1rem',
        flexWrap: 'nowrap',
        overflowX: 'auto',
      }}
    >
      {children}
    </Box>
  );
}

export default ImageRow;
