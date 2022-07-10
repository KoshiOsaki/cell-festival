import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { app } from '../pages/api/fire';
import { userState } from '../store/loginUserState';

export const SignUpModal = ({ onClose, setIsRegistered }: any) => {
  const [user, setUser] = useRecoilState(userState);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const auth = getAuth(app);
  const handleInputChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setUserData({ ...userData, [name]: value });
  };

  const onClickSignUp = () => {
    createUserWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(userData);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    onClose();
  };

  return (
    <Box>
      <FormControl>
        <FormLabel htmlFor="name">Nickname</FormLabel>
        <Input name="name" value={userData.name} onChange={handleInputChange} />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input name="email" value={userData.email} onChange={handleInputChange} />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input name="password" type="password" value={userData.password} onChange={handleInputChange} />
      </FormControl>
      <Button mt="4" colorScheme="green" onClick={onClickSignUp}>
        Sign Up
      </Button>
      <Box mt="14">
        <Button
          mt="4"
          colorScheme="blue"
          onClick={() => {
            setIsRegistered(true);
          }}
        >
          ログインする
        </Button>
      </Box>
    </Box>
  );
};
