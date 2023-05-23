import './globals.css';
import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'standardrobot',
  description: 'i am standardrobot',
  icons: {
    icon: {
      url: '/favicon.ico',
      type: 'image/png',
    },
    shortcut: { url: '/favicon.ico', type: 'image/png' },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
