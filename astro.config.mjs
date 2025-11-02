// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// We're using the Tailwind CLI to generate a compiled stylesheet at
// public/build/tailwind.css.
// This project contains server endpoints (e.g. send-email), so install and
// configure the Node adapter to build server-rendered pages.
// https://docs.astro.build/en/guides/deploy/node/
export default defineConfig({
  // Use the Node adapter in production mode so the integration initializes
  // correctly. If you deploy to a specific platform (Vercel, Netlify, etc.)
  // consider using the platform-specific adapter instead.
  adapter: node({ mode: 'standalone' }),
});