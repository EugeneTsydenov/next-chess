import { navLinks } from '@/widgets/layout/lib/data/NavLinks';
import NavBarItem from '@/widgets/layout/ui/NavBarItem';
import { Box, MenuList } from '@mui/material';
import * as React from 'react';

const NavBar: React.FC = () => {
  return (
    <Box component='nav'>
      <MenuList
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
        }}
      >
        {navLinks.map(navLink => {
          return (
            <NavBarItem
              key={navLink.id}
              navLinkName={navLink.navLinkName}
              dropDownLinks={navLink.dropDownLinks}
              navPath={navLink.navPath}
            />
          );
        })}
      </MenuList>
    </Box>
  );
};

export default NavBar;
