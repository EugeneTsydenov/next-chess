'use client';

import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/shared/config';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
  refetchOnFocus: false,
  refetchOnMountOrArgChange: false,
  refetchOnReconnect: false,
  endpoints: build => ({
    refresh: build.query({
      query: () => {
        return {
          method: 'get',
          url: '/refresh',
        };
      },
      extraOptions: { maxRetries: 0 },
    }),
  }),
});

export const { useRefreshQuery } = authApi;
