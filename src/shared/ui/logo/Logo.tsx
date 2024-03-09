import { Typography, TypographyProps } from '@mui/material';
import * as React from 'react';

const Logo: React.FC<TypographyProps> = props => {
  return <Typography {...props}>ChessHub</Typography>;
};

export default Logo;
