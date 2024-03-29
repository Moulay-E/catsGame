import { Inter } from 'next/font/google';
import GlobalDataProvider from './context';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Jeux de chat',
  description: "un jeu pour m'amuser",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalDataProvider>{children}</GlobalDataProvider>
      </body>
    </html>
  );
}
