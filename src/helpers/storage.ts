import { RootState } from '../store';

export const saveToLocalStorage = (state: RootState) => {
  try {
    const appState = JSON.stringify(state);
    localStorage.setItem('appState', appState);
  } catch (error) {
    console.warn(error);
  }
};

export const loadFromLocalStorage = () => {
  try {
    const appState = localStorage.getItem('appState');

    if (!appState) return;

    return JSON.parse(appState);
  } catch (error) {
    console.warn(error);
    return;
  }
};
