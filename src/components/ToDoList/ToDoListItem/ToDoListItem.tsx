import { ToDo } from '../../../models/ToDo';
import {
  ToDoListItemButtonChecked,
  ToDoListItemButtonTrash,
  ToDoListItemButtonUnchecked,
  ToDoListItemButtons,
  ToDoListItemWrapper,
} from './ToDoListItem.styled';

interface ComponentProps {
  todo: ToDo;
  updateToDo: Function;
  deleteToDo: Function;
}

export const ToDoListItem = (props: ComponentProps) => {
  const ButtonToShow = props.todo.isDone
    ? ToDoListItemButtonChecked
    : ToDoListItemButtonUnchecked;

  return (
    <ToDoListItemWrapper>
      <span>{props.todo.text}</span>
      <ToDoListItemButtons>
        <ToDoListItemButtonTrash onClick={() => props.deleteToDo(props.todo)} />
        <ButtonToShow onClick={() => props.updateToDo(props.todo)} />
      </ToDoListItemButtons>
    </ToDoListItemWrapper>
  );
};
