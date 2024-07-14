import { Avatar, AvatarPropsVariantOverrides, Box, Typography } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import * as React from 'react';

interface UserDisplayProps {
  avatar?: string;
  username: string;
  avatarVariant:
    | OverridableStringUnion<'circular' | 'rounded' | 'square', AvatarPropsVariantOverrides>
    | undefined;
}

const UserDisplay: React.FC<UserDisplayProps> = ({ avatar, username, avatarVariant }) => {
  return (
    <Box display='flex' alignItems='center' gap={1}>
      <Avatar alt='Remy Sharp' src={avatar} variant={avatarVariant} />
      <Typography component='span' variant='h5'>
        {username}
      </Typography>
    </Box>
  );
};

export default UserDisplay;
