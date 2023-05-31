import { ToDo } from '../../../models/ToDo';
import classes from './ToDoListItem.module.scss';

export const ToDoListItem = (props: {
  todo: ToDo;
  updateToDo: Function;
  deleteToDo: Function;
}) => {
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
