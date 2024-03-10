import axios from 'axios';

export const $axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  withCredentials: true,
  timeout: 1500,
});
