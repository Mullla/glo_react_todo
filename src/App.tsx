import './App.css';
import { ToDoListPage } from './pages/ToDoListPage';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

export const App = () => {
  return (
    <>
      <ToDoListPage />
      <ToastContainer />
    </>
  );
};
