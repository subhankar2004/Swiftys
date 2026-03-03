"use client";

import { motion } from "framer-motion";
import { FaCarSide, FaShieldAlt, FaTools, FaStar } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import Link from "next/link";



const features = [
  {
    icon: FaCarSide,
    title: "Pickup & Delivery",
    description:
      "Secure vehicle pickup and drop-off with complete discretion, professionalism, and real-time updates.",
    stat: "48h",
    statLabel: "Avg. turnaround",
  },
  {
    icon: FaTools,
    title: "Detailing & Maintenance",
    description:
      "Professional detailing, PPF, ceramic coating, and performance maintenance before every delivery.",
    stat: "100%",
    statLabel: "Hand-finished",
  },
  {
    icon: FaShieldAlt,
    title: "Maximum Security",
    description:
      "24/7 monitored facility with controlled access, advanced surveillance, and climate-controlled bays.",
    stat: "24/7",
    statLabel: "Monitored",
  },
];


function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col rounded-2xl border border-white/8 bg-white/3 p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/30 hover:bg-white/6 sm:p-7 lg:p-8"
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(251,146,60,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Icon */}
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-amber-400 transition-all duration-300 group-hover:border-amber-400/40 group-hover:bg-amber-400/15 sm:h-12 sm:w-12">
        <Icon size={20} />
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-white sm:text-lg">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-neutral-500 sm:text-sm">
        {feature.description}
      </p>

      {/* Stat pill */}
      <div className="mt-6 flex items-center gap-3 border-t border-white/6 pt-5">
        <span className="text-xl font-bold tracking-tight text-white sm:text-2xl">
          {feature.stat}
        </span>
        <span className="text-xs uppercase tracking-widest text-neutral-600">
          {feature.statLabel}
        </span>
      </div>
    </motion.div>
  );
}



export default function ConciergeSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-black via-neutral-950 to-black py-20 text-white sm:py-24 lg:py-32">

      {/* ── Background glows — amber theme replacing indigo ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Warm top-center bloom */}
        <div
          className="absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full blur-[100px] sm:h-[400px] sm:w-[700px]"
          style={{ background: "rgba(251,146,60,0.07)" }}
        />
        {/* Bottom-left depth */}
        <div
          className="absolute -bottom-20 -left-20 h-[250px] w-[300px] rounded-full blur-[90px] sm:h-[350px] sm:w-[450px]"
          style={{ background: "rgba(234,88,12,0.05)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-1.5">
            <FaStar className="text-amber-400 text-[10px]" />
            <span className="text-[11px] font-medium uppercase tracking-widest text-neutral-400">
              White-Glove Service
            </span>
          </div>

          <h2 className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
            Unmatched Concierge
            <br className="hidden sm:block" />
            <span className="text-neutral-400"> Experience</span>
          </h2>

          <p className="mt-5 text-sm leading-relaxed text-neutral-500 sm:text-base">
            Precision services designed to preserve performance, security, and
            excellence — from pickup to final delivery.
          </p>
        </motion.div>

        
        
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/2 px-6 py-7 text-center sm:mt-12 sm:flex-row sm:justify-between sm:text-left lg:mt-14 lg:px-10 lg:py-8"
        >
          <div>
            <p className="text-sm font-semibold text-white sm:text-base">
              Ready to experience white-glove service?
            </p>
            <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
              Get in touch and we'll tailor a concierge plan for your vehicle.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row">
            <Link
              href="/concierge"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-linear-to-r from-amber-400 to-orange-500 px-6 py-2.5 text-sm font-semibold text-black shadow-md shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-orange-500/40 hover:shadow-lg active:translate-y-0"
            >
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              <span className="relative">Learn More</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/6 hover:-translate-y-0.5 active:translate-y-0"
            >
              Book a Call
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}