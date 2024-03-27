import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material';
import * as React from 'react';

interface UserDisplayProps {
  avatar: string;
  username: string;
}

const UserDisplay: React.FC<UserDisplayProps> = ({ avatar, username }) => {
  return (
    <Box display='flex' alignItems='center' gap={1}>
      <Tooltip title='Open settings'>
        <IconButton sx={{ p: 0 }}>
          <Avatar alt='Remy Sharp' src={avatar} />
        </IconButton>
      </Tooltip>
      <Typography component='span'>{username}</Typography>
    </Box>
  );
};

export default UserDisplay;
