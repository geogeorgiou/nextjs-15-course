export type StartupCardType = {
  _createdAt: Date;
  views: number;
  author: { _id: number; name: string };
  _id: number;
  description: string;
  image: string;
  title: string;
  category: string;
  type: string;
};
