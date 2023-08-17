import './globals.css';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import Header from './components/header';
import Footer from './components/footer';
import { Suspense } from 'react';
import Loader from './Loader';

const rubic = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MagnaTech',
  description: 'MagnaTech',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={rubic.className}>
        <Header />
        <Suspense fallback={<Loader />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
