'use client';

import { GameTabPanel } from '@/widgets/game-tab-panel';
import { matchmakingStore } from '@/entities/game';
import { useRouter } from 'next/navigation';
import { GameWidget } from '@/widgets/game';
import { observer } from 'mobx-react-lite';
import { Box } from '@mui/material';
import * as React from 'react';

const PlayOnlinePage: React.FC = observer(() => {
  const router = useRouter();
  const isStartGame = matchmakingStore.isStartGame;

  React.useEffect(() => {
    const roomId = localStorage.getItem('roomId');
    if (isStartGame && roomId) {
      router.push(`/game/${roomId}`);
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
});

export default PlayOnlinePage;
