import { IDraw } from '@/interfaces/Draw';

const apiUrl = process.env.NEXT_PUBLIC_API || '';

export const imageUrl = (imagePath?: string) => {
  const baseApiUrl = apiUrl.split('/api/')[0];

  return imagePath ? `${baseApiUrl}${imagePath || ''}` : '/home-hero.png';
};

export const getDrawImage = (draw?: IDraw) => {
  const imagePath = draw?.attributes?.image?.data?.attributes?.url || '';

  return imageUrl(imagePath);
};
