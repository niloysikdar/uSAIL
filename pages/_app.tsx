import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Theme } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
