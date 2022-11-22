import Link from 'next/link';
import styles from './navbar.module.scss';

const Navbar = () => {
  const menuItems = [
    {label: 'Home Page', path: '/'},
    {label: 'Posts Page', path: '/posts'},
    {label: 'About Page', path: '/about'},
    {label: 'Contact Page', path: '/contact'},
  ];

  return (
    <header>
      <nav className={styles.navbar}>
        <ul className={styles.navbarContainer}>
          {menuItems.map(({path, label}) => (
            <li className={styles.navbarItem} key={path}>
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
