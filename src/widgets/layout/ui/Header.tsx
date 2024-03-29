import { AppBar, Box, Container, Paper, Toolbar } from '@mui/material';
import NavBar from '@/widgets/layout/ui/NavBar';
import { Link, Logo } from '@/shared/ui';
import * as React from 'react';

const Header: React.FC = () => {
  return (
    <AppBar position='fixed'>
      <Paper>
        <Container maxWidth='xl'>
          <Toolbar
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            disableGutters
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: '20px', lg: '30px', xl: '80px' },
              }}
            >
              <Link href='/' color='inherit' sx={{ textDecoration: 'none' }}>
                <Logo
                  variant='h3'
                  component='h2'
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    letterSpacing: '.2rem',
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                />
              </Link>
              <Link href='/' sx={{ textDecoration: 'none' }} color='inherit'>
                <Logo
                  variant='h3'
                  component='h2'
                  sx={{
                    display: { xs: 'flex', md: 'none' },
                    letterSpacing: '.2rem',
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                />
              </Link>
              <NavBar />
            </Box>
          </Toolbar>
        </Container>
      </Paper>
    </AppBar>
  );
};

export default Header;
