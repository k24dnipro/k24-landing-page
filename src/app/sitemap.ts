import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://k24.dp.ua';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
  ];
}




