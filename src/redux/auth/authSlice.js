import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./operations";


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null
    },
    token: null,
    isLoggedIn: false,
    isErfreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    })
  }
});

export const authReduser = authSlice.reducer;