import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToDo } from '../models/ToDo';

interface ComponentProps {
  todos: ToDo[];
}

export const ItemDescription = ({ todos }: ComponentProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<ToDo>();

  useEffect(() => {
    const todoFromUrl = todos.find(todo => todo.id === id);

    if (todoFromUrl) {
      setTodo(todoFromUrl);
    } else {
      navigate('/404');
    }
  }, [todos, id, navigate]);
  return (
    <div className="container">
      <h1>{todo?.text}</h1>
    </div>
  );
};
