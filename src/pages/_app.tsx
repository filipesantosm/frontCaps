import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from '@/hooks/useAuth';
import GlobalStyle from '@/styles/global';
import { theme } from '@/styles/theme';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Poppins } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import CartProvider from '@/hooks/useCart';
import CurrentDrawProvider from '@/hooks/useCurrentDraw';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Head>
        <title>Amapá CAP</title>
      </Head>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <GlobalStyle />
        <AuthProvider>
          <CurrentDrawProvider>
            <CartProvider>
              <main className={poppins.className}>
                <Component {...pageProps} />
              </main>
            </CartProvider>
          </CurrentDrawProvider>
        </AuthProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
