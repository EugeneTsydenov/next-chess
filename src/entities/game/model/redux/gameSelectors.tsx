import { RootState } from '@/app/_model';

export const gameIdSelector = (state: RootState) => state.game.gameId;
export const gameModeSelector = (state: RootState) => state.game.gameMode;
export const turnSelector = (state: RootState) => state.game.turn;
export const timeSelector = (state: RootState) => state.game.time;
export const fenSelector = (state: RootState) => state.game.fen;
export const enemySelector = (state: RootState) => state.game.enemy;
export const userSideSelector = (state: RootState) => state.game.userSide;
export const userRoleSelector = (state: RootState) => state.game.userRole;
export const playersSelector = (state: RootState) => state.game.players;
