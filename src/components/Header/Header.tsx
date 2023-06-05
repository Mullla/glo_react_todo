import { useDispatch } from 'react-redux';
import {
  HeaderNavbar,
  HeaderWrapper,
  HeaderLink,
  HeaderToggleThemeButton,
} from './Header.styled';
import { toggleThemeAction } from '../../feature/theme';

const NAV_LINKS = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/list',
    name: 'List',
  },
];

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <HeaderWrapper>
      <HeaderNavbar>
        {NAV_LINKS.map((link, idx) => (
          <HeaderLink to={link.path} key={idx}>
            {link.name}
          </HeaderLink>
        ))}
      </HeaderNavbar>

      <HeaderToggleThemeButton onClick={() => dispatch(toggleThemeAction())} />
    </HeaderWrapper>
  );
};
