import { useSelector } from 'react-redux';
import { ListItem } from '../components/ListItem/ListItem';
import { ToDo } from '../models/ToDo';
import { RootState } from '../store';

export const ViewList = () => {
  const todoList = useSelector((state: RootState) => state.todoList.todos);

  return (
    <ul className="container">
      {todoList.map((todo: ToDo) => {
        return <ListItem key={todo.id} todo={todo} tag="li" />;
      })}
    </ul>
  );
};
