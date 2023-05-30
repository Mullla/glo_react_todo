import { ToDoListItem } from './ToDoListItem/ToDoListItem';
import classes from './ToDoList.module.scss';

export const ToDoList = () => {
  return (
    <div className={classes.container}>
      <ul className={`${classes.list} ${classes.failed}`}>
        <ToDoListItem />
      </ul>

      <ul className={`${classes.list} ${classes.completed}`}>
        <ToDoListItem />
      </ul>
    </div>
  );
};
