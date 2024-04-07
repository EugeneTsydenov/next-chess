'use client';

import { userResponseSchema } from '@/entities/user/model/schemas/userResponseSchema';
import { AvatarPropsVariantOverrides, Skeleton } from '@mui/material';
import { useUser } from '@/entities/user/lib/hooks/useUser';
import { OverridableStringUnion } from '@mui/types';
import { UserDisplay } from '@/shared/ui';
import * as React from 'react';

interface UserTagProps {
  avatarVariant:
    | OverridableStringUnion<'circular' | 'rounded' | 'square', AvatarPropsVariantOverrides>
    | undefined;
}

const UserTag: React.FC<UserTagProps> = ({ avatarVariant }) => {
  const { data, isLoading, isSuccess } = useUser();

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
