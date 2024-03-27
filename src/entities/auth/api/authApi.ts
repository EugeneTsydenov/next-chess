import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/shared/config';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
  endpoints: build => ({
    refresh: build.query({
      query: () => {
        return {
          method: 'get',
          url: '/refresh',
        };
      },
    }),
  }),
});

export const { useRefreshQuery } = authApi;
