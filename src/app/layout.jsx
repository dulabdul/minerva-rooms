import './styles/globals.css';
import { Poppins } from 'next/font/google';
import Header from '@/components/Layout/Header';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Header />
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
