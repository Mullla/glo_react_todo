import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToDo } from '../models/ToDo';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const ViewListItem = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);

  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<ToDo>();

  useEffect(() => {
    const todoFromUrl = todoList.find(todo => todo.id === id);

    if (todoFromUrl) {
      setTodo(todoFromUrl);
    } else {
      navigate('/404');
    }
  }, [todoList, id, navigate]);

  return (
    <div className="container">
      <h1>{todo?.text}</h1>
    </div>
  );
};
