import { userResponseSchema } from '@/entities/user/model/schemas/userResponseSchema';
import { useUserQuery } from '@/entities/user/api/userApi';
import { UserDisplay } from '@/shared/ui';
import { Skeleton } from '@mui/material';
import * as React from 'react';

interface UserTagProps {
  jwt: string;
}

const UserTag: React.FC<UserTagProps> = ({ jwt }) => {
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
    return <UserDisplay username={validatedData?.username} avatar={validatedData?.avatar} />;
  }
};

export default UserTag;
