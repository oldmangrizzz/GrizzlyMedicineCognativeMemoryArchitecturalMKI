import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ConvexClientProvider } from './lib/convex';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TonyAI Memory System',
  description: 'Hyperdimensional Computing Memory System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}