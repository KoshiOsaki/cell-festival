import { Box, Divider, Flex, Spacer, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <Box bgColor="blue.900" textColor="gray.300" pt="8" pb="6">
      <Flex justify="center" mb="9">
        <Stack mx="32">
          <Text textColor="white" fontSize="xl" fontWeight="semibold">
            Navigation
          </Text>
          <Text>About</Text>
          <Text>Recent Posts</Text>
          <Text>Contents</Text>
          <Text>Projects</Text>
        </Stack>

        <Stack mx="32">
          <Text textColor="white" fontSize="xl" fontWeight="semibold">
            Contact me:
          </Text>
          <Text>mryouth.kw@gmail.com</Text>
          <Text>@cell_festival</Text>
        </Stack>

        <Stack mx="32">
          <Text textColor="white" fontSize="xl" fontWeight="semibold">
            Edit
          </Text>
          <Link href="/post">post</Link>
          <Link href="/view">view</Link>
        </Stack>
      </Flex>
      <Divider />
      <Text mx="20" py="5">
        &copy;Cell Festival
      </Text>
    </Box>
  );
};
