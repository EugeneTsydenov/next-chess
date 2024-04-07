'use client';

import { refreshResponseSchema } from '@/entities/auth/model/schemas/refreshResponseSchema';
import { useRefresh } from '@/entities/auth/lib/hooks/useRefresh';
import { usePathname, useRouter } from 'next/navigation';
import { FullPageLoader } from '@/shared/ui';
import { authStore } from '@/shared/model';
import { useWindow } from '@/shared/lib';
import * as React from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const authPrivateRoutes = ['/play/online'];
const notAuthPrivateRoutes = ['/login', '/registration'];

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isWindow = useWindow();
  const { data, isSuccess, isLoading } = useRefresh();

  const isAuthRoute = authPrivateRoutes.includes(pathname) || pathname.includes('/game');
  const isNotAuthRoute = notAuthPrivateRoutes.includes(pathname);

  React.useEffect(() => {
    if (isSuccess) {
      const validatedData = refreshResponseSchema.parse(data);
      authStore.setJwt(validatedData.jwt);
    }
  }, [data, isSuccess]);

  if (isAuthRoute && isWindow && !isLoading && !data?.jwt) {
    router.push('/');
  }

  if (isNotAuthRoute && isWindow && !isLoading && data?.jwt) {
    router.push('/');
  }

  return (
    <>
      {isNotAuthRoute && (!isWindow || isLoading || data?.jwt) ? (
        <FullPageLoader zIndex={100000} />
      ) : (
        ''
      )}
      {isAuthRoute && (!isWindow || isLoading || !data?.jwt) ? <FullPageLoader zIndex={1} /> : ''}
      {children}
    </>
  );
};

export default ProtectedRoute;
