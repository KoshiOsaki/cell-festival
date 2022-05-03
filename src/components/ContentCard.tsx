import { Box, Divider, Flex, HStack, Img, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  icon: string;
  title: string;
  content: string;
}

export const ContentCard = ({ title, icon, content }: Props) => {
  return (
    <Box w="30%" bgColor="white" mx="4" border="1px" my="2">
      <HStack p="3">
        <Img src={icon} w="30px" />
        <Text fontSize="xl" fontWeight="semibold">
          {title}
        </Text>
      </HStack>
      <Divider />
      <Text p="3">{content}</Text>
    </Box>
  );
};
