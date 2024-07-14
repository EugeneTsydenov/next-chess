import { BASE_API_URL } from '@/shared/lib';
import axios from 'axios';

export const baseAxiosConfig = {
  withCredentials: true,
  baseURL: `${BASE_API_URL}/api`,
  timeout: 15000,
};

export const $axios = axios.create(baseAxiosConfig);
