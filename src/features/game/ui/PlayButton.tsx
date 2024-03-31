import { Button, Typography } from '@mui/material';
import * as React from 'react';

const PlayButton: React.FC = () => {
  return (
    <Button fullWidth variant='contained' sx={{ p: 2 }}>
      <Typography variant='h4' fontWeight={700}>
        Play
      </Typography>
    </Button>
  );
};

export default PlayButton;
