import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
