import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { addDoc, collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { app, db } from '../../pages/api/fire';
import { currentUserState } from '../../store/currentUserState';
import { User } from '../../types/user';

export const SignUpModal = ({ onClose, setIsRegistered }: any) => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
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
        setCurrentUser(userData);

        let now: Date = new Date();
        let createdAt: Timestamp = Timestamp.fromDate(now);
        console.log(user.uid);
        (async () => {
          const data = {
            uid: user.uid,
            name: userData.name,
            email: userData.email,
            createdAt,
          };
          setDoc(doc(db, 'users', user.uid), data);
        })();
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
