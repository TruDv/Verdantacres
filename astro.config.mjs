import { defineConfig } from 'astro/config';
// 1. Import the official Astro Tailwind integration
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // 2. Register the Tailwind integration here
  integrations: [tailwind()],

  // Ensure you have any other necessary settings here (e.g., output: 'server')
  // The 'vite' block is only needed for custom Vite plugins, not for Astro integrations.
});