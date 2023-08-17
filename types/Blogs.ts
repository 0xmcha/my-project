import { PortableTextBlock } from 'sanity';

export type Blogs = {
  _id: string;
  title: string;
  publishedAt: Date;
  name: string;
  slug: string;
  image: string;
  content: PortableTextBlock[];
  tags: string[];
};
