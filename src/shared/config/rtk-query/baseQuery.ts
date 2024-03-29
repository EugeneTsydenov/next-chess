import { fetchBaseQuery } from '@reduxjs/toolkit/query';

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_API_URL,
  credentials: 'include',
  timeout: 3000,
});
