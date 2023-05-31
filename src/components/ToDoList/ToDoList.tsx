import { ToDoListItem } from './ToDoListItem/ToDoListItem';
import classes from './ToDoList.module.scss';
import { ToDo } from '../../models/ToDo';

export const ToDoList = (props: {
  todos: ToDo[];
  updateToDo: Function;
  deleteToDo: Function;
}) => {
  const getListWithStatus = (isDone: boolean) => {
    return props.todos
      .filter(todo => todo.isDone === isDone)
      .map(todo => {
        return (
          <ToDoListItem
            todo={todo}
            key={todo.id}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        );
      });
  };

  return (
    <div className={classes.container}>
      <ul className={`${classes.list} ${classes.failed}`}>
        {getListWithStatus(false)}
      </ul>

      <ul className={`${classes.list} ${classes.completed}`}>
        {getListWithStatus(true)}
      </ul>
    </div>
  );
};
