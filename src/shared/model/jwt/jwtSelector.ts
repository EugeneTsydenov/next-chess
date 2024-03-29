import { RootState } from '@/app/_model';

export const jwtSelector = (state: RootState) => state.jwt.jwt;
