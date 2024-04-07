import { $axios, baseAxiosConfig } from '@/shared/config/axios/axios';
import { authStore } from '@/shared/model';
import axios from 'axios';

type RefreshResponse = {
  jwt: string;
};

const $privateAxios = axios.create(baseAxiosConfig);

$privateAxios.interceptors.request.use(config => {
  const jwt = authStore.jwt;
  config.headers.Authorization = `Bearer ${jwt}`;
  return config;
});

$privateAxios.interceptors.response.use(
  res => res,
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await $axios.get<RefreshResponse>('/refresh');
        originalRequest.headers.Authorization = `Bearer ${response.data.jwt}`;
        authStore.setJwt(response.data.jwt);
        return axios(originalRequest);
      } catch (e) {
        authStore.setJwt(null);
      }
    }
  },
);

export { $privateAxios };
