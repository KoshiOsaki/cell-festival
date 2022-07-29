import { atom } from 'recoil';
import { Post } from '../types/post';

export const postListState = atom<Post[]>({
  key: 'postListState',
  default: [],
});
