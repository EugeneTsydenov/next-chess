import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isStartGame: false,
};

const matchmakingSlice = createSlice({
  name: 'matchmaking',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setStartGame: (state, action) => {
      state.isStartGame = action.payload;
    },
  },
});

export const matchmakingReducer = matchmakingSlice.reducer;
export const { setLoading, setStartGame } = matchmakingSlice.actions;
