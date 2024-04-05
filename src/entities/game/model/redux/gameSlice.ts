import { createSlice } from '@reduxjs/toolkit';

interface IGameState {
  gameId: string | null;
  gameMode: string | null;
  turn: 'w' | 'b';
  time: {
    timeTitle: string;
    seconds: number;
  };
  fen: string;
  enemy: string | null;
  players: {
    player1: {
      userId: number;
      socketId: string;
      colorSide: 'w' | 'b';
    };
    player2: {
      userId: number;
      socketId: string;
      colorSide: 'w' | 'b';
    };
  } | null;
  userSide: 'w' | 'b';
  userRole: 'watcher' | 'player';
}

const initialState: IGameState = {
  gameId: null,
  gameMode: null,
  turn: 'w',
  time: {
    timeTitle: '15 | 10',
    seconds: 900,
  },
  fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
  enemy: null,
  userSide: 'w',
  players: null,
  userRole: 'watcher',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameId: (state, action) => {
      state.gameId = action.payload;
    },
    setGameMode: (state, action) => {
      state.gameMode = action.payload;
    },
    setTurn: (state, action) => {
      state.turn = action.payload;
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
      state.userSide = action.payload;
    },
    setUserRole: (state, action) => {
      state.userRole = action.payload;
    },
    setPlayers: (state, action) => {
      state.players = action.payload;
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const {
  setGameId,
  setGameMode,
  setTurn,
  setTime,
  setFen,
  setEnemy,
  setUserSide,
  setUserRole,
  setPlayers,
} = gameSlice.actions;
