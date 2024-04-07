import { userResponseType } from '@/entities/user/model/schemas/userResponseSchema';
import { UserApi } from '@/entities/user/api/userApi';
import { useQuery } from '@tanstack/react-query';

export function useUser() {
  return useQuery<userResponseType, Error>({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await UserApi.getUser();
      return response.data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}
