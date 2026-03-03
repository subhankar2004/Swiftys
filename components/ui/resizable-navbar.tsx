"use client";

import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";

// Types

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: { name: string; link: string }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
}

//Navbar

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll(); 
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 80);
  });

  return (
    <div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child as React.ReactElement<any>, { visible });
      })}
    </div>
  );
};



export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(14px)" : "blur(0px)",
        boxShadow: visible
          ? "0 4px 32px rgba(0,0,0,0.22), 0 1px 2px rgba(0,0,0,0.1)"
          : "none",
        // Shrinks to a pill on scroll — responsive via JS since Tailwind can't animate
        width: visible ? "82%" : "100%",
        y: visible ? 10 : 0,
        backgroundColor: visible ? "rgba(8,8,8,0.88)" : "rgba(0,0,0,0)",
        borderRadius: visible ? "9999px" : "0px",
      }}
      transition={{ type: "tween", duration: 0.22, ease: "easeInOut" }}
      className={cn(
        // Mobile-first: hidden by default, flex only at lg (1024px+)
        "relative z-50 mx-auto hidden w-full max-w-7xl flex-row items-center justify-between px-6 py-3 lg:flex",
        className
      )}
    >
      {children}
    </motion.div>
  );
};


export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex flex-1 items-center justify-center gap-0.5 text-[13px] font-medium lg:text-sm",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-2.5 py-2 text-neutral-300 hover:text-white transition-colors duration-150 lg:px-3"
        >
          {hovered === idx && (
            <motion.div
              layoutId="nav-hover"
              className="absolute inset-0 rounded-full bg-white/8"
              transition={{ type: "tween", duration: 0.15 }}
            />
          )}
          <span className="relative z-20 whitespace-nowrap">{item.name}</span>
        </a>
      ))}
    </div>
  );
};


export const MobileNav = ({ children, className, visible }: MobileNavProps) => (
  <motion.div
    animate={{
      backdropFilter: visible ? "blur(14px)" : "blur(0px)",
      backgroundColor: visible ? "rgba(6,6,6,0.97)" : "rgba(8,8,8,0.92)",
    }}
    transition={{ type: "tween", duration: 0.22, ease: "easeInOut" }}
    className={cn(
      // Mobile-first: flex on all small screens, hidden at lg+
      "relative z-50 flex w-full flex-col px-4 py-3 lg:hidden",
      // Add horizontal padding boost at wider mobile/tablet sizes
      "sm:px-6 md:px-8",
      // Bottom rounding appears only when scrolled (pill effect)
      visible && "shadow-2xl",
      className
    )}
  >
    {children}
  </motion.div>
);


export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => (
  <div
    className={cn(
      "flex w-full items-center justify-between",
      className
    )}
  >
    {children}
  </div>
);



export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ type: "tween", duration: 0.22, ease: "easeInOut" }}
        className={cn("w-full overflow-hidden", className)}
      >
        {/* Inner padding: tighter on phones, more breathing room on tablets */}
        <div className="flex flex-col gap-0.5 pb-4 pt-2 sm:pb-5 sm:pt-3">
          {children}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);


export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 active:bg-white/20"
  >
    {isOpen
      ? <IconX size={20} className="sm:w-[22px] sm:h-[22px]" />
      : <IconMenu2 size={20} className="sm:w-[22px] sm:h-[22px]" />
    }
  </button>
);


export const NavbarLogo = () => (
  <a
    href="/"
    className="relative z-20 flex shrink-0 items-center"
  >
    <Image
      src="/SwiftysWHITE.png"
      alt="Swiftys logo"
      width={120}
      height={48}
      // Tailwind controls rendered size, Next.js width/height is intrinsic ratio only
      className="h-auto w-[90px] object-contain sm:w-[105px] lg:w-[115px]"
    />
  </a>
);


type NavbarButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
  onClick?: () => void;
};

export const NavbarButton = ({
  href,
  children,
  className,
  variant = "primary",
  onClick,
}: NavbarButtonProps) => {
  const base =
    "shrink-0 inline-block text-center font-semibold rounded-full transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 " +
    // Mobile-first sizing — small on phones, normal on sm+
    "px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm";

  const variants = {
    primary: "bg-white text-black shadow",
    secondary: "border border-white/30 text-white hover:bg-white/10",
    dark: "bg-black text-white shadow-md",
    gradient:
      "bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold shadow-md",
  };

  return (
    <a href={href} onClick={onClick} className={cn(base, variants[variant], className)}>
      {children}
    </a>
  );
};