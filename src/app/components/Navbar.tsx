"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav 
            className={`
                fixed top-0 w-full z-50 transition-all duration-300
                ${scrolled 
                    ? 'bg-violet-950/80 backdrop-blur-md shadow-lg' 
                    : 'bg-transparent'
                }
            `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <img 
                                src="/ImmerseGTlogo.svg"
                                alt="Logo" 
                                className="h-24 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            <Link 
                            href="/schedule"
                            className="text-violet-200/80 hover:text-violet-700 transition-colors"
                            >
                            Schedule
                            </Link>
                            <Link
                            href="/sponsors"
                            className="text-violet-200/80 hover:text-violet-700 transition-colors"
                            >
                            Sponsors
                            </Link>
                            <Link
                            href="/speakers"
                            className="text-violet-200/80 hover:text-violet-700 transition-colors"
                            >
                            Speakers
                            </Link>
                            <Link
                            href="/tracks"
                            className="text-violet-200/80 hover:text-violet-700 transition-colors"
                            >
                            Tracks
                            </Link>
                            <Link
                            href="/faqs"
                            className="text-violet-200/80 hover:text-violet-700 transition-colors"
                            >
                            FAQs
                            </Link>
                            <button
                                className="px-6 py-2 rounded-full bg-gradient-to-r from-violet-600 to-violet-800 text-white font-medium hover:from-violet-700 hover:to-violet-900 transition-colors duration-300"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center justify-center w-10 h-10 text-violet-200/80 hover:text-violet-700"
                        aria-label="Main menu"
                    >
                        <div className="relative w-6 h-6">
                        <span
                            className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                            isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                            }`}
                        />
                        <span
                            className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                            isOpen ? 'opacity-0' : 'opacity-100'
                            }`}
                        />
                        <span
                            className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                            isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                            }`}
                        />
                        </div>
                    </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`
                    md:hidden fixed inset-0 bg-violet-950/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
                style={{ top: '64px' }}
            >
                <div className="p-4 space-y-6">
                    <Link 
                        href="/about"
                        className="block text-violet-200/80 hover:text-violet-700 transition-colors text-lg py-2"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <Link 
                        href="/projects"
                        className="block text-violet-200/80 hover:text-violet-700 transition-colors text-lg py-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Projects
                    </Link>
                    <Link 
                        href="/contact"
                        className="block text-violet-200/80 hover:text-violet-700 transition-colors text-lg py-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                    <button
                        className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-violet-800 text-white font-medium hover:from-violet-700 hover:to-violet-900 transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                    >
                        Apply Now
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;