import { HeaderNavbar, HeaderWrapper, HeaderLink } from './Header.styled';

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
  return (
    <HeaderWrapper>
      <HeaderNavbar>
        {NAV_LINKS.map((link, idx) => (
          <HeaderLink to={link.path} key={idx}>
            {link.name}
          </HeaderLink>
        ))}
      </HeaderNavbar>
    </HeaderWrapper>
  );
};
