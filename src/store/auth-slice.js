import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false, expiredAt: "", name: "", balance: 0, isParent: undefined },
  reducers: {
    login(state, action) {
      const authInformation = action.payload;
      state.isAuthenticated = true;
      state.expiredAt = authInformation.expiredAt;
      state.name = authInformation.name;
      state.balance = authInformation.balance;
      state.isParent = authInformation.isParent;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.expiredAt = "";
      state.name = "";
      state.balance = 0;
      state.isParent = undefined;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
