import { createSlice } from '@reduxjs/toolkit';

interface GameState {
  gameMode: string | null;
  turn: 'w' | 'b';
  time: {
    timeTitle: string;
    seconds: number;
  };
  fen: string;
  enemy: string | null;
  userSide: 'w' | 'b';
  userRole: 'watcher' | 'player';
}

const initialState: GameState = {
  gameMode: null,
  turn: 'w',
  time: {
    timeTitle: '15 | 10',
    seconds: 900,
  },
  fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
  enemy: null,
  userSide: 'w',
  userRole: 'watcher',
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
    setUserSide: (state, action) => {
      state.enemy = action.payload;
    },
    setUserRole: (state, action) => {
      state.userRole = action.payload;
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const { setGameMode, toggleTurn, setTime, setFen, setEnemy, setUserSide, setUserRole } =
  gameSlice.actions;
