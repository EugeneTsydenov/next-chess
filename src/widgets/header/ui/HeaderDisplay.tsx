'use client';

import { refreshResponseSchema } from '@/entities/auth/model/schemas/refreshResponseSchema';
import { useAppDispatch, useAppSelector, useWindow } from '@/shared/lib';
import { useRefreshQuery } from '@/entities/auth/api/authApi';
import { setJwt } from '@/shared/model/jwt/jwtSlice';
import { Button, Skeleton } from '@mui/material';
import { UserDisplay } from '@/entities/user';
import { jwtSelector } from '@/shared/model';
import { Link } from '@/shared/ui';
import * as React from 'react';

const HeaderDisplay: React.FC = () => {
  const isWindow = useWindow();
  const jwt = useAppSelector(jwtSelector);
  const { data, isSuccess, isError, isLoading } = useRefreshQuery(null);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (isSuccess) {
      const validatedData = refreshResponseSchema.parse(data);
      dispatch(setJwt(validatedData.jwt));
    }
  }, [data, dispatch, isSuccess]);

  if (!isWindow || isLoading) {
    return <Skeleton width={50} height={30} />;
  }

  if (!jwt) {
    return (
      <Link href='/login'>
        <Button variant='contained'>Login</Button>
      </Link>
    );
  }

  return <UserDisplay jwt={jwt} />;
};

export default HeaderDisplay;
