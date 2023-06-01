import { ToDo } from '../../../models/ToDo';
import classes from './ToDoListItem.module.scss';

interface ComponentProps {
  todo: ToDo;
  updateToDo: Function;
  deleteToDo: Function;
}

export const ToDoListItem = (props: ComponentProps) => {
  return (
    <li className={classes.wrapper}>
      <span>{props.todo.text}</span>
      <div className={classes.buttons}>
        <button
          className={classes.trash}
          onClick={() => props.deleteToDo(props.todo)}
        />
        <button
          className={props.todo.isDone ? classes.check : classes.uncheck}
          onClick={() => props.updateToDo(props.todo)}
        />
      </div>
    </li>
  );
};
