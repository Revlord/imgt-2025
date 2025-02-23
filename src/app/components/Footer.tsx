"use client"
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0c061c] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-gray-800">
          {/* Logo and Info Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/ImmerseLogo.svg"
                alt="ImmerseGT"
                width={200}
                height={100}
                className="h-auto w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-4">
              ImmerseGT 2025 - XR hackathon. 36 hours. Endless possibilities
            </p>
            <p className="text-gray-400">
              April 4th-6th | Klaus Atrium | Georgia Tech
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/schedule" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Speakers 
                </Link>
              </li>
              <li>
                <Link href="/tracks" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Tracks
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-gray-400 hover:text-purple-400 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="/sponsor" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Become a Sponsor
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p className="text-gray-400">Co-Hosted By</p>
            <Image
              src="/gtxr.png"
              alt="GTXR"
              width={120}
              height={30}
              className="h-9 w-auto"
            />
            <div className="border-l border-gray-600 h-8"></div>
            <Image
              src="/sx.png"
              alt="Startup Exchange"
              width={120}
              height={30}
              className="h-8 w-auto"
            />
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-gray-400">
                &copy; 2025 ImmerseGT. All rights reserved &nbsp;|&nbsp; Designed and Developed by <span className='hover:cursor-pointer' onClick={() => (window.location.href = "https://revlord.vercel.app")}>Revanth Burramukku</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;