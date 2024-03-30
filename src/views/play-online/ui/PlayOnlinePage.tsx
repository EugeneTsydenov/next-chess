import { Chessboard } from '@/shared/ui';
import { Box } from '@mui/material';
import * as React from 'react';

const PlayOnlinePage: React.FC = () => {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' width='100%' height='100vh'>
      <Box display='flex' alignItems='center' justifyContent='center' minHeight='calc(100vh-70px)'>
        <Chessboard boardWidth={560} />
      </Box>
    </Box>
  );
};

export default PlayOnlinePage;
