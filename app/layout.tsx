import {ReactNode} from 'react';
import Head from './head';
import Navbar from './components/navbar/navbar';
import '../styles/globals.scss';

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <html>
      <Head title='Next JS 13' />
      <body>
        <Navbar />
        {children}
        <footer>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
