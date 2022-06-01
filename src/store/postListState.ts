import { atom } from 'recoil';
import { Post } from '../types/data';

export const postListState = atom<Post[]>({
  key: 'postListState',
  default: [],
});
