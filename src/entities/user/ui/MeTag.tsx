'use client';

import { userResponseSchema } from '@/entities/user/model/schemas/userResponseSchema';
import { AvatarPropsVariantOverrides, Skeleton } from '@mui/material';
import { useMe } from '@/entities/user/lib/hooks/useMe';
import { OverridableStringUnion } from '@mui/types';
import { UserDisplay } from '@/shared/ui';
import * as React from 'react';

interface MeTagProps {
  avatarVariant:
    | OverridableStringUnion<'circular' | 'rounded' | 'square', AvatarPropsVariantOverrides>
    | undefined;
}

const MeTag: React.FC<MeTagProps> = ({ avatarVariant }) => {
  const { data, isLoading, isSuccess } = useMe();

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

export default MeTag;
