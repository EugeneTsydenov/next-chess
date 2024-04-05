import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { BASE_API_URL } from '@/shared/lib';

export const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_API_URL}/api`,
  credentials: 'include',
  timeout: 3000,
});
