import { Box, Divider, Flex, Img, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  icon: string;
  title: string;
  date: string;
  content: string;
  memberNums: number;
  topic: string[];
}

export const ProjectCard = ({ title, date, icon, content, memberNums, topic }: Props) => {
  return (
    <Box w="30%" bgColor="white" mx="4">
      <Img src={icon} />
      <Text>{title}</Text>
      <Box></Box>
      <Divider />
      <Text>{date}</Text>
    </Box>
  );
};
