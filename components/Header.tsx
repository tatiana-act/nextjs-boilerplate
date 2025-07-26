import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems: string[] = ['tours', 'calendar', 'faq', 'feedback'];

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/95 backdrop-blur-md'
                    : 'bg-white/10 backdrop-blur-sm'
            }`}
        >
            <nav className="max-w-6xl mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-white hover:text-yellow-300 transition-colors">
                        🌆 Discover Tours
                    </Link>

                    <ul className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item}`}
                                    className="text-white hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
