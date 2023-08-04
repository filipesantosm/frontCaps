import { IDraw } from '@/interfaces/Draw';

const apiUrl = process.env.NEXT_PUBLIC_API || '';

export const imageUrl = (imagePath?: string) => {
  const baseApiUrl = apiUrl.split('/api/')[0];

  return `${baseApiUrl}${imagePath || ''}`;
};

export const getDrawImage = (draw?: IDraw) => {
  const imagePath = draw?.attributes?.image?.data?.attributes?.url || '';

  if (!imagePath) {
    return '';
  }

  return imageUrl(imagePath);
};
