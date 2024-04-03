'use client';

import { testSocket } from '@/entities/game/api/socket';
import { Button, Typography } from '@mui/material';
import * as React from 'react';

const PlayButton: React.FC = () => {
  function handleClick() {
    testSocket();
  }

  return (
    <Button
      fullWidth
      variant='contained'
      sx={{ p: 1.5, borderRadius: '5px' }}
      onClick={handleClick}
    >
      <Typography variant='h4' fontWeight={600}>
        Play
      </Typography>
    </Button>
  );
};

export default PlayButton;
