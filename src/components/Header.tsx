import { Avatar, Box, Flex, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { currentUserState } from '../store/currentUserState';

import { SignInModal } from './auth/SignInModal';
import { SignUpModal } from './auth/SignUpModal';
import { UserModal } from './UserModal';

export const Header = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isRegistered, setIsRegistered] = useState(true);
  return (
    <>
      <Flex justifyContent="space-between" bgColor="transparent" zIndex="100" fontWeight="bold" fontSize="2xl" textColor="white" pt="4">
        <Text pl="9" fontWeight="bold">
          Cell Festival
        </Text>
        <HStack pr="9">
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Recent Posts</Text>
          <Text>Contents</Text>
          <Text>Projects</Text>
          {currentUser !== null ? <UserModal /> : <Text onClick={onOpen}>Login</Text>}
        </HStack>
      </Flex>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} isCentered size="4xl">
        <ModalOverlay />
        <ModalContent h="650px" overflow="scroll">
          <ModalCloseButton _focus={{ _focus: 'none' }} />
          <ModalBody py="7" px={{ base: '1', md: '10' }}>
            {isRegistered ? (
              <SignInModal onClose={onClose} setIsRegistered={setIsRegistered} />
            ) : (
              <SignUpModal onClose={onClose} setIsRegistered={setIsRegistered} />
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
