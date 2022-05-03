import { Box, Divider, Flex, Img, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  icon: string;
  title: string;
  content: string;
}

export const ContentCard = ({ title, icon, content }: Props) => {
  return (
    <Box w="30%" bgColor="white" mx="4">
      <Img src={icon} />
      <Text>{title}</Text>
      <Box></Box>
      <Divider />
      <Text>{content}</Text>
    </Box>
  );
};
