import { ChangeEvent, useState } from 'react';
import {
  FormControl,
  FormBlock,
  FormField,
  FormLabel,
  FormWrapper,
} from './Form.styled';

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
    <FormWrapper>
      <FormBlock action="#" onSubmit={onSubmit}>
        <FormLabel>
          <FormField
            value={text}
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
          />
          <FormControl />
        </FormLabel>
      </FormBlock>
    </FormWrapper>
  );
};
