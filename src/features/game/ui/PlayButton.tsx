import { Button, Typography } from '@mui/material';
import * as React from 'react';

const PlayButton: React.FC = () => {
  return (
    <Button fullWidth variant='contained' sx={{ p: 1.5, borderRadius: '10px' }}>
      <Typography variant='h4' fontWeight={600}>
        Play
      </Typography>
    </Button>
  );
};

export default PlayButton;
