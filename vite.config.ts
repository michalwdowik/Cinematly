import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import { compression } from 'vite-plugin-compression2'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            strategies: 'generateSW',
            registerType: 'autoUpdate',
            workbox: {
                globPatterns: ['**/*.{js,css}'],
                navigateFallback: null,
            },
            devOptions: {
                enabled: true,
                type: 'module',
                navigateFallback: 'index.html',
            },

            manifest: {
                id: '/',
                start_url: './',
                name: 'Cinematly',
                short_name: 'Cinematly',
                theme_color: '#000000',
                icons: [
                    {
                        src: '/favicon.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
            },
        }),
        compression({
            include: [/\.(js|mjs|json|css|html)$/],
            exclude: [/\.(br)$/, /\.(gz)$/],
            algorithm: 'brotliCompress',
        }),
    ],
})
