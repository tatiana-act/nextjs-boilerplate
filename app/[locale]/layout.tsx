import { Analytics } from '@vercel/analytics/next';
import '../globals.css';
import React from "react";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

import type { Graph } from 'schema-dts';

const graph: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://austin-city-tours.vercel.app/#tatiana',
      name: 'Tatiana Orlova',
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Austin city tour guide',
        qualifications: 'city expert',
      },
    },
    {
      '@type': 'AboutPage',
      '@id': 'https://austin-city-tours.vercel.app/#about',
      url: 'https://austin-city-tours.vercel.app',
      name: "Татьяна Орлова, ваш персональный гид",
      inLanguage: 'ru-RU',
      description: 'Austin City Tours - Город, который ты ещё не знаешь',
      mainEntity: { '@id': 'https://austin-city-tours.vercel.app/#tatiana' },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://austin-city-tours.vercel.app',
      url: 'https://austin-city-tours.vercel.app',
      name: "Austin City Tours - Город, который ты ещё не знаешь",
      inLanguage: 'ru-RU',
      about: { '@id': 'https://austin-city-tours.vercel.app/#about' },
      mainEntity: { '@id': 'https://austin-city-tours.vercel.app/#tatiana' },
    },
  ],
};

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    metadataBase: new URL('https://austin-city-tours.vercel.app'),
    title: {
      default: t('title'),
      template: '%s | Austin City Tours',
    },
    description: t('description'),
    keywords: t('keywords').split(',').map((k: string) => k.trim()),
    verification: {
      google: "B7Ct-qStJLf0MwYWx5zZwurbBgaNG14Zr_uRJkOJaiQ"
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://austin-city-tours.vercel.app',
      siteName: 'Austin City Tours',
      images: [
        {
          url: '/acustom.jpg',
          width: 696,
          height: 524,
          alt: 'Austin City Tours',
        },
      ],
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      type: 'website',
    },
    alternates: {
      languages: {
        'en': '/en',
        'ru': '/ru',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
