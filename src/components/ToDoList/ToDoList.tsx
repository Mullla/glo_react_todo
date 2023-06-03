import { ToDoListItem } from './ToDoListItem/ToDoListItem';
import { ToDo } from '../../models/ToDo';
import {
  ToDoListCompleted,
  ToDoListFailed,
  ToDoListWrapper,
} from './ToDoList.styled';

interface ComponentProps {
  todos: ToDo[];
  updateToDo: Function;
  deleteToDo: Function;
}

export const ToDoList = (props: ComponentProps) => {
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
    <ToDoListWrapper>
      <ToDoListFailed>{getListWithStatus(false)}</ToDoListFailed>

      <ToDoListCompleted>{getListWithStatus(true)}</ToDoListCompleted>
    </ToDoListWrapper>
  );
};
