import { PortableTextBlock } from 'sanity';

export type Project = {
  _id: string;
  id: number;
  _createdAt: string;
  name: string;
  slug: string;
  image: string;
  projectimages: string[];
  url: string;
  content: PortableTextBlock[];
  titlekurdish: string;
  description: string;
  descriptionkurdish: string;
  tags: string[];
};
