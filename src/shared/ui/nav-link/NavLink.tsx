'use client';

import { Link as MuiLink, LinkProps } from '@mui/material';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import * as React from 'react';

const NavLink: React.FC<LinkProps> = props => {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
    <MuiLink className={isActive ? 'active' : ''} component={NextLink} {...props}>
      {props.children}
    </MuiLink>
  );
};

export default NavLink;
