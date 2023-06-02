import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Form } from '../components/Form/Form';
import { ToDoList } from '../components/ToDoList/ToDoList';

import { ToDo } from '../models/ToDo';
import { RootState } from '../store';
import { createAction, deleteAction, updateAction } from '../feature/todoList';

const CLOSE_DELAY = 2000;

export const ToDoListPage = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);
  const dispatch = useDispatch();

  const createToDo = (text: string) => {
    dispatch(createAction(text));
    toast(`Задача «${text}» создана`, { autoClose: CLOSE_DELAY });
  };

  const updateToDo = (toDoItem: ToDo) => {
    dispatch(updateAction(toDoItem));
    toast.info(
      `Задача «${toDoItem.text}» помечена как ${
        toDoItem.isDone ? '' : 'не'
      }завершенная`,
      { autoClose: CLOSE_DELAY }
    );
  };

  const deleteToDo = (toDoItem: ToDo) => {
    dispatch(deleteAction(toDoItem))
    toast.error(`Задача «${toDoItem.text}» была удалена из списка задач`, {
      autoClose: CLOSE_DELAY,
    });
  };

  return (
    <>
      <Form createToDo={createToDo} />
      <ToDoList
        todos={todoList}
        updateToDo={updateToDo}
        deleteToDo={deleteToDo}
      />
    </>
  );
};
