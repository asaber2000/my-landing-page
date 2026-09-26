import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: ['OAI-SearchBot', 'OAI-AdsBot'],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://tents.baitalnokhada.com/sitemap.xml',
  };
}