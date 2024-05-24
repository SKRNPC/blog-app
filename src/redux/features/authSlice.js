import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) ?? false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("isAuthenticated", JSON.stringify(action.payload));
      state.isAuthenticated = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("postId");
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
