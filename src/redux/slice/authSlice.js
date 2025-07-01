import { createSlice } from "@reduxjs/toolkit";

const authSlide = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isLoggedIn: null,
  },
  reducers: {
    login: (state, action) => {
      (state.user = action.payload.user),
        (state.token = action.payload.token),
        (state.isLoggedIn = true);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlide.actions;
export default authSlide.reducer;
