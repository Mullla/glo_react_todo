import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/404';
import { ToDoListPage } from './pages/ToDoListPage';
import { ItemDescription } from './pages/ItemDescription';

import 'react-toastify/dist/ReactToastify.min.css';
import { todos } from './helpers/constants';
import { Layout } from './layouts/Layout';
import { Helmet } from 'react-helmet-async';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <HomePage todos={todos} />,
        },
        {
          path: '/todo',
          element: <ToDoListPage />,
        },
        {
          path: '/list/:id',
          element: <ItemDescription todos={todos} />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
  { basename: '/glo_react-todo' }
);

export const App = () => {
  return (
    <>
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

      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};
