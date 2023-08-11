import { ITitle } from '@/interfaces/MyTitle';

export const getTitleNumbers = (title: ITitle) => {
  return Object.entries(title)
    .filter(([key]) => /^d_\d+$/.test(key))
    .map(([key, value]) => value as number);
};
