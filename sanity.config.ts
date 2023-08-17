import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import schemas from './sanity/schemas';
const config = defineConfig({
  projectId: 'rjn0a3w2',
  dataset: 'production',
  title: 'Website Cms',
  apiVersion: '2023-08-6',
  basePath: '/tech',
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
