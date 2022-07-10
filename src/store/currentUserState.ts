import { atom } from 'recoil';
import { User } from '../types/user';

export const currentUserState = atom<User | null>({
  key: 'currentUserState',
  default: null,
});
