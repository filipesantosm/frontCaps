import { ImageData } from './Draw';

export interface ITerm {
  id: number;
  attributes: TermAttributes;
}

export interface TermAttributes {
  name: null | string;
  description: null | string;
  type: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  active: boolean;
}

export interface ITermDetails {
  id: number;
  attributes: TermDetailsAttributes;
}

export interface TermDetailsAttributes {
  title: string;
  description: string;
  term_use: {
    data: ITerm;
  };
  image: {
    data: ImageData[];
  };
}
