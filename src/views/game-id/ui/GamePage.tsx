'use client';

import { GameTabPanel } from '@/widgets/game-tab-panel';
import { useAppSelector } from '@/shared/lib';
import { gameSocket } from '@/entities/game';
import { jwtSelector } from '@/shared/model';
import { GameWidget } from '@/widgets/game';
import { Box } from '@mui/material';
import * as React from 'react';

interface GamePageProps {
  url: {
    params: {
      id: string;
    };
    searchParams: Record<string, string>;
  };
}

const GamePage: React.FC<GamePageProps> = ({ url }) => {
  const jwt = useAppSelector(jwtSelector);

  React.useEffect(() => {
    if (jwt) {
      gameSocket.getGameState(jwt, url.params.id);
    }
  }, [jwt, url.params.id]);

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

export default GamePage;
