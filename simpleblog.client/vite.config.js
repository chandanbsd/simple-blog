import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        proxy: {
            '/weatherforecast': {
                target: 'http://your-backend-server-url',
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
