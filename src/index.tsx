import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import { store } from './store';
import { router } from './router';
import { GlobalStyle } from './styles/GlobalStyle';

import 'react-toastify/dist/ReactToastify.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
          <title>React ToDo List</title>
        </Helmet>
        <GlobalStyle />

        <RouterProvider router={router} />

        <ToastContainer />
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
);
