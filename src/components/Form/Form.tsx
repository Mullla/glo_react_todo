import { ChangeEvent, useState } from 'react';
import classes from './Form.module.scss';

interface ComponentProps {
  createToDo: Function;
}

export const Form = ({ createToDo }: ComponentProps) => {
  const [text, setText] = useState('');

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text) createToDo(text);
    setText('');
  };

  return (
    <div className={classes.wrapper}>
      <form action="#" onSubmit={onSubmit}>
        <label>
          <input
            value={text}
            type="text"
            onChange={e => setText(e.target.value)}
          />
          <button />
        </label>
      </form>
    </div>
  );
};
