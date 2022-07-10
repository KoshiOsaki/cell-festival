import { atom } from 'recoil';
import { User } from '../types/user';

export const userState = atom<any>({
  key: 'userState',
  default: null,
});
