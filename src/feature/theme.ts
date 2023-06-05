import { createSlice } from '@reduxjs/toolkit';
import { Theme, ThemeNameEnum, ThemeNotifyEnum } from '../models/theme';
import { themes } from '../styles/themes';
import { Theme as ThemeNotify } from 'react-toastify';

export interface ThemeState {
  theme: Theme;
  themeNotify: ThemeNotify;
}

const initialState: ThemeState = {
  theme: themes[ThemeNameEnum.LIGHT],
  themeNotify: ThemeNotifyEnum.LIGHT,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleThemeAction: state => {
      if (state.theme.name === ThemeNameEnum.LIGHT) {
        state.themeNotify = ThemeNotifyEnum.DARK;
        state.theme = themes[ThemeNameEnum.DARK];
      } else {
        state.theme = themes[ThemeNameEnum.LIGHT];
        state.themeNotify = ThemeNotifyEnum.LIGHT;
      }
    },
  },
});

export const { toggleThemeAction } = themeSlice.actions;

export default themeSlice.reducer;
