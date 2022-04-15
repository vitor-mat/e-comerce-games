import type { AppProps } from 'next/app';

import { store } from '../app/store';
import { Provider } from 'react-redux';

import { GlobalStyle } from '../styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
