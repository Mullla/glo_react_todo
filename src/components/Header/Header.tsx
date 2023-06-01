import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';

const NAV_LINKS = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/todo',
    name: 'Todo',
  },
];

export const Header = () => {
  const getLinkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${classes.active} ${classes.link}` : classes.link;

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        {NAV_LINKS.map((link, idx) => (
          <NavLink to={link.path} className={getLinkClasses} key={idx}>
            {link.name}
          </NavLink>
        ))}
      </div>
    </header>
  );
};
