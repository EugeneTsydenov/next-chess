'use client';

import { useAppSelector, useWindow } from '@/shared/lib';
import { GameChessboard } from '@/entities/game';
import { jwtSelector } from '@/shared/model';
import { UserTag } from '@/entities/user';
import { UserDisplay } from '@/shared/ui';
import { Box } from '@mui/material';
import * as React from 'react';

const GameWidget: React.FC = () => {
  const jwt = useAppSelector(jwtSelector);
  const isWindow = useWindow();

  return (
    <Box display='flex' flexDirection='column' gap={1}>
      <UserDisplay avatarVariant='square' username='Enemy' />
      <GameChessboard />
      {isWindow && jwt ? <UserTag jwt={jwt} avatarVariant='square' /> : ''}
    </Box>
  );
};

export default GameWidget;
