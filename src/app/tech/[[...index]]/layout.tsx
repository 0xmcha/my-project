import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

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
      <body className={rubic.className}>{children}</body>
    </html>
  );
}
