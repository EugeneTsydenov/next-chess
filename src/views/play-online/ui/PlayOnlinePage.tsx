import { GameTabPanel } from '@/widgets/game-tab-panel';
import { Chessboard } from '@/shared/ui';
import { Box } from '@mui/material';
import * as React from 'react';

const PlayOnlinePage: React.FC = () => {
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
        <Chessboard boardWidth={560} />
        <GameTabPanel />
      </Box>
    </Box>
  );
};

export default PlayOnlinePage;
