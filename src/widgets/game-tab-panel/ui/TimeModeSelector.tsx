'use client';

import TimeModesList from '@/widgets/game-tab-panel/ui/TimeModesList';
import { ToggleVisibleTimeModes } from '@/features/game';
import { useToggle } from '@/shared/lib';
import { Box } from '@mui/material';
import * as React from 'react';

const TimeModeSelector: React.FC = () => {
  const [isVisibleTimeModes, toggleVisibleTimeModes] = useToggle(false);

  return (
    <Box mb={3}>
      <ToggleVisibleTimeModes
        toggleVisibleTimeModes={toggleVisibleTimeModes}
        isVisibleTimeModes={isVisibleTimeModes}
      />
      {isVisibleTimeModes && <TimeModesList />}
    </Box>
  );
};

export default TimeModeSelector;
