import { Http } from '@/shared/lib';

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL || 'http://localhost:52718/api';

export const api = new Http({ baseUrl: baseUrl, withCredentials: true });
