import { RootState } from '@/app/_model';

export const searchGameSelector = (state: RootState) => state.matchmaking.isSearchGame;
export const confirmedGameSelector = (state: RootState) => state.matchmaking.isConfirmedGame;
export const waitingEnemySelector = (state: RootState) => state.matchmaking.isWaitingEnemy;
export const startGameSelector = (state: RootState) => state.matchmaking.isStartGame;
