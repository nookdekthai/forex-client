import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://forextradebycoachnet.com',
      lastModified: new Date(),
    },
    {
      url: 'https://forextradebycoachnet.com/courses',
      lastModified: new Date(),
    },
    {
      url: 'https://forextradebycoachnet.com/about',
      lastModified: new Date(),
    },
  ]
}