export interface Theme {
  name: string;
  colors: {
    headerBackground: string;
    bodyBackground: string;
  };
}

export interface Themes {
  [key: string]: Theme;
}

export enum ThemeNameEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum ThemeNotifyEnum {
  LIGHT = 'light',
  DARK = 'dark',
  COLORED = 'colored',
}
