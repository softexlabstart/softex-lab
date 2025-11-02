// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// We're using the Tailwind CLI to generate a compiled stylesheet at
// public/build/tailwind.css.
// This project contains server endpoints (e.g. send-email), so we use
// the Vercel serverless adapter to build server-rendered pages.
// https://docs.astro.build/en/guides/deploy/vercel/
export default defineConfig({
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
});