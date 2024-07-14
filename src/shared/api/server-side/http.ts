import { BASE_API_URL, Http } from '@/shared/lib';

export const baseHttpConfig = { baseUrl: `${BASE_API_URL}/api`, withCredentials: true };

export const http = new Http(baseHttpConfig);
