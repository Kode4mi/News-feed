import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sanity from 'astro-sanity';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), sanity({
    projectId: 'my3lxnl3',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true
  }), tailwind()]
});