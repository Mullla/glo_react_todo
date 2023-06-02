import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';
import { inputChangeAction } from '../../feature/todoList';

import classes from './Form.module.scss';

interface ComponentProps {
  createToDo: Function;
}

export const Form = ({ createToDo }: ComponentProps) => {
  const value = useSelector((state: RootState) => state.todoList.inputToDo);
  const dispatch = useDispatch();

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) createToDo(value);
    dispatch(inputChangeAction(''));
  };

  return (
    <div className={classes.wrapper}>
      <form action="#" onSubmit={onSubmit}>
        <label>
          <input
            value={value}
            type="text"
            onChange={e => dispatch(inputChangeAction(e.target.value))}
          />
          <button />
        </label>
      </form>
    </div>
  );
};
