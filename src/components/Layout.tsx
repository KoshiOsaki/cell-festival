import { Box } from '@chakra-ui/react';
import { Props } from 'framer-motion/types/types';
import { FC } from 'react';
import { Footer } from './Footer';

import { Header } from './Header';

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Box>{children}</Box>
      <Footer />
    </>
  );
};
