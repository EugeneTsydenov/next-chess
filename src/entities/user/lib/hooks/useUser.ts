import { userResponseType } from '@/entities/user/model/schemas/userResponseSchema';
import { UserApi } from '@/entities/user/api/userApi';
import { useQuery } from '@tanstack/react-query';

export function useUser(id: string) {
  return useQuery<userResponseType, Error>({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await UserApi.getUserById(id);
      return response.data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
}
