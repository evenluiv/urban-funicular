import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import history from 'connect-history-api-fallback';
import type { Plugin } from 'vite';

const historyFallbackMiddleware: Plugin = {
  name: 'history-fallback-middleware',
  configureServer(server) {
    const middleware = history({
      index: '/index.html',
      verbose: true,
    }) as unknown as (req: unknown, res: unknown, next: (err?: unknown) => void) => void;

    server.middlewares.use(middleware);
  },
};

export default defineConfig({
  plugins: [react(), historyFallbackMiddleware],
});
