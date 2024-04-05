'use client';

import { gameSocket, timeSelector } from '@/entities/game';
import { Button, Typography } from '@mui/material';
import { useAppSelector } from '@/shared/lib';
import { jwtSelector } from '@/shared/model';
import * as React from 'react';

interface PlayButtonProps {
  gameMode: 'online' | 'friend' | 'bot' | 'offline';
}

const PlayButton: React.FC<PlayButtonProps> = ({ gameMode }) => {
  const timeMode = useAppSelector(timeSelector);
  const jwt = useAppSelector(jwtSelector);

  return (
    <Button
      fullWidth
      variant='contained'
      sx={{ p: 1.5, borderRadius: '5px' }}
      onClick={() => {
        gameSocket.findGame(jwt!, { timeMode: timeMode.timeTitle });
      }}
    >
      <Typography variant='h4' fontWeight={600}>
        Play
      </Typography>
    </Button>
  );
};

export default PlayButton;
