import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'К24 Дніпро - Професійний автосервіс',
    short_name: 'К24 Дніпро',
    description:
      'Професійний автосервіс у Дніпрі: рихтування, рихтовка, полірування та фарбування автомобілів',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#FFED00',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}


