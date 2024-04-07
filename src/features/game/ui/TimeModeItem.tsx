import { MenuItem, Typography } from '@mui/material';
import { gameStore } from '@/entities/game';
import * as React from 'react';

export interface TimeModeProps {
  time: {
    timeTitle: string;
    seconds: number;
  };
  toggleVisibleTimeModes: () => void;
}

const TimeModeItem: React.FC<TimeModeProps> = ({ time, toggleVisibleTimeModes }) => {
  function selectTimeMode() {
    toggleVisibleTimeModes();
    gameStore.setTime(time);
  }

  return (
    <MenuItem
      sx={{
        p: 2,
        bgcolor: 'background.default',
        width: '100%',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={selectTimeMode}
    >
      <Typography variant='h5' component='span' fontWeight={500}>
        {time.timeTitle}
      </Typography>
    </MenuItem>
  );
};

export default TimeModeItem;
