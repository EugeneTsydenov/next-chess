'use client';

import { gameIdSelector, startGameSelector } from '@/entities/game';
import { GameTabPanel } from '@/widgets/game-tab-panel';
import { useAppSelector } from '@/shared/lib';
import { useRouter } from 'next/navigation';
import { GameWidget } from '@/widgets/game';
import { Box } from '@mui/material';
import * as React from 'react';

const PlayOnlinePage: React.FC = () => {
  const isStartGame = useAppSelector(startGameSelector);
  const gameId = useAppSelector(gameIdSelector);
  const router = useRouter();

  React.useEffect(() => {
    console.log(isStartGame, gameId);
    if (isStartGame && gameId) {
      router.push(`/game/${gameId}`);
    }
  }, [isStartGame, router]);

  return (
    <Box display='flex' alignItems='center' justifyContent='center' width='100%' height='100vh'>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        height='85vh'
        width='100%'
        gap={5}
        mt='8vh'
      >
        <GameTabPanel />
        <GameWidget />
        <GameTabPanel />
      </Box>
    </Box>
  );
};

export default PlayOnlinePage;
