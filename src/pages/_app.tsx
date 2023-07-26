import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from '@/hooks/useAuth';
import GlobalStyle from '@/styles/global';
import { theme } from '@/styles/theme';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Poppins } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Head>
        <title>Multcap</title>
      </Head>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <GlobalStyle />
        <AuthProvider>
          <main className={poppins.className}>
            <Component {...pageProps} />
          </main>
        </AuthProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
