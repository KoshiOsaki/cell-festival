import { Box, Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { createUserWithEmailAndPassword, getAuth, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { app } from '../../pages/api/fire';
import { currentUserState } from '../../store/currentUserState';

export const SignOutModal = ({ onClose }: any) => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const auth = getAuth(app);

  const onClickSignOut = () => {
    signOut(auth)
      .then(() => {
        alert('Sign-out successful.');
        setCurrentUser(null);
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    onClose();
  };

  return (
    <Box>
      <Text>Nickname:{currentUser!.name}</Text>
      <Text>email:{currentUser!.email}</Text>
      <Button mt="4" colorScheme="red" onClick={onClickSignOut}>
        Sign Out
      </Button>
    </Box>
  );
};
