"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PageLoader, { pageVariants } from "@/components/ui/PageLoader";
import NavbarWrapper from "@/components/layout/NavbarWrapper";
import Footer from "@/components/layout/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loaderDone, setLoaderDone] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-x-hidden">
      
      <PageLoader onComplete={() => setLoaderDone(true)} />

      
      <NavbarWrapper />

      
      <motion.main
        className="flex-1 pt-20"
        variants={pageVariants}
        initial="hidden"
        animate={loaderDone ? "visible" : "hidden"}
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
}