// eslint-disable-next-line camelcase
import {Inter, Space_Grotesk} from '@next/font/google';

export const InterFont = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter', // <-- this makes that you can use the font in your css with var(--font-inter)
});

export const spaceGroteskFont = Space_Grotesk({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});
