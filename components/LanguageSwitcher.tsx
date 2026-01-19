'use client';

import { usePathname, useRouter } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
    const t = useTranslations('LanguageSwitcher');
    const locale = useLocale();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();

    const onSelectChange = (nextLocale: string) => {
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    return (
        <div className="flex gap-2">
            <button
                disabled={isPending}
                className={`px-3 py-1 rounded ${locale === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => onSelectChange('en')}
            >
                {t('en')}
            </button>
            <button
                disabled={isPending}
                className={`px-3 py-1 rounded ${locale === 'ru' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                onClick={() => onSelectChange('ru')}
            >
                {t('ru')}
            </button>
        </div>
    );
}
