'use client';

import { createApi } from '@reduxjs/toolkit/query/react';
import { privateQuery } from '@/shared/config';

export const privateApi = createApi({
  reducerPath: 'privateApi',
  baseQuery: privateQuery,
  endpoints: () => ({}),
});
