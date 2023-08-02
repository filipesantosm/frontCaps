import { Image } from './Draw';

export interface IInstitution {
  id: number;
  attributes: IInstitutionAttributes;
}

export interface IInstitutionAttributes {
  name: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  active: null;
  image: Image;
}
