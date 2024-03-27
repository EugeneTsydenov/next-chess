'use client';

import { useAppSelector, useWindow } from '@/shared/lib';
import { jwtSelector } from '@/shared/model';
import { FullPageLoader } from '@/shared/ui';
import { useRouter } from 'next/navigation';
import * as React from 'react';

const UnauthenticatedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const jwt = useAppSelector(jwtSelector);
  const isWindow = useWindow();

  if (isWindow && jwt) {
    router.push('/');
  }

  return (
    <>
      {isWindow ? '' : <FullPageLoader />}
      {children}
    </>
  );
};

export default UnauthenticatedRoute;
