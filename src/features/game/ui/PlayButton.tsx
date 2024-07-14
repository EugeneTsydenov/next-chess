'use client';

import { gameSocket, gameStore } from '@/entities/game';
import { Button, Typography } from '@mui/material';
import { authStore } from '@/shared/model';
import * as React from 'react';

interface PlayButtonProps {
  gameMode: 'online' | 'friend' | 'bot' | 'offline';
}

const PlayButton: React.FC<PlayButtonProps> = ({ gameMode }) => {
  return (
    <Button
      fullWidth
      variant='contained'
      sx={{ p: 1.5, borderRadius: '5px' }}
      onClick={() => {
        gameSocket.findGame(authStore.jwt!, { timeMode: gameStore.time.timeTitle });
      }}
    >
      <Typography variant='h4' fontWeight={600}>
        Play
      </Typography>
    </Button>
  );
};

export default PlayButton;
