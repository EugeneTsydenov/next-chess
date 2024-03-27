import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query';
// @ts-ignore
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { setJwt } from '@/shared/model/jwt/jwtSlice';
import { baseQuery } from '@/shared/config';

type RefreshResponse = {
  jwt: string;
};

export const privateQuery: BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const refreshResult: QueryReturnValue<
      RefreshResponse,
      FetchBaseQueryError,
      FetchBaseQueryMeta
    > = await baseQuery('/refresh', api, extraOptions);
    if (refreshResult.data?.jwt) {
      const newArgs: FetchArgs = {
        ...args,
        headers: { Authorization: `Bearer ${refreshResult.data.jwt}` },
      };
      result = await baseQuery(newArgs, api, extraOptions);
      api.dispatch(setJwt(refreshResult.data.jwt));
    } else {
      api.dispatch(setJwt(null));
    }
  }
  return result;
};
