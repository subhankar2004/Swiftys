"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/mclarenwebsite3.jpg",
  "/mclarenwebsite4.jpg",
  "/swiftypic1.jpg",
  "/swiftypic2.jpg",
  "/swiftypic5.jpg",
  "/swiftypic6.jpg",
  "/swiftypic7.jpg",
  "/mclarenwebsite.jpg",
  "/mclarenwebsite2.jpg",
  "/111.jpg",
  "/ferrariwebsite.jpg",
  "/audiswift26.jpg",
  "/audiswift27.jpg",
  "/audiswift4.jpg",
  "/audiswift5.jpg",
  "/audiswift7.jpg",
];

// Pinterest columns: hand-assign aspect ratios per column so they feel organic.
// Each sub-array is one column. Values are Tailwind aspect-ratio or custom heights.
const COLUMNS: { src: string; tall: boolean }[][] = [
  [
    { src: images[0], tall: true },
    { src: images[4], tall: false },
    { src: images[8], tall: true },
    { src: images[12], tall: false },
  ],
  [
    { src: images[1], tall: false },
    { src: images[5], tall: true },
    { src: images[9], tall: false },
    { src: images[13], tall: true },
  ],
  [
    { src: images[2], tall: true },
    { src: images[6], tall: false },
    { src: images[10], tall: true },
    { src: images[14], tall: false },
  ],
  [
    { src: images[3], tall: false },
    { src: images[7], tall: true },
    { src: images[11], tall: false },
    { src: images[15], tall: true },
  ],
];

// Mobile shows a flat list, first 6 images only, in a 2-col grid
const MOBILE_IMAGES = images.slice(0, 6);

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const mobileVisible = showAll ? MOBILE_IMAGES : MOBILE_IMAGES.slice(0, 4);

  return (
    <section className="bg-linear-to-b from-neutral-950 to-black text-white py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
            Our Facility &amp; Vehicles
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto text-sm sm:text-base">
            A curated look into our luxury automotive detailing environment.
          </p>
        </div>

        
        <div className="lg:hidden">
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
            {mobileVisible.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onClick={() => setLightbox(src)}
                className="relative overflow-hidden rounded-xl cursor-pointer group"
                // Alternate tall/short to give a mini-pinterest feel
                style={{ aspectRatio: i % 3 === 0 ? "3/4" : "1/1" }}
              >
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Show more / less toggle */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowAll((p) => !p)}
              className="text-sm font-medium text-neutral-400 border border-neutral-700 rounded-full px-6 py-2 hover:border-white hover:text-white transition-all duration-200"
            >
              {showAll ? "Show less" : `Show more (${MOBILE_IMAGES.length - 4} more)`}
            </button>
          </div>
        </div>

       
        <div className="hidden lg:grid grid-cols-4 gap-4 xl:gap-5 items-start">
          {COLUMNS.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4 xl:gap-5">
              {col.map(({ src, tall }, itemIdx) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: colIdx * 0.08 + itemIdx * 0.06 }}
                  onClick={() => setLightbox(src)}
                  className="relative overflow-hidden rounded-2xl cursor-pointer group"
                  style={{ aspectRatio: tall ? "3/4" : "4/3" }}
                >
                  <Image
                    src={src}
                    alt={`Gallery ${colIdx}-${itemIdx}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 1280px) 25vw, 320px"
                  />

                  {/* Hover overlay with subtle info */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition duration-300">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span className="text-xs font-medium text-white/80 tracking-wide uppercase">
                        Swiftys Detail
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

      </div>

      
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src={lightbox}
                alt="Gallery preview"
                width={1200}
                height={900}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              {/* Close button */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center text-lg hover:bg-black/90 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}