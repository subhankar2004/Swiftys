"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const companyLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

const supportLinks = [
  { name: "Concierge", href: "/concierge" },
  { name: "Contact", href: "/contact" },
  { name: "FAQs", href: "/faqs" },
  { name: "Book a Call", href: "/contact" },
];

const socialLinks = [
  { icon: FaXTwitter, href: "https://x.com", label: "X / Twitter" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  { icon: FaTiktok, href: "https://tiktok.com", label: "TikTok" },
];



export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#080808] border-t border-white/8">

      
      <div className="mx-auto max-w-7xl border-b border-white/8 px-5 py-5 sm:px-6 md:px-8 md:py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          {/* Nav pills */}
          <nav className="flex flex-wrap gap-1">
            {[...companyLinks, ...supportLinks].slice(0, 5).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-xs text-neutral-400 hover:bg-white/8 hover:text-white transition-all duration-200 sm:px-4 sm:text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Email CTA — mobile: smaller / md+: large */}
          <motion.a
            href="mailto:hello@swiftys.com"
            whileHover={{ x: 4 }}
            transition={{ type: "tween", duration: 0.15 }}
            className="text-base font-bold tracking-tight text-white hover:text-amber-400 transition-colors duration-200 sm:text-lg md:text-2xl lg:text-3xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Hello@Swiftys.com
          </motion.a>
        </div>
      </div>

      
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">

          
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/SwiftysWHITE.png"
                alt="Swiftys"
                width={110}
                height={44}
                className="object-contain sm:w-[130px]"
              />
            </Link>

            <p className="text-sm text-neutral-500 leading-relaxed tracking-wide">
              Premium mobile detailing.
              <br />
              We come to you.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "tween", duration: 0.15 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-neutral-400 hover:border-amber-400/50 hover:text-white transition-colors duration-200 sm:h-10 sm:w-10"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:col-span-2 lg:col-span-3 lg:grid-cols-3">

            {/* Company */}
            <div>
              <h4 className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-neutral-500 sm:mb-5 sm:text-xs">
                Company
              </h4>
              <ul className="flex flex-col gap-2.5 sm:gap-3">
                {companyLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="mb-4 text-[10px] font-semibold uppercase tracking-widest text-neutral-500 sm:mb-5 sm:text-xs">
                Support
              </h4>
              <ul className="flex flex-col gap-2.5 sm:gap-3">
                {supportLinks.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media text column — only shown on lg+ (redundant on mobile where icons exist) */}
            <div className="hidden lg:block">
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-neutral-500">
                Social Media
              </h4>
              <ul className="flex flex-col gap-3">
                {socialLinks.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-400 hover:text-white transition-colors duration-200">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      
      <div className="pointer-events-none select-none w-full leading-none" aria-hidden="true">
        <span
          className="block w-full whitespace-nowrap text-center font-black uppercase tracking-tighter text-white/4.5"
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(40px, 11vw, 220px)",
          }}
        >
          ©Swiftys
        </span>
      </div>

      {/* ── Bottom bar ── */}
      <div className="mx-auto max-w-7xl border-t border-white/8 px-5 py-4 sm:px-6 md:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Swiftys Detailing. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}