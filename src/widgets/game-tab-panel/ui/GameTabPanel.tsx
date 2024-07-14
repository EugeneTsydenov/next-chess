import TimeModeSelector from '@/widgets/game-tab-panel/ui/TimeModeSelector';
import { Box, Button, Paper, Typography } from '@mui/material';
import { gameStore, matchmakingStore } from '@/entities/game';
import { PlayButton } from '@/features/game';
import { observer } from 'mobx-react-lite';
import { ClockLoader } from '@/shared/ui';
import * as React from 'react';

const GameTabPanel: React.FC = observer(() => {
  return (
    <Box
      width='100%'
      component={Paper}
      height='100%'
      py={3}
      px={4}
      borderRadius='10px'
      display={matchmakingStore.isLoading ? 'flex' : 'auto'}
      alignItems='center'
      justifyContent='center'
    >
      {!matchmakingStore.isLoading ? (
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
            {gameStore.time.timeTitle}
          </Typography>
          <Typography sx={{ opacity: '0.5', mb: 5 }}>The game will start soon...</Typography>
          <Typography component='span' sx={{ opacity: '0.5' }}>
            Cancel
          </Typography>
        </Paper>
      )}
    </Box>
  );
});

export default GameTabPanel;
