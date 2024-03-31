import { timeModes } from '@/widgets/game-tab-panel/lib/data/timeModes';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, MenuList, Typography } from '@mui/material';
import { TimeModeItem } from '@/features/game';
import Image from 'next/image';
import * as React from 'react';

const TimeModesList: React.FC = () => {
  return (
    <MenuList sx={{ mt: 2 }}>
      {timeModes.map((timeMode, i) => {
        return (
          <Box display='flex' flexDirection='column' gap={1} key={i}>
            <Box display='flex' alignItems='center' gap={1}>
              {timeMode.modeIcon === 'MuiClock' ? (
                <AccessTimeIcon fontSize='medium' color='primary' />
              ) : (
                <Image src={timeMode.modeIcon} alt='icon' width={24} />
              )}
              <Typography variant='h5'>{timeMode.modeTitle}</Typography>
            </Box>
            <MenuList
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                gap: 1,
                mb: 3,
              }}
            >
              {timeMode.times.map((time, i) => {
                return <TimeModeItem time={time} key={i} />;
              })}
            </MenuList>
          </Box>
        );
      })}
    </MenuList>
  );
};

export default TimeModesList;
