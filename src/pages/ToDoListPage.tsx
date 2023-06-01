import { useId, useState } from 'react';
import { Form } from '../components/Form/Form';
import { ToDoList } from '../components/ToDoList/ToDoList';
import { ToDo } from '../models/ToDo';
import { todos as TODO_LIST } from '../helpers/constants';
import { toast } from 'react-toastify';

const CLOSE_DELAY = 2000;

export const ToDoListPage = () => {
  const [todos, setTodos] = useState<ToDo[]>(TODO_LIST);
  const id = useId();

  const createToDo = (text: string) => {
    const newTodo: ToDo = {
      isDone: false,
      id,
      text,
    };

    setTodos([...todos, newTodo]);
    toast(`Задача «${text}» создана`, { autoClose: CLOSE_DELAY });
  };

  const updateToDo = (toDoItem: ToDo) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === toDoItem.id) {
        todo.isDone = !todo.isDone;
      }

      return todo;
    });

    setTodos(updatedTodos);
    toast.info(
      `Задача «${toDoItem.text}» помечена как ${
        toDoItem.isDone ? '' : 'не'
      }завершенная`,
      { autoClose: CLOSE_DELAY }
    );
  };

  const deleteToDo = (toDoItem: ToDo) => {
    const updatedTodos = todos.filter(todo => todo.id !== toDoItem.id);

    setTodos(updatedTodos);
    toast.error(`Задача «${toDoItem.text}» была удалена из списка задач`, {
      autoClose: CLOSE_DELAY,
    });
  };

  return (
    <>
      <Form createToDo={createToDo} />
      <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
    </>
  );
};
