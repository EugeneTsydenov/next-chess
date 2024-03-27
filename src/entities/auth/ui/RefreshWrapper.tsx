'use client';

import { refreshResponseSchema } from '@/entities/auth/model/schemas/refreshResponseSchema';
import { useRefreshQuery } from '@/entities/auth/api/authApi';
import { useAppDispatch } from '@/shared/lib';
import { setJwt } from '@/shared/model';
import * as React from 'react';

const RefreshWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data, isSuccess } = useRefreshQuery(null);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (isSuccess) {
      const validatedData = refreshResponseSchema.parse(data);
      dispatch(setJwt(validatedData.jwt));
    }
  }, [data, dispatch, isSuccess]);

  return <>{children}</>;
};

export default RefreshWrapper;
