import { Link as MuiLink } from '@mui/material';
import { LinkProps } from '@mui/material';
import NextLink from 'next/link';
import * as React from 'react';

const Link: React.FC<LinkProps> = props => {
  return (
    <MuiLink href={props.href} component={NextLink} {...props}>
      {props.children}
    </MuiLink>
  );
};

export default Link;
