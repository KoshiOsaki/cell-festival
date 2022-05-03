import { Box, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

export const Description = ({ title, children }: Props) => {
  return (
    <Box>
      <Text>-{title}-</Text>
      <Box>{children}</Box>
    </Box>
  );
};
