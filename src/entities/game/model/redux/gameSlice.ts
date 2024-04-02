import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameMode: null,
  turn: 'w',
  time: {
    timeTitle: '15 | 10',
    seconds: 900,
  },
  fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
  enemy: null,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameMode: (state, action) => {
      state.gameMode = action.payload;
    },
    toggleTurn: state => {
      state.turn = state.turn === 'w' ? 'b' : 'w';
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    setFen: (state, action) => {
      state.fen = action.payload;
    },
    setEnemy: (state, action) => {
      state.enemy = action.payload;
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const { setGameMode, toggleTurn, setTime, setFen, setEnemy } = gameSlice.actions;
