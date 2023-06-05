import { Theme, Themes } from '../models/theme';

const lightTheme: Theme = {
  name: 'light',
  colors: {
    headerBackground: '#4682b4',
    bodyBackground: '#edf0f1',
  },
};

const darkTheme: Theme = {
  name: 'dark',
  colors: {
    headerBackground: '#030508',
    bodyBackground: '#787878',
  },
};

export const themes: Themes = Object.freeze({
  light: lightTheme,
  dark: darkTheme,
});
