import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'https:node-movie-api-rn.herokuapp.com/register';

const userStore = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    email: null,
    password: null,
    confirmPassword: null,
  },
  reducers: {
    setEmail: (state, actions) => {
      state.email = actions.payload;
    },
    setPassword: (state, actions) => {
      state.password = actions.payload;
    },
    signIn: (state, actions) => {},
    signUp: async (state, actions) => {
      await axios
        .post(`${API}/register`, {email, password})
        .then(response => console.log(response));
    },
  },
});

export const {signIn, signUp} = userStore.actions;
export default userStore.reducer;

/* export const isLoggedIn = state => state.user.isLoggedIn;
export const email = state => state.user.email;
export const password = state => state.user.password;
export const confirmPassword = state => state.user.confirmPassword; */
