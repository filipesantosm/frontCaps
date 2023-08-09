export interface IFaq {
  id: number;
  attributes: FaqAttributes;
}

export interface FaqAttributes {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  faq_questions: {
    data: IFaqQuestion[];
  };
}

export interface IFaqQuestion {
  id: number;
  attributes: FaqQuestionAttributes;
}

export interface FaqQuestionAttributes {
  question: string;
  response: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  faq: {
    data: IFaq;
  };
}

export interface IFaqVideo {
  id: number;
  attributes: FaqVideoAttributes;
}

export interface FaqVideoAttributes {
  url: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
