import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { currentUserState } from '../../store/currentUserState';

export const SignInModal = ({ onClose, setIsRegistered }: any) => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const auth = getAuth();
  const handleInputChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setUserData({ ...userData, [name]: value });
  };

  const onClickSignIn = () => {
    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setCurrentUser(userData);
        onClose();
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };

  return (
    <Box>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input name="email" value={userData.email} onChange={handleInputChange} />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input name="password" type="password" value={userData.password} onChange={handleInputChange} />
      </FormControl>
      <Button mt="4" colorScheme="green" onClick={onClickSignIn}>
        Sign In
      </Button>
      <Box mt="14">
        <Button
          mt="4"
          colorScheme="blue"
          onClick={() => {
            setIsRegistered(false);
          }}
        >
          新規登録する
        </Button>
      </Box>
    </Box>
  );
};
