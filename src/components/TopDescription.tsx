import { Box, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

export const TopDescription = ({ title, children }: Props) => {
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="semibold" my="3">
        -{title}-
      </Text>
      <Box>{children}</Box>
    </Box>
  );
};
