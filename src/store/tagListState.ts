import { atom } from 'recoil';
import { Tag } from '../types/tag';

export const tagListState = atom<Tag[]>({
  key: 'tagListState',
  default: [],
});
