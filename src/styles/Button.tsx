import styled from 'styled-components';

export const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  border: 0;
  box-shadow: none;
  outline: none;
  cursor: pointer;

  &:last-of-type:before {
    content: '';
    width: 1px;
    height: 30px;
    background: #edf0f1;

    position: absolute;
    top: 10px;
    left: 0;
  }
`;
