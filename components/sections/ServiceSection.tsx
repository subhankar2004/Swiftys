"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";



const sections = [
  {
    eyebrow: "Premium Storage",
    heading: "Sustainable Luxury",
    body: "Premium automotive storage and concierge services crafted with precision, innovation, and uncompromising quality — for the cars that deserve nothing less.",
    cta: { label: "View Services", href: "/services" },
    image: "/mclarenwebsite.jpg",
    imageAlt: "McLaren luxury vehicle",
    reversed: false,
  },
  {
    eyebrow: "Advanced Security",
    heading: "Autonomous Intelligence",
    body: "Advanced security systems and intelligent vehicle care ensure your automotive investment is protected and preserved around the clock.",
    cta: { label: "Learn More", href: "/concierge" },
    image: "/swiftypic7.jpg",
    imageAlt: "Swiftys facility",
    reversed: true,
  },
];


function ServiceBlock({
  eyebrow,
  heading,
  body,
  cta,
  image,
  imageAlt,
  reversed,
  index,
}: (typeof sections)[0] & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: 0.05 }}
      className={`grid grid-cols-1 items-center gap-10 sm:gap-12 md:grid-cols-2 md:gap-16 lg:gap-20`}
    >
      
      <div className={reversed ? "md:order-2" : ""}>
        {/* Eyebrow */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3.5 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          <span className="text-[11px] font-medium uppercase tracking-widest text-neutral-400">
            {eyebrow}
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-light tracking-tight sm:text-4xl md:text-4xl lg:text-5xl">
          {heading}
        </h2>

        {/* Divider */}
        <div className="mt-5 h-px w-12 bg-linear-to-r from-amber-400 to-orange-500" />

        {/* Body */}
        <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-500 sm:text-base">
          {body}
        </p>

        {/* CTA */}
        <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
          <Link
            href={cta.href}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-amber-400 to-orange-500 px-6 py-2.5 text-sm font-semibold text-black shadow-md shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-orange-500/40 hover:shadow-lg active:translate-y-0"
          >
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            <span className="relative">{cta.label}</span>
            <svg className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 16 16">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition-colors duration-200 hover:text-white"
          >
            Book a consultation
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 16 16">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      
      
      <div className={`relative ${reversed ? "md:order-1" : ""}`}>
        {/* Ambient glow — amber replacing cyan */}
        <div
          className="pointer-events-none absolute -inset-4 rounded-3xl opacity-50 blur-3xl transition-opacity duration-500 group-hover:opacity-80 sm:-inset-6"
          style={{
            background: "radial-gradient(ellipse at center, rgba(251,146,60,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Image frame */}
        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ type: "tween", duration: 0.35 }}
          className="relative overflow-hidden rounded-2xl border border-white/[0.07] shadow-2xl"
        >
          <Image
            src={image}
            alt={imageAlt}
            width={700}
            height={500}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Subtle inner vignette on image */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.35) 100%)",
            }}
          />

          {/* Corner badge */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] font-medium uppercase tracking-widest text-neutral-300">
              Swiftys
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}



export default function ServiceSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-neutral-950 to-black py-20 text-white sm:py-24 lg:py-32">

      {/* Background depth glows */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full blur-[100px] sm:h-[450px] sm:w-[450px]"
          style={{ background: "rgba(251,146,60,0.05)" }}
        />
        <div
          className="absolute left-0 bottom-1/4 h-[250px] w-[250px] rounded-full blur-[90px] sm:h-[400px] sm:w-[400px]"
          style={{ background: "rgba(234,88,12,0.04)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">

       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-16 text-center sm:mb-20 lg:mb-24"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-neutral-600">
            What We Offer
          </p>
          <h2 className="text-3xl font-light tracking-tight sm:text-4xl">
            Built for the Discerning
          </h2>
        </motion.div>

        
        <div className="space-y-20 sm:space-y-24 lg:space-y-32">
          {sections.map((s, i) => (
            <ServiceBlock key={s.heading} {...s} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}