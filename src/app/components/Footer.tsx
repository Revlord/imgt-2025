"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[var(--bg-deep)] text-[var(--text-body)] pt-16 pb-8 border-t border-violet-500/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-8 pb-12 border-b border-violet-500/[0.06]">
          {/* Logo and Info */}
          <div className="col-span-2 mb-4 md:mb-0">
            <Link href="/" className="inline-block mb-5">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 1.2 }}>
                <Image
                  src="/ImmerseLogo.svg"
                  alt="ImmerseGT"
                  width={200}
                  height={100}
                  className="h-auto w-[140px] sm:w-[160px] md:w-[180px] opacity-80"
                />
              </motion.div>
            </Link>
            <p className="text-sm text-[var(--text-muted)] mb-2">
              VR/AR Hackathon &middot; 36 hours &middot; Endless possibilities
            </p>
            <p className="font-mono text-xs tracking-wider text-[var(--text-muted)]">
              April 10–12 &middot; ADC XR Makerspace &middot; Georgia Tech
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-display text-sm font-semibold mb-4 text-[var(--text-primary)]">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Schedule", href: "#schedule" },
                { label: "Sponsors", href: "#sponsors" },
                { label: "Speakers", href: "#speakers" },
                { label: "Photos", href: "#photos" },
                { label: "FAQs", href: "#faq" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-mono text-xs tracking-wider text-[var(--text-muted)] hover:text-violet-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="col-span-1">
            <h3 className="font-display text-sm font-semibold mb-4 text-[var(--text-primary)]">
              Connect
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="https://www.instagram.com/immerse.gt"
                  className="font-mono text-xs tracking-wider text-[var(--text-muted)] hover:text-violet-400 transition-colors duration-200"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/immersegt"
                  className="font-mono text-xs tracking-wider text-[var(--text-muted)] hover:text-violet-400 transition-colors duration-200"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <div className="h-px w-16 bg-violet-500/10 my-1" />
              </li>
              <li>
                <Link
                  href="mailto:contact@immersegt.org"
                  className="font-mono text-xs tracking-wider text-[var(--text-muted)] hover:text-violet-400 transition-colors duration-200"
                >
                  Become a Sponsor
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
                  className="font-mono text-xs tracking-wider text-[var(--text-muted)] hover:text-violet-400 transition-colors duration-200"
                >
                  MLH Code of Conduct
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)]">
              Co-Hosted By
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.gtxr.club/">
                <Image src="/gtxr.png" alt="GTXR" width={120} height={30} className="h-7 md:h-8 w-auto opacity-50 hover:opacity-80 transition-opacity" />
              </a>
              <div className="h-5 w-px bg-violet-500/15" />
              <a href="https://www.startup.exchange/">
                <Image src="/sx.png" alt="Startup Exchange" width={120} height={30} className="h-4 md:h-5 w-auto opacity-50 hover:opacity-80 transition-opacity" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="font-mono text-[10px] tracking-wider text-[var(--text-muted)]">
              &copy; 2026 ImmerseGT. All rights reserved
            </p>
            {/* <p className="font-mono text-[10px] tracking-wider text-[var(--text-muted)] mt-1">
              Designed and Developed by{" "}
              <a href="https://revlord.vercel.app" className="hover:text-violet-400 transition-colors duration-200">
                Revanth Reddy Burramukku
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
