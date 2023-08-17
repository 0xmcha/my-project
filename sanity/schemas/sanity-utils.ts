import { createClient, groq } from 'next-sanity';
import { Project } from '../../types/Project';
import clientConfig from '../config/client-config';
import { Blogs } from '../../types/Blogs';

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type=="project"]{
        _id,
        id,
        _createdAt,
        name,
        titlekurdish,
        description,
        descriptionkurdish,
        "tags": tags[]->name,
        "slug":slug.current,
        "image":image.asset->url,
        "projectimages":projectimages[].asset->url,
        url,
        content,
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type=="project" && slug.current==$slug][0]{
        _id,
        _createdAt,
        name,
        titlekurdish,
        description,
        descriptionkurdish,
        "tags": tags[]->name,
        "slug":slug.current,
        "image":image.asset->url,
        "projectimages":projectimages[].asset->url,
        url,
        content,
    }`,
    {
      slug,
    }
  );
}

export async function getBlog(): Promise<Blogs[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blog"]{
      _id,
      title,
      "tags": tags[]->name,
      publishedAt,
      "slug":slug.current,
      content,
      "image":image.asset->url,
    }`
  );
}
