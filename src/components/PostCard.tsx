import { Box, Divider, Flex, Img, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  title: string;
  date: string;
  img: string;
  children: ReactNode;
}

export const PostCard = ({ title, date, img, children }: Props) => {
  return (
    <Box w="30%" bgColor="white" mx="4" my="2">
      <Img src={img} mx="auto" h="250px" />
      <Text p="3">{title}</Text>
      <Box p="3">{children}</Box>
      <Divider />
      <Text p="3" textColor="gray.500" fontSize="sm">
        {date}
      </Text>
    </Box>
  );
};
