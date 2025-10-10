"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="GovIQ"
                className="h-10 w-auto"
              />
              <div className="flex flex-col justify-center h-10">
                <h1 className="text-xl font-bold text-gov-blue leading-tight">
                  GovIQ
                </h1>
                <p className="text-xs text-gov-gray leading-tight">Solutions</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#solutions"
                className="text-gov-gray hover:text-gov-blue transition-colors"
              >
                Solutions
              </a>
              <a
                href="#security"
                className="text-gov-gray hover:text-gov-blue transition-colors"
              >
                Security
              </a>
              <a
                href="#about"
                className="text-gov-gray hover:text-gov-blue transition-colors"
              >
                About
              </a>
              <a href="#contact" className="btn-primary">
                Contact Us
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gov-gray hover:text-gov-blue"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#solutions"
                className="block px-3 py-2 text-gov-gray hover:text-gov-blue"
              >
                Solutions
              </a>
              <a
                href="#security"
                className="block px-3 py-2 text-gov-gray hover:text-gov-blue"
              >
                Security
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gov-gray hover:text-gov-blue"
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gov-blue font-semibold"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
