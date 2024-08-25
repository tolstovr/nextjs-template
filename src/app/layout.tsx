import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Title',
  description: 'Description',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='ru'>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
