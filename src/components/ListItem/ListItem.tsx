import { Link } from 'react-router-dom';
import { ToDo } from '../../models/ToDo';
import classes from './ListItem.module.scss';

interface ComponentProps {
  todo: ToDo;
  tag: string;
}

export const ListItem = ({ todo, tag }: ComponentProps) => {
  const Tag = (tag ? tag : 'div') as keyof JSX.IntrinsicElements;

  return (
    <Tag>
      <Link
        to={`/list/${todo.id}`}
        className={`${classes.link} ${
          todo.isDone ? classes.done : classes.notDone
        }`}>
        {todo.text}
      </Link>
    </Tag>
  );
};
