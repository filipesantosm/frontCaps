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
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    import('react-facebook-pixel')
      .then(x => x.default)
      .then(ReactPixel => {
        ReactPixel.init('274246015566635'); // facebookPixelId
        ReactPixel.pageView();

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);
  return (
    <AuthProvider>
      <Head>
        <title>Proeste</title>
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
