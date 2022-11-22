import {ReactNode} from 'react';
import Head from './head';
import Navbar from './components/navbar/navbar';
import '../styles/globals.scss';
import {InterFont} from './fonts/fonts';

const RootLayout = ({children}: {children: ReactNode}) => {
  return (
    <html lang='en'>
      <Head title='Next JS 13' />
      <body className={InterFont.variable}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
