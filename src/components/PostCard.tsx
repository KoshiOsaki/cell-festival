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
    <Box w="30%" bgColor="white" mx="4">
      <Img src={img} />
      <Text>{title}</Text>
      <Box>{children}</Box>
      <Divider />
      <Text>{date}</Text>
    </Box>
  );
};
