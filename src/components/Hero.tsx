import React from 'react';
import { ShieldCheck, Flame, Leaf, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenOrder: () => void;
}

export default function Hero({ onOpenOrder }: HeroProps) {
  const handleScrollToProducts = () => {
    const element = document.querySelector('#produk');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-radial from-brand-accent-light/40 via-white to-brand-bg/20">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-brand-primary/10 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-brand-accent/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Pill Label */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-secondary/10 border border-brand-secondary/10 text-brand-secondary text-xs sm:text-sm font-semibold"
            >
              <Leaf className="w-4 h-4 fill-current animate-pulse text-brand-primary" />
              <span>🌿 100% Minyak Kayu Putih Asli & Murni</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-gray-900 tracking-tight leading-tight"
              >
                Kehangatan Alami,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                  Perlindungan Sejati
                </span>{' '}
                dari Minyak Kayu Putih Asli
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-600 text-base sm:text-lg max-w-xl font-light leading-relaxed"
              >
                Dibuat tanpa bahan kimia tambahan untuk kehangatan ekstra yang bertahan lama, aroma herbal yang melegakan, serta meredakan kembung, masuk angin, dan pegal-pegal.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onOpenOrder}
                className="px-8 py-4 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded-2xl shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                id="hero-cta-buy-btn"
              >
                Beli Sekarang
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={handleScrollToProducts}
                className="px-8 py-4 border-2 border-brand-primary/20 hover:border-brand-primary text-brand-primary font-bold rounded-2xl hover:bg-brand-primary/5 transition-all text-center cursor-pointer"
                id="hero-cta-learn-btn"
              >
                Lihat Ukuran & Harga
              </button>
            </motion.div>

            {/* Badges/USP Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-150"
            >
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-green-100 text-green-700 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">100% Pure</h4>
                  <p className="text-xs text-gray-500">Bebas Campuran</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-amber-100 text-amber-700 mt-0.5">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">Hangat Alami</h4>
                  <p className="text-xs text-gray-500">Tahan Lebih Lama</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700 mt-0.5">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">Aroma Segar</h4>
                  <p className="text-xs text-gray-500">Melegakan Nafas</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column - Premium CSS/SVG Bottle Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative w-full max-w-[380px] aspect-square flex items-center justify-center"
            >
              {/* Spinning Leaves background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 via-brand-secondary/5 to-transparent rounded-full blur-2xl -z-10" />
              
              {/* Animated Floating Leaves */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute top-10 right-4 text-brand-primary opacity-80"
              >
                <Leaf className="w-10 h-10 fill-current" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0], rotate: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-16 left-6 text-brand-secondary opacity-70"
              >
                <Leaf className="w-8 h-8 fill-current" />
              </motion.div>

              {/* Main SVG Bottle */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                className="relative z-10 w-72 filter drop-shadow-[0_20px_40px_rgba(30,70,32,0.25)]"
              >
                <svg viewBox="0 0 400 600" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer Bottle Body Back Reflection */}
                  <path d="M140,120 L260,120 C275,120 280,130 280,145 L280,180 C280,195 295,210 310,225 L320,240 C340,270 340,290 340,320 L340,510 C340,545 320,565 285,565 L115,565 C80,565 60,545 60,510 L60,320 C60,290 60,270 80,240 L90,225 C105,210 120,195 120,180 L120,145 C120,130 125,120 140,120 Z" fill="rgba(240, 248, 240, 0.5)" />
                  
                  {/* Liquid (Wood Cajuput Oil Light Green) */}
                  <path d="M70,330 L330,330 L330,510 C330,535 315,550 290,550 L110,550 C85,550 70,535 70,510 Z" fill="url(#liquidGradient)" />
                  
                  {/* Bubbles inside liquid */}
                  <circle cx="120" cy="480" r="6" fill="rgba(255,255,255,0.4)" />
                  <circle cx="150" cy="420" r="4" fill="rgba(255,255,255,0.3)" />
                  <circle cx="280" cy="460" r="5" fill="rgba(255,255,255,0.4)" />
                  <circle cx="250" cy="380" r="7" fill="rgba(255,255,255,0.3)" />
                  <circle cx="180" cy="510" r="3" fill="rgba(255,255,255,0.5)" />
                  <circle cx="210" cy="440" r="4" fill="rgba(255,255,255,0.3)" />
                  <circle cx="110" cy="360" r="5" fill="rgba(255,255,255,0.4)" />

                  {/* Bottle Front Gloss & Glass Outline */}
                  <path d="M140,120 L260,120 C275,120 280,130 280,145 L280,180 C280,195 295,210 310,225 L320,240 C340,270 340,290 340,320 L340,510 C340,545 320,565 285,565 L115,565 C80,565 60,545 60,510 L60,320 C60,290 60,270 80,240 L90,225 C105,210 120,195 120,180 L120,145 C120,130 125,120 140,120 Z" fill="none" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="6" />
                  <path d="M140,120 L260,120 C275,120 280,130 280,145 L280,180 C280,195 295,210 310,225 L320,240 C340,270 340,290 340,320 L340,510 C340,545 320,565 285,565 L115,565 C80,565 60,545 60,510 L60,320 C60,290 60,270 80,240 L90,225 C105,210 120,195 120,180 L120,145 C120,130 125,120 140,120 Z" fill="none" stroke="rgba(30, 70, 32, 0.15)" strokeWidth="2" />

                  {/* Wooden Cap */}
                  <rect x="130" y="50" width="140" height="70" rx="8" fill="url(#capGradient)" />
                  {/* Cap Ring */}
                  <rect x="120" y="110" width="160" height="15" rx="4" fill="#8c5828" />
                  {/* Wooden grains on cap */}
                  <path d="M140,65 Q180,58 220,68 T260,60" fill="none" stroke="#663e18" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                  <path d="M145,85 Q190,82 210,92 T255,80" fill="none" stroke="#663e18" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                  <path d="M135,100 Q170,95 230,105 T265,95" fill="none" stroke="#663e18" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

                  {/* Product Label (Minimalist and Elegant) */}
                  <rect x="100" y="270" width="200" height="180" rx="16" fill="url(#labelGradient)" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.06))" />
                  
                  {/* Label Inner Border */}
                  <rect x="108" y="278" width="184" height="164" rx="10" fill="none" stroke="#b27a3c" strokeWidth="1.5" opacity="0.5" />
                  
                  {/* Label Content */}
                  <text x="200" y="325" fontFamily="'Outfit', sans-serif" fontSize="13" fontWeight="bold" fill="#b27a3c" letterSpacing="4" textAnchor="middle">KAJOE</text>
                  
                  {/* Little Leaf icon inside label */}
                  <path d="M200,340 C193,340 188,347 188,354 C188,361 200,372 200,372 C200,372 212,361 212,354 C212,347 207,340 200,340 Z" fill="#2d5a27" />
                  <path d="M200,340 L200,372" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />

                  <text x="200" y="395" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="12" fontWeight="800" fill="#1e4620" letterSpacing="1" textAnchor="middle">MINYAK KAYU PUTIH</text>
                  <text x="200" y="412" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="11" fontWeight="bold" fill="#b27a3c" letterSpacing="2" textAnchor="middle">100% ASLI & MURNI</text>
                  <text x="200" y="430" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8" fontWeight="medium" fill="#666" textAnchor="middle">Makassar, Indonesia</text>

                  {/* High Gloss Reflections on Glass (Left side vertical white gradient bar) */}
                  <path d="M78,320 Q70,380 72,480" fill="none" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="8" strokeLinecap="round" />
                  <path d="M88,255 Q95,245 105,235" fill="none" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="6" strokeLinecap="round" />

                  {/* Definitions */}
                  <defs>
                    {/* Liquid Oil Gradient */}
                    <linearGradient id="liquidGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8db07c" stopOpacity="0.85" />
                      <stop offset="60%" stopColor="#5b8c4c" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#3c6e2d" stopOpacity="0.95" />
                    </linearGradient>
                    
                    {/* Cap wood Gradient */}
                    <linearGradient id="capGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#a36e3b" />
                      <stop offset="50%" stopColor="#b88350" />
                      <stop offset="100%" stopColor="#8c5828" />
                    </linearGradient>

                    {/* Label Creamy Linen Gradient */}
                    <linearGradient id="labelGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#fdfbf7" />
                      <stop offset="100%" stopColor="#f5efe4" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Floating Leaf Shadows */}
              <div className="absolute bottom-2 w-48 h-5 bg-black/15 rounded-full blur-xl filter opacity-80" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
