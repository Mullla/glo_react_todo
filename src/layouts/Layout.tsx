import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { Header } from '../components/Header/Header';

import { RootState } from '../store';
import { GlobalStyle } from '../styles/GlobalStyle';

export const Layout = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const notifyTheme = useSelector(
    (state: RootState) => state.theme.themeNotify
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <div className="wrapper">
        <Header />
        <Outlet></Outlet>
      </div>

      <ToastContainer theme={notifyTheme} />
    </ThemeProvider>
  );
};
