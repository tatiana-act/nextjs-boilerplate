'use client';

import { useState } from 'react';
// import { FacebookEmbed } from 'react-social-media-embed';

// Base interface for social media embeds
interface SocialMediaEmbedProps {
    url: string;
    width?: number;
    className?: string;
}

// Extended interface for Facebook-specific props
interface FacebookPostProps extends SocialMediaEmbedProps {
    showCaption?: boolean;
}

const FacebookPost: React.FC<FacebookPostProps> = ({ url, className }) => {
    const [error] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    {/*
    useEffect(() => {
        if (isVisible && typeof window !== 'undefined' && window.FB) {
            try {
                window.FB.XFBML.parse();
            } catch (err) {
                setError('Failed to load Facebook post. Please check the URL or try again later.');
            }
        }
    }, [isVisible]); */}

    if (error) {
        return (
            <div className="text-red-500 text-center p-4 bg-red-100 rounded-lg">
                {error}
                <a
                    href={url}
                    className="text-blue-500 underline ml-2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View post on Facebook
                </a>
            </div>
        );
    }

    return (
        <div className={`flex flex-col items-center ${className}`}>
            {!isVisible && (
                <button
                    onClick={() => setIsVisible(true)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Expand
                </button>
            )}
            <div
                className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 hidden'}`}
            >
                {/*isVisible && <FacebookEmbed url={url} width={width} />*/}
            </div>
        </div>
    );
};

/*declare global {
    interface Window {
        FB: any;
    }
}*/

export default FacebookPost;