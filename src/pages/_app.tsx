import { ThemeProvider } from 'styled-components';
import GloblaStyles from '../styles/GloblaStyles';
import { theme } from '../styles/themes/index';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GloblaStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
