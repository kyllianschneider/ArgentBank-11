import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    userConnexion: false,
    error: null,

    firstName: "",
    lastName: "",
    userName: "",
    email: "",
  },

  reducers: {
    login(state, action) {
      state.userConnexion = true;
      state.token = action.payload.token;
    },

    logout(state) {
      state.userConnexion = false;
      state.token = null;
      state.firstName = "";
      state.lastName = "";
      state.userName = "";
      localStorage.removeItem("token");
    },

    userError: (state, action) => {
      state.error = action.payload;
    },

    userProfile: (state, action) => {
      state.firstName = action.payload.body.firstName;
      state.lastName = action.payload.body.lastName;
      state.userName = action.payload.body.userName;
      state.email = action.payload.body.email;
    },

    updateUsername: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { login, logout, userError, userProfile, updateUsername } =
  userSlice.actions;

export default userSlice.reducer;
