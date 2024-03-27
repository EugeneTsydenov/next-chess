import { privateApi } from '@/shared/api';

export const userApi = privateApi.injectEndpoints({
  endpoints: build => ({
    user: build.query({
      query: (jwt: string) => {
        return {
          url: '/user',
          method: 'get',
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        };
      },
    }),
  }),
});

export const { useUserQuery } = userApi;
