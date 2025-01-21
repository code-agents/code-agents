// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import fulldev from 'fulldev-ui/integration'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), /*fulldev(),*/ tailwind({
    applyBaseStyles: false,
  })],
  // Configure other settings as needed
  site: 'https://code-agents.com',
  adapter: cloudflare()
});
