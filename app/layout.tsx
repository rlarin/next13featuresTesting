import {ReactNode} from 'react';
import Head from './head';
import Link from 'next/link';

export default function RootLayout({children}: {children: ReactNode}) {
  const menuItems = [
    {label: 'Home Page', path: '/'},
    {label: 'About Page', path: '/about'},
  ];

  return (
    <html>
      <Head />
      <body>
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
        {children}
      </body>
    </html>
  );
}
