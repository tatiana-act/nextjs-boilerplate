import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://austin-city-tours.vercel.app';
    const routes = [
        '',
        '#tours',
        '#calendar',
    ]

    return routes.flatMap((path) =>
        routing.locales.map((locale) => ({
            url: `${baseUrl}/${locale}${path ? `/${path}` : ''}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: path === '' ? 1 : 0.8,
            alternates: {
                languages: {
                    'en': `${baseUrl}/en${path ? `/${path}` : ''}`,
                    'ru': `${baseUrl}/ru${path ? `/${path}` : ''}`,
                    'x-default': `${baseUrl}/en${path ? `/${path}` : ''}`, // Для Google
                },
            },
        }))
    )
}
