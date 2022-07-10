import { FC } from 'react';
import Router from 'next/router';
import { getAuth, signOut } from 'firebase/auth';

import '../../pages/api/fire'; // Initialize FirebaseApp
import { useAuthState } from '../../hooks/useAuthState';

export const SignInOrOutButton: FC = () => {
  const { isSignedIn } = useAuthState();

  if (isSignedIn) {
    return <button onClick={() => signOut(getAuth())}>Sign-out</button>;
  } else {
    return <button onClick={() => Router.push('/signin')}>Sign-in</button>;
  }
};
