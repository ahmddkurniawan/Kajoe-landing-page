import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenOrder: () => void;
}

export default function Header({ onOpenOrder }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Tentang Kami', href: '#tentang-kami' },
    { name: 'Produk', href: '#produk' },
    { name: 'Lokasi Cabang', href: '#cabang' },
    { name: 'Hubungi Kami', href: '#hubungi' }
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    
    if (href === '#hubungi') {
      onOpenOrder();
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group"
            id="brand-logo"
          >
            <div className="w-9 h-9 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-105 transition-transform">
              <Leaf className="w-5 h-5 fill-current" />
            </div>
            <span className="text-2xl font-display font-extrabold text-brand-primary tracking-wide">
              Kajoe
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm font-medium text-gray-600 hover:text-brand-primary transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <button
              onClick={onOpenOrder}
              className="px-5 py-2 bg-brand-primary hover:bg-brand-secondary text-white text-sm font-semibold rounded-xl shadow-md shadow-brand-primary/10 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
              id="header-cta-btn"
            >
              Order Sekarang
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 md:hidden rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="block px-4 py-2.5 rounded-lg text-base font-medium text-gray-700 hover:bg-brand-accent-light/30 hover:text-brand-primary transition-all"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 px-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenOrder();
                  }}
                  className="w-full py-3 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-xl shadow-md text-center block transition-all"
                >
                  Order Sekarang
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
