import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.css" />
      <script src="https://cdn.jsdelivr.net/npm/easymde/dist/easymde.min.js"></script>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
