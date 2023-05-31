import { ChangeEvent, useState } from 'react';
import classes from './Form.module.scss';

export const Form = (props: { createToDo: Function }) => {
  const [text, setText] = useState('');

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text) props.createToDo(text);
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
