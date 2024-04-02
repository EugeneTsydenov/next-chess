import { MenuItem } from '@mui/material';
import * as React from 'react';

export interface TimeModeProps {
  time: {
    timeTitle: string;
    seconds: number;
  };
  toggleVisibleTimeModes: () => void;
}

const TimeModeItem: React.FC<TimeModeProps> = ({ time, toggleVisibleTimeModes }) => {
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
    >
      {time.timeTitle}
    </MenuItem>
  );
};

export default TimeModeItem;
