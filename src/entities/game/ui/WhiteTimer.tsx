import { formatterTime } from '@/entities/game/lib/formatterTime';
import { Box, Paper, Typography } from '@mui/material';
import { gameStore } from '@/entities/game';
import { observer } from 'mobx-react-lite';
import * as React from 'react';

const WhiteTimer: React.FC = observer(() => {
  const formattedTime = formatterTime(gameStore.time.seconds);

  return (
    <Box
      py={1}
      pr={2}
      pl={8}
      component={Paper}
      bgcolor={gameStore.turn === 'w' ? 'primary.dark' : 'auto'}
    >
      <Typography variant='h4' component='span' fontWeight={600}>
        {formattedTime}
      </Typography>
    </Box>
  );
});

export default WhiteTimer;
