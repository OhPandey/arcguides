"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Talent Builder", href: "/talents" },
    { name: "Recommended Builds", href: "/talents/recommended/bumi" }
  ];
  const currentPage =
    navItems
      .slice()
      .sort((a, b) => b.href.length - a.href.length)
      .find((item) => pathname.startsWith(item.href)) ??
    { name: "Page not found" };
  
  const activeItem = navItems
    .slice()
    .sort((a, b) => b.href.length - a.href.length)
    .find((item) =>
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
    );

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-3">

        {/* Title */}
        <Link href="/" className="text-lg font-bold text-white">
          ARC Guides - {currentPage?.name ?? "Page not found"}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm">
          {navItems.map((item) => {
            const isActive = item === activeItem;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 transition-colors ${isActive
                  ? "text-blue-400 font-semibold"
                  : "text-gray-300 hover:text-white"
                  }`}
              >
                {item.name}

                {isActive && (
                  <span className="absolute left-0 bottom-0 h-0.^5 w-full bg-blue-400"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-gray-800 bg-gray-900 md:hidden">
          <div className="flex flex-col px-6 py-3 gap-3">
            {navItems.map((item) => {
              const isActive = item === activeItem;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`transition-colors ${isActive
                    ? "text-blue-400 font-semibold"
                    : "text-gray-300 hover:text-white"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}