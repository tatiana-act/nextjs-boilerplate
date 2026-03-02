'use client';

import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { useTranslations } from "next-intl";

interface AboutTourProps {
    eventUrl: string,
    eventImage: string,
    tourName: string,
    onClose?: () => void,
}

const AboutTour: React.FC<AboutTourProps> = ({ eventImage, eventUrl, tourName, onClose }) => {
    const [dimensions, setDimensions] = useState<{ w: number; h: number } | null>(null);
    const t = useTranslations('AboutTour');
    useEffect(() => {
        const img = new window.Image();
        img.src = `/${eventImage}`;
        img.onload = () => {
            setDimensions({ w: img.naturalWidth, h: img.naturalHeight });
        };
        img.onerror = () => {
            onClose?.();
        };
    }, [eventImage, onClose]);

    if (!dimensions) {
        return (
            <div className="form-body flex items-center justify-center p-8">
                <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
            </div>
        );
    }
    return <div className="form-body">
        {/*<span><FaFacebook color="#1877F2" /></span>*/}
        <a href={eventUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-2 block"
        >{t('fb')}</a>

        <Image
            src={`/${eventImage}`}
            alt={`Tour ${tourName} Image`}
            width={dimensions.w}
            height={dimensions.h}
            style={{ objectFit: 'contain' }}
            className="rounded"
        />
    </div>
}

export default AboutTour;