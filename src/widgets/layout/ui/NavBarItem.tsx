'use client';

import { IDropDawnLink } from '@/widgets/layout/model/types/INavLinks';
import { useHover } from '@/widgets/layout/lib/hooks/useHover';
import DropDownMenu from '@/widgets/layout/ui/DropDownMenu';
import { MenuItem } from '@mui/material';
import { NavLink } from '@/shared/ui';
import * as React from 'react';

interface NavBarItemProps {
  navLinkName: string;
  navPath: string;
  dropDownLinks: IDropDawnLink[];
}

const NavBarItem: React.FC<NavBarItemProps> = ({ navLinkName, dropDownLinks, navPath }) => {
  const { isHover, onMouseEnter, onMouseLeave } = useHover();

  return (
    <MenuItem
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        position: 'relative',
        padding: 0,
      }}
    >
      <NavLink
        href={navPath}
        activeLinkColor='#4eb334'
        sx={{
          fontSize: '15px',
          padding: '6px 16px',
          textDecoration: 'none',
        }}
      >
        {navLinkName}
      </NavLink>
      {isHover && <DropDownMenu dropDownLinks={dropDownLinks} />}
    </MenuItem>
  );
};

export default NavBarItem;
