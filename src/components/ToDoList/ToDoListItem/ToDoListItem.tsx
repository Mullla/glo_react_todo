import classes from './ToDoListItem.module.scss';

export const ToDoListItem = () => {
  return (
    <li className={classes.wrapper}>
      <span>Первая задача</span>
      <div className={classes.buttons}>
        <button className={classes.trash} />
        <button className={classes.check} />
      </div>
    </li>
  );
};
