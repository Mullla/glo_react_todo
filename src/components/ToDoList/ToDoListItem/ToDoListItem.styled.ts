import styled from 'styled-components';
import { Button } from '../../../styles/Button';

import iconCheck from '../../../assets/img/check.png';
import iconUncheck from '../../../assets/img/uncheck.png';
import iconTrash from '../../../assets/img/trash.png';


export const ToDoListItemWrapper = styled.li`
  width: 100%;
  min-height: 50px;
  font-size: 14px;
  font-weight: 500;
  color: #444;
  line-height: 22px;

  display: flex;
  justify-content: space-between;

  background: #fff;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 1px 2px rgba(44, 62, 80, 0.1);
  margin: 0 0 10px 0;
  padding: 14px;
  word-break: break-word;

  &:last-child {
    margin: 0;
  }
`;

export const ToDoListItemButtons = styled.div`
  width: 100px;
  height: 50px;
  display: flex;

  position: absolute;
  top: 0;
  right: 0;
`;

export const ToDoListItemButtonChecked = styled(Button)`
  background-image: url(${iconCheck});
`;

export const ToDoListItemButtonUnchecked = styled(Button)`
  background-image: url(${iconUncheck});
`;

export const ToDoListItemButtonTrash = styled(Button)`
  background-image: url(${iconTrash});
`;
