import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server', // This enables API routes
  adapter: vercel(), // This adapts your site for Vercel
  integrations: [tailwind()],
});