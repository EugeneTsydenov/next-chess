import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, Typography } from '@mui/material';
import { gameStore } from '@/entities/game';
import * as React from 'react';
interface ToggleTimeModesBtnProps {
  toggleVisibleTimeModes: () => void;
  isVisibleTimeModes: boolean;
}

const ToggleVisibleTimeModes: React.FC<ToggleTimeModesBtnProps> = ({
  toggleVisibleTimeModes,
  isVisibleTimeModes,
}) => {
  return (
    <Box
      onClick={toggleVisibleTimeModes}
      bgcolor='background.default'
      borderRadius='5px'
      p={2}
      display='flex'
      alignItems='center'
      justifyContent='center'
      gap={2}
      position='relative'
    >
      <AccessTimeIcon fontSize='large' color='primary' />
      <Typography variant='h4' component='span' fontWeight={600}>
        {gameStore.time.timeTitle}
      </Typography>
      {!isVisibleTimeModes && (
        <KeyboardArrowDownIcon sx={{ position: 'absolute', right: '10px' }} fontSize='large' />
      )}
      {isVisibleTimeModes && (
        <KeyboardArrowUpIcon sx={{ position: 'absolute', right: '10px' }} fontSize='large' />
      )}
    </Box>
  );
};

export default ToggleVisibleTimeModes;
