import { Box, Container } from '@mui/material';
import { Header } from '@/widgets/header';
import * as React from 'react';

export const dynamic = 'force-dynamic';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <Box component='main'>
        <Container maxWidth='xl'>{children}</Container>
      </Box>
    </>
  );
};

export default Layout;
