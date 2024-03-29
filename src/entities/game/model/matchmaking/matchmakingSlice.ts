import { createSlice } from '@reduxjs/toolkit';

const initialState: Record<string, any> = {
  isSearchGame: true,
  isConfirmedGame: false,
  isWaitingEnemy: false,
  isStartGame: false,
};

const matchmakingSlice = createSlice({
  name: 'matchmaking',
  initialState,
  reducers: {
    setSearchGame(state, action) {
      state.isSearchGame = action.payload;
    },
    setConfirmedGame(state, action) {
      state.isConfirmedGame = action.payload;
    },
    setWaitingGame(state, action) {
      state.isWaitingEnemy = action.payload;
    },
    setStartGame(state, action) {
      state.isStartGame = action.payload;
    },
  },
});

export const { setSearchGame, setConfirmedGame, setWaitingGame, setStartGame } =
  matchmakingSlice.actions;
export const matchmakingReducer = matchmakingSlice.reducer;
