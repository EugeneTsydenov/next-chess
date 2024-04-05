import TimeModeSelector from '@/widgets/game-tab-panel/ui/TimeModeSelector';
import { PlayButton } from '@/features/game';
import { Box, Paper } from '@mui/material';
import * as React from 'react';

const GameTabPanel: React.FC = () => {
  return (
    <Box width='100%' component={Paper} height='100%' py={3} px={4} borderRadius='10px'>
      <TimeModeSelector />
      <PlayButton gameMode='online' />
    </Box>
  );
};

export default GameTabPanel;
