import { ToDo } from '../../models/ToDo';
import { ListItemLink, ListItemWrapper } from './ListItem.styled';

interface ComponentProps {
  todo: ToDo;
  tag: string;
}

export const ListItem = ({ todo, tag }: ComponentProps) => {
  const tagToRender = (tag ? tag : 'div') as keyof JSX.IntrinsicElements;

  return (
    <ListItemWrapper as={tagToRender}>
      {/* $ is for transient props: https://stackoverflow.com/questions/58094415/styling-react-router-dom-link-using-styled-components-getting-warning-when-passi */}
      <ListItemLink to={`/list/${todo.id}`} $isDone={todo.isDone}>
        {todo.text}
      </ListItemLink>
    </ListItemWrapper>
  );
};
