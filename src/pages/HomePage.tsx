import { ListItem } from '../components/ListItem/ListItem';
import { ToDo } from '../models/ToDo';

export const HomePage = ({ todos }: { todos: ToDo[] }) => {
  return (
    <ul className="container">
      {todos.map((todo: ToDo) => {
        return <ListItem key={todo.id} todo={todo} tag="li" />;
      })}
    </ul>
  );
};
