import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tents.baitalnokhada.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: [
        'https://tents.baitalnokhada.com/webp/gitex2025.webp',
        'https://tents.baitalnokhada.com/webp/airshow.webp',
        'https://tents.baitalnokhada.com/webp/amaal2025.webp',
        'https://tents.baitalnokhada.com/webp/driftx.webp',
        'https://tents.baitalnokhada.com/webp/gulfood2026.webp',
        'https://tents.baitalnokhada.com/webp/netflix-stranger-things.webp',
        'https://tents.baitalnokhada.com/GITEX-EVENT.webp',
        ],
    },
  ];
}