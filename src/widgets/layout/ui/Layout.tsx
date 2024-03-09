import Header from '@/widgets/layout/ui/Header';
import { Box, Container } from '@mui/material';
import * as React from 'react';

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
