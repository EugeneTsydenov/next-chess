'use client';

import { refreshResponseSchema } from '@/entities/auth/model/schemas/refreshResponseSchema';
import { useRefreshQuery } from '@/entities/auth/api/authApi';
import { useAppDispatch, useWindow } from '@/shared/lib';
import { FullPageLoader } from '@/shared/ui';
import { useRouter } from 'next/navigation';
import { setJwt } from '@/shared/model';
import * as React from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  permission: 'all' | 'authUser' | 'notAuthUser';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, permission }) => {
  const router = useRouter();
  const isWindow = useWindow();
  const { data, isSuccess, isLoading } = useRefreshQuery(null);
  console.log(data);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (isSuccess) {
      const validatedData = refreshResponseSchema.parse(data);
      dispatch(setJwt(validatedData.jwt));
    }
  }, [data, dispatch, isSuccess]);

  if (permission === 'authUser' && isWindow && !isLoading && !data?.jwt) {
    router.push('/');
  }

  if (permission === 'notAuthUser' && isWindow && !isLoading && data?.jwt) {
    router.push('/');
  }

  return (
    <>
      {permission === 'notAuthUser' && (!isWindow || isLoading || data?.jwt) ? (
        <FullPageLoader zIndex={100000} />
      ) : (
        ''
      )}
      {permission === 'authUser' && (!isWindow || isLoading || !data?.jwt) ? (
        <FullPageLoader zIndex={1} />
      ) : (
        ''
      )}
      {children}
    </>
  );
};

export default ProtectedRoute;
