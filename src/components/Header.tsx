import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const Header = () => {
  return (
    <Flex justifyContent="space-between" bgColor="transparent" zIndex="100" fontWeight="bold" fontSize="2xl" textColor="white" pt="4">
      <Text pl="9" fontWeight="bold">
        Cell Festival
      </Text>
      <HStack pr="9">
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Recent Posts</Text>
        <Text>Contents</Text>
        <Text>Projicts</Text>
      </HStack>
    </Flex>
  );
};
