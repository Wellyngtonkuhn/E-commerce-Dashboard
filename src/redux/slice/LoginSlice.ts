import { createSlice } from "@reduxjs/toolkit";

type InititalStateLogin = {
  user: {
    name: string;
    email: string;
    access: 'admim' | 'manager' | 'editor';
  };
  token: boolean;
};

const initialState: InititalStateLogin = {
  user: {
    name: "",
    email: "",
    access: "admim",
  },
  token: true,
};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
});

export default LoginSlice.reducer;
