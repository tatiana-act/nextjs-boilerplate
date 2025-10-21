import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import React from "react";

import type {Graph} from 'schema-dts';

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
            mainEntity: {'@id': 'https://austin-city-tours.vercel.app/#tatiana'},
        },
        {
            '@type': 'WebPage',
            '@id': 'https://austin-city-tours.vercel.app',
            url: 'https://austin-city-tours.vercel.app',
            name: "Austin City Tours - Город, который ты ещё не знаешь",
            inLanguage: 'ru-RU',
            about: {'@id': 'https://austin-city-tours.vercel.app/#about'},
            mainEntity: {'@id': 'https://austin-city-tours.vercel.app/#tatiana'},
        },
    ],
};

export const metadata: Metadata = {
  title: 'Austin City Tours - Город, который ты ещё не знаешь',
  description:
    'Присоединяйтесь к экскурсиям и откройте для себя скрытые жемчужины, богатую историю и яркую культуру нашего города!',
    openGraph: {
      title: 'Austin City Tours - Город, который ты ещё не знаешь',
      description: 'Присоединяйтесь к экскурсиям и откройте для себя скрытые жемчужины, богатую историю и яркую культуру нашего города!',
      url: 'https://austin-city-tours.vercel.app',
      siteName: 'Austin tours',
      images: [
            {
                url: 'https://austin-city-tours.vercel.app/acustom.jpg',
                width: 696,
                height: 524,
            },
        ],
        locale: 'ru_RU',
        type: 'website',
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
              __html: JSON.stringify(graph).replace(/</g, '\\u003c'),
          }}
      />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
