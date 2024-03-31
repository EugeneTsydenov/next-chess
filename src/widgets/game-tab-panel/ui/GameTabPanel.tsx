import TimeModeSelector from '@/widgets/game-tab-panel/ui/TimeModeSelector';
import { FindGame } from '@/features/game';
import { Box, Paper } from '@mui/material';
import * as React from 'react';

const GameTabPanel: React.FC = () => {
  return (
    <Box width='100%' component={Paper} height='100%' py={3} px={4}>
      <TimeModeSelector />
      <FindGame />
    </Box>
  );
};

export default GameTabPanel;
