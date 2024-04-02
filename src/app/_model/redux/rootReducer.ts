import { combineSlices } from '@reduxjs/toolkit';
import { gameReducer } from '@/entities/game';
import { jwtReducer } from '@/shared/model';
import { authApi } from '@/entities/auth';
import { privateApi } from '@/shared/api';

export const rootReducer = combineSlices({
  [privateApi.reducerPath]: privateApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  jwt: jwtReducer,
  game: gameReducer,
});
