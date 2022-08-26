import { atom } from 'recoil';

export const modalVisible = atom<boolean>({
  key: 'modalVisible',
  default: false,
});
