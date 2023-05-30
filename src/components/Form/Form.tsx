import classes from './Form.module.scss';

export const Form = () => {
  return (
    <div className={classes.wrapper}>
      <form action="#">
        <label>
          <input type="text" />
          <button />
        </label>
      </form>
    </div>
  );
};
