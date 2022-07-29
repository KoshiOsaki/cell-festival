import { Badge, Box, Divider, Flex, HStack, Img, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  icon: string;
  title: string;
  date: string;
  content: string;
  memberNums: number;
}

export const ProjectCard = ({ title, date, icon, content, memberNums }: Props) => {
  return (
    <Box w="30%" bgColor="white" mx="4" my="2" border="1px">
      <HStack p="3">
        <Img src={icon} w="30px" />
        <Text fontSize="xl">{title}</Text>
      </HStack>
      <Flex justifyContent="space-between" px="2">
        <Text textColor="gray.500" fontSize="sm">
          {memberNums}members involved
        </Text>
        <Text textColor="gray.500" fontSize="sm">
          {date}~
        </Text>
      </Flex>
      <Divider />
      <Text p="3" mb="2">
        {content}
      </Text>
    </Box>
  );
};
