import { timeSelector } from '@/entities/game/model/redux/gameSelectors';
import { formatterTime } from '@/entities/game/lib/formatterTime';
import { Box, Typography } from '@mui/material';
import { useAppSelector } from '@/shared/lib';
import * as React from 'react';

const WhiteTimer: React.FC = () => {
  const time = useAppSelector(timeSelector);
  const formattedTime = formatterTime(time.seconds);

  return (
    <Box py={1} pr={2} pl={8} bgcolor='primary.dark' borderRadius='4px'>
      <Typography variant='h4' component='span' fontWeight={600}>
        {formattedTime}
      </Typography>
    </Box>
  );
};

export default WhiteTimer;
