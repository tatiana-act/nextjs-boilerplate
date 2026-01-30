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
        <div className="flex gap-4">
            <button
                className={`text-2xl font-bold transition-all duration-200 ${locale === 'en'
                    ? 'text-yellow-400 scale-110'
                    : 'text-white hover:text-yellow-200'
                    }`}
                onClick={() => onSelectChange('en')}
                disabled={isPending}
            >
                {t('en')}
            </button>
            <button
                className={`text-2xl font-bold transition-all duration-200 ${locale === 'ru'
                    ? 'text-yellow-400 scale-110'
                    : 'text-white hover:text-yellow-200'
                    }`}
                onClick={() => onSelectChange('ru')}
                disabled={isPending}
            >
                {t('ru')}
            </button>
        </div>
    );
}
