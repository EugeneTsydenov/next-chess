import { createSlice } from '@reduxjs/toolkit';

const initialState: Record<string, null | string> = {
  jwt: null,
};

const jwtSlice = createSlice({
  name: 'jwt',
  initialState,
  reducers: {
    setJwt: (state, action) => {
      state.jwt = action.payload;
    },
  },
});

export const { setJwt } = jwtSlice.actions;
export const jwtReducer = jwtSlice.reducer;
