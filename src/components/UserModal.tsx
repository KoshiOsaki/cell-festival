import { useRecoilState } from 'recoil';
import { currentUserState } from '../store/currentUserState';
import { Avatar, Box, Flex, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import { SignOutModal } from './auth/SignOutModal';

export const UserModal = () => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Avatar onClick={onOpen} />
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} isCentered size="4xl">
        <ModalOverlay />
        <ModalContent h="650px" overflow="scroll">
          <ModalCloseButton _focus={{ _focus: 'none' }} />
          <ModalBody py="7" px={{ base: '1', md: '10' }}>
            <SignOutModal onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
