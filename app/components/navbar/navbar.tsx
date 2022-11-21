import Link from 'next/link';

const Navbar = () => {
  const menuItems = [
    {label: 'Home Page', path: '/'},
    {label: 'About Page', path: '/about'},
  ];

  return (
    <header>
      <nav>
        <ul>
          {menuItems.map(({path, label}, index) => (
            <li key={index}>
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
