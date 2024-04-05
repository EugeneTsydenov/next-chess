import TimeModeSelector from '@/widgets/game-tab-panel/ui/TimeModeSelector';
import { loadingSelector, timeSelector } from '@/entities/game';
import { Box, Paper, Typography } from '@mui/material';
import { useAppSelector } from '@/shared/lib';
import { PlayButton } from '@/features/game';
import { ClockLoader } from '@/shared/ui';
import * as React from 'react';

const GameTabPanel: React.FC = () => {
  const isLoading = useAppSelector(loadingSelector);
  const timeMode = useAppSelector(timeSelector);

  return (
    <Box
      width='100%'
      component={Paper}
      height='100%'
      py={3}
      px={4}
      borderRadius='10px'
      display={isLoading ? 'flex' : 'auto'}
      alignItems='center'
      justifyContent='center'
    >
      {!isLoading ? (
        <>
          <TimeModeSelector />
          <PlayButton gameMode='online' />{' '}
        </>
      ) : (
        <Paper
          sx={{
            bgcolor: 'background.default',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: 2,
            width: '80%',
            p: 2,
          }}
        >
          <ClockLoader />
          <Typography variant='h5' component='span'>
            {timeMode.timeTitle}
          </Typography>
          <Typography sx={{ opacity: '0.5', mb: 5 }}>The game will start soon...</Typography>
          <Typography component='span' sx={{ opacity: '0.5' }}>
            Cancel
          </Typography>
        </Paper>
      )}
    </Box>
  );
};

export default GameTabPanel;
