'use client';

import { Box, Paper } from '@mui/material';
import * as React from 'react';

const FullPageLoader: React.FC<{ zIndex: number }> = ({ zIndex }) => {
  return (
    <Box
      component={Paper}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '0px',
        bottom: '0px',
        right: '0px',
        left: '0px',
        zIndex,
        bgcolor: '#3d3d3d',
      }}
    ></Box>
  );
};

export default FullPageLoader;
