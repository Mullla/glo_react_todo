import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListItemWrapper = styled.div``;

export const ListItemLink = styled(Link)<{$isDone: boolean}>`
  display: block;
  text-decoration: none;
  padding: 10px;
  color: ${props => (props.$isDone ? 'green' : 'red')};
`;
