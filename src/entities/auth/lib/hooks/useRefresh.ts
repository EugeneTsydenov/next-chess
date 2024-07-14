import { refreshResponseType } from '@/entities/auth/model/schemas/refreshResponseSchema';
import { AuthApi } from '@/entities/auth/api/authApi';
import { useQuery } from '@tanstack/react-query';

export function useRefresh() {
  return useQuery<refreshResponseType, Error>({
    queryKey: ['refresh'],
    queryFn: async () => {
      const response = await AuthApi.refresh();
      return response.data;
    },
    refetchOnWindowFocus: false,
    refetchInterval: false,
    retry: false,
  });
}
