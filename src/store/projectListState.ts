import { atom } from 'recoil';
import { Project } from '../types/data';

export const projectListState = atom<Project[]>({
  key: 'projectListState',
  default: [],
});
