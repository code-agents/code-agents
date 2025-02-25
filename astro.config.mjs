// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    })
  ],
  site: 'https://code-agents.com',
  adapter: cloudflare(),
  vite: {
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});
