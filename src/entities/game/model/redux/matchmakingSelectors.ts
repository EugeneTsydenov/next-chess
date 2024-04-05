import { RootState } from '@/app/_model';

export const loadingSelector = (state: RootState) => state.matchmaking.isLoading;
export const startGameSelector = (state: RootState) => state.matchmaking.isStartGame;
