import { Avatar, Box, Typography } from '@mui/material';
import * as React from 'react';

interface UserDisplayProps {
  avatar: string;
  username: string;
}

const UserDisplay: React.FC<UserDisplayProps> = ({ avatar, username }) => {
  return (
    <Box display='flex' alignItems='center' gap={1}>
      <Avatar alt='Remy Sharp' src={avatar} />
      <Typography component='span'>{username}</Typography>
    </Box>
  );
};

export default UserDisplay;
