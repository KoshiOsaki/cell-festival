import { Box, Divider, Flex, Img, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  title: string;
  date: string;
  img: string;
  link: string;
  children: ReactNode;
}

export const PostCard = ({ title, date, img, children, link }: Props) => {
  return (
    <Link href={`/posts/${link}`}>
      <Box w="30%" bgColor="white" mx="4" my="2" _hover={{ cursor: 'pointer', bg: 'blue.200' }}>
        <Img src={img} mx="auto" h="250px" my="2" />
        <Text p="3">{title}</Text>
        <Box p="3">{children}</Box>
        <Divider />
        <Text p="3" textColor="gray.500" fontSize="sm">
          {date}
        </Text>
      </Box>
    </Link>
  );
};
