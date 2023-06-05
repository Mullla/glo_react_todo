import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import iconSun from '../../assets/img/sun.svg';
import iconMoon from '../../assets/img/moon.svg';
import { Theme, ThemeNameEnum } from '../../models/theme';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: ${({ theme }: {theme: Theme}) => theme.colors.headerBackground};
  display: flex;
  align-items: center;
  transition: background-color 0.2s;
`;

export const HeaderNavbar = styled.nav`
  max-width: 97%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  color: #fff;

  &.active {
    color: #ffffff33;
  }
`;

export const HeaderToggleThemeButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #d8e5e0;
  background-color: ${({ theme }: {theme: Theme}) => theme.colors.headerBackground};
  background-image: ${({ theme }: {theme: Theme}) =>
    `url(${theme.name === ThemeNameEnum.LIGHT ? iconSun : iconMoon})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 30px;
`;
