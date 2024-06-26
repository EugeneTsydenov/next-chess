'use client';

import { Box, CircularProgress, Paper } from '@mui/material';
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
      }}
    >
      <CircularProgress color='primary' />
    </Box>
  );
};

export default FullPageLoader;
