import { atom } from 'recoil';
import { Project } from '../types/project';

export const projectListState = atom<Project[]>({
  key: 'projectListState',
  default: [],
});
