'use client';

import React, { useState, useEffect } from "react";
import Image from 'next/image';

interface AboutTourProps {
    eventUrl: string,
    eventImage: string,
    tourName: string,
}

const AboutTour: React.FC<AboutTourProps> = ({ eventImage, eventUrl, tourName }) => {
    const [dimensions, setDimensions] = useState<{ w: number; h: number } | null>(null);
    useEffect(() => {
        const img = new window.Image();
        img.src = eventImage;
        img.onload = () => {
            setDimensions({ w: img.naturalWidth, h: img.naturalHeight });
        };
    }, [eventImage]);

    if (!dimensions) {
        return (
            <div className="form-body flex items-center justify-center p-8">
                <div className="animate-spin h-8 w-8 border-4 border-blue-500 rounded-full border-t-transparent"></div>
            </div>
        );
    }
    return <div className="form-body">
                <a
                    href={eventUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline mt-2 block"
                >
                    📬 Посмотреть на Facebook
                </a>

                <Image
                    src={eventImage}
                    alt={`Tour ${tourName} Image`}
                    layout="intrinsic"
                    width={dimensions.w}
                    height={dimensions.h}
                    objectFit="contain"
                    className="rounded"
                />
            </div>
}

export default AboutTour;