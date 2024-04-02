'use client';

import { userResponseSchema } from '@/entities/user/model/schemas/userResponseSchema';
import { AvatarPropsVariantOverrides, Skeleton } from '@mui/material';
import { useUserQuery } from '@/entities/user/api/userApi';
import { OverridableStringUnion } from '@mui/types';
import { UserDisplay } from '@/shared/ui';
import * as React from 'react';

interface UserTagProps {
  jwt: string;
  avatarVariant:
    | OverridableStringUnion<'circular' | 'rounded' | 'square', AvatarPropsVariantOverrides>
    | undefined;
}

const UserTag: React.FC<UserTagProps> = ({ jwt, avatarVariant }) => {
  const { data, isLoading, isSuccess } = useUserQuery(jwt);

  if (isLoading) {
    return (
      <>
        <Skeleton animation='wave' variant='circular' width={40} height={40} />
        <Skeleton width={50} height={25} />
      </>
    );
  }

  if (isSuccess) {
    const validatedData = userResponseSchema.parse(data);
    return (
      <UserDisplay
        username={validatedData?.username}
        avatar={validatedData?.avatar}
        avatarVariant={avatarVariant}
      />
    );
  }
};

export default UserTag;
