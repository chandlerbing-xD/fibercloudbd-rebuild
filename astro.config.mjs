import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // other settings
  vite: {
    css: {
      postcss: './postcss.config.cjs',
    },

    plugins: [tailwindcss()],
  },
});