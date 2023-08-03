export interface IDraw {
  id: number;
  attributes: IDrawAttributes;
}

export interface IDrawAttributes {
  name: string;
  description: string;
  dateStart: string;
  dateFinal: string;
  dateDraw: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  active: boolean;
  number: number;
  lastDraw: boolean;
  image: Image;
  draw_type_chance: DrawTypeChance;
  draw_premiums: {
    data: DrawPremium[];
  };
  draw_promos: {
    data: DrawPromo[];
  };
}

export interface DrawPromo {
  id: number;
  attributes: DrawPromoAttributes;
}

export interface DrawPromoAttributes {
  Campanha: string;
  value: number;
  quantity: number;
}

export interface DrawPremium {
  id: number;
  attributes: DrawPremiumAttributes;
}

export interface DrawPremiumAttributes {
  value: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  active: boolean | null;
  number: number;
  description: string;
  title: string;
  isDetach: boolean | null;
}

export interface DrawTypeChance {
  data: DrawTypeChanceData;
}

export interface DrawTypeChanceData {
  id: number;
  attributes: DrawTypeChanceAttributes;
}

export interface DrawTypeChanceAttributes {
  name: string;
  description: string;
  total: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Image {
  data: ImageData;
}

export interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

export interface ImageAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
}

export interface Formats {
  small: ImageFormat;
  medium: ImageFormat;
  thumbnail: ImageFormat;
}

export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}
