'use client';

import { Link as MuiLink, LinkProps } from '@mui/material';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import * as React from 'react';

interface NavLinkProps extends LinkProps {
  activeLinkColor?: string;
}

const NavLink: React.FC<NavLinkProps> = props => {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  const activeLinkColor = props.activeLinkColor
    ? props.activeLinkColor
    : props.color
      ? props.color
      : 'inherit';

  return (
    <MuiLink
      component={NextLink}
      {...props}
      color={isActive ? activeLinkColor : props.color ? props.color : 'inherit'}
    >
      {props.children}
    </MuiLink>
  );
};

export default NavLink;
