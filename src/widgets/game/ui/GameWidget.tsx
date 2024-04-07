'use client';

import {
  BlackTimer,
  GameChessboard,
  gameStore,
  matchmakingStore,
  WhiteTimer,
} from '@/entities/game';
import { MeTag, UserTag } from '@/entities/user';
import { Box, Skeleton } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { authStore } from '@/shared/model';
import { UserDisplay } from '@/shared/ui';
import { useWindow } from '@/shared/lib';
import * as React from 'react';

const GameWidget: React.FC = observer(() => {
  const isWindow = useWindow();
  const [isLoading, setIsLoading] = React.useState(false);

  /*
   *This is done so that when the page is reloaded,
   * the correct state of the board is displayed
   * (without this, until the player leaves,
   * the initial state of the board is displayed, although the state changes)
   * */
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
  }, []);

  return (
    <Box display='flex' flexDirection='column' gap={1}>
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        {matchmakingStore.isLoading ? (
          <UserDisplay avatarVariant='square' username='Search enemy...' />
        ) : (
          <UserTag avatarVariant='square' userId={gameStore.enemy!} />
        )}
        {gameStore.userSide === 'b' ? <WhiteTimer /> : <BlackTimer />}
      </Box>
      {isLoading ? (
        <GameChessboard />
      ) : (
        <Skeleton variant='rectangular' width='560px' height='560px' />
      )}
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        {isWindow && authStore.jwt ? <MeTag avatarVariant='square' /> : ''}
        {gameStore.userSide === 'w' ? <WhiteTimer /> : <BlackTimer />}
      </Box>
    </Box>
  );
});

export default GameWidget;
