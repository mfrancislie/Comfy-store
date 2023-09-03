import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const themes = {
  bumblebee: 'bumblebee',
  business: 'business',
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.bumblebee;
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
};

const initialState = {
  user: { username: 'francis' },
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('login');
    },
    logoutUser: (state) => {
      console.log('logout');
    },
    toggleTheme: (state) => {
      const { bumblebee, business } = themes;
      state.theme = state.theme === bumblebee ? business : bumblebee;
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
