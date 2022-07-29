import { atom } from 'recoil';
import { Tag } from '../types/data';

export const tagListState = atom<Tag[]>({
  key: 'tagListState',
  default: [],
});
