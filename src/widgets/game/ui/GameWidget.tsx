'use client';

import { BlackTimer, GameChessboard, WhiteTimer } from '@/entities/game';
import { useAppSelector, useWindow } from '@/shared/lib';
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
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <UserDisplay avatarVariant='square' username='Enemy' />
        <BlackTimer />
      </Box>
      <GameChessboard />
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        {isWindow && jwt ? <UserTag jwt={jwt} avatarVariant='square' /> : ''}
        <WhiteTimer />
      </Box>
    </Box>
  );
};

export default GameWidget;
