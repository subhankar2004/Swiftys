"use client";

import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

export default function NavbarWrapper() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Gallery", link: "/gallery" },
    { name: "Pricing", link: "/pricing" },
    { name: "Concierge", link: "/concierge" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "FAQs", link: "/faqs" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>

      {/* ── DESKTOP (lg: 1024px+) ────────────────────────────────────────────
          Hidden on all screens below 1024px.
          Logo │ Nav items centered │ Book a Call CTA
      ──────────────────────────────────────────────────────────────────────── */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <NavbarButton href="/contact" variant="gradient" className="ml-2">
          Book a Call
        </NavbarButton>
      </NavBody>

      {/* ── MOBILE / TABLET (up to lg: 1023px) ───────────────────────────────
          Visible on phones (0px) through tablets (1023px).
          Hidden at 1024px+ where desktop NavBody takes over.

          Layout:
            Header row: Logo │ Book a Call (small) │ Hamburger toggle
            Dropdown:   Nav links stacked vertically
                        Full-width Book a Call at the bottom
      ──────────────────────────────────────────────────────────────────────── */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />

          {/* Right-side controls: CTA + hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <NavbarButton href="/contact" variant="gradient">
              Book a Call
            </NavbarButton>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            />
          </div>
        </MobileNavHeader>

        {/* Dropdown menu */}
        <MobileNavMenu isOpen={isMobileMenuOpen}>
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                block rounded-lg px-3 py-3 text-sm text-neutral-300
                hover:bg-white/8 hover:text-white
                active:bg-white/12
                transition-colors duration-150
                sm:px-4 sm:py-3.5
              "
            >
              {item.name}
            </a>
          ))}

          {/* Full-width CTA at the bottom of the open menu */}
          <div className="mt-3 border-t border-white/8 pt-4">
            <NavbarButton
              href="/contact"
              variant="gradient"
              className="w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Call
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>

    </Navbar>
  );
}