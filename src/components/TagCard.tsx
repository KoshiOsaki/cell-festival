import { Box, Divider, Flex, HStack, Img, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  title: string;
  content: string;
}

export const TagCard = ({ title, content }: Props) => {
  return (
    <Box w="30%" bgColor="white" mx="4" border="1px" my="2">
      <HStack p="3">
        <Text fontSize="xl" fontWeight="semibold">
          {title}
        </Text>
      </HStack>
      <Divider />
      <Text p="3">{content}</Text>
    </Box>
  );
};
