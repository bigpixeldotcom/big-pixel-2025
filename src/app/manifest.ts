import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Big Pixel',
    short_name: 'Big Pixel',
    description:
      'Big Pixel helps brands grow with custom websites built for speed, impact, and scale — combining sleek design with the latest web technology.',
    id: 'https://big-pixel.com',
    start_url: '/',
    display: 'standalone',
    background_color: '#1d252d',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
