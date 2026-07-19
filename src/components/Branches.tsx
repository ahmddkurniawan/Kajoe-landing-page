import React, { useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Branches() {
  const branches = [
    {
      id: 'makassar',
      city: 'Makassar (Pusat)',
      address: 'Jl. Somba Opu No. 120, Makassar, Sulawesi Selatan',
      mapsUrl: 'https://maps.google.com/?q=Kajoe+Minyak+Kayu+Putih+Somba+Opu+Makassar',
      phone: '+62 812-3456-7890',
      hours: '08:00 - 20:00 WITA',
      desc: 'Showroom utama kami terletak di pusat kota Makassar. Anda bisa merasakan dan membeli langsung minyak kayu putih segar hasil penyulingan terbaru.',
      coordinates: 'S 5.1432, E 119.4121'
    },
    {
      id: 'jakarta',
      city: 'Jakarta',
      address: 'Ruko Inkopal Blok F-12, Kelapa Gading, Jakarta Utara',
      mapsUrl: 'https://maps.google.com/?q=Ruko+Inkopal+Kelapa+Gading+Jakarta',
      phone: '+62 812-9876-5432',
      hours: '09:00 - 21:00 WIB',
      desc: 'Cabang distribusi utama untuk wilayah Jabodetabek. Menjamin pengiriman yang cepat dan ongkos kirim yang lebih murah untuk wilayah barat Indonesia.',
      coordinates: 'S 6.1524, E 106.8921'
    },
    {
      id: 'surabaya',
      city: 'Surabaya',
      address: 'Jl. Dharmahusada Indah No. 45, Surabaya, Jawa Timur',
      mapsUrl: 'https://maps.google.com/?q=Dharmahusada+Indah+Surabaya',
      phone: '+62 812-4455-6677',
      hours: '09:00 - 20:00 WIB',
      desc: 'Menjangkau pelanggan setia kami di wilayah Jawa Timur dan sekitarnya. Stok lengkap dan selalu tersedia untuk pengiriman instant kurir.',
      coordinates: 'S 7.2654, E 112.7758'
    }
  ];

  const [activeBranchId, setActiveBranchId] = useState('makassar');
  const activeBranch = branches.find(b => b.id === activeBranchId) || branches[0];

  return (
    <section id="cabang" className="py-24 bg-white relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/4 -right-24 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -left-24 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-accent">Jaringan Kami</span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-gray-900 tracking-tight">
            Sudah Hadir di 3 Kota Besar
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Dapatkan Minyak Kayu Putih Kajoe langsung di kota terdekat Anda untuk pengiriman instan yang aman, murah, dan cepat.
          </p>
        </div>

        {/* Dynamic Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column - 3 Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {branches.map((b) => (
              <motion.div
                key={b.id}
                onClick={() => setActiveBranchId(b.id)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between relative ${
                  activeBranchId === b.id
                    ? 'bg-brand-accent-light/40 border-brand-accent/30 shadow-md ring-1 ring-brand-accent/25'
                    : 'bg-white border-gray-150 hover:border-gray-300 hover:bg-gray-50/50'
                }`}
                whileTap={{ scale: 0.98 }}
              >
                {/* Accent line on left for active */}
                {activeBranchId === b.id && (
                  <div className="absolute left-0 top-6 bottom-6 w-1 bg-brand-accent rounded-r" />
                )}

                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-display font-bold text-gray-900 flex items-center gap-2">
                      <MapPin className={`w-5 h-5 ${activeBranchId === b.id ? 'text-brand-accent' : 'text-gray-400'}`} />
                      {b.city}
                    </h3>
                    <span className="text-[10px] font-mono font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                      {b.coordinates}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed">{b.address}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] font-medium text-gray-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{b.hours}</span>
                  </div>
                  <a
                    href={b.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary hover:text-brand-secondary transition-colors"
                  >
                    <span>Lihat Rute di Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Beautiful Mock Map & Detailed Preview Card */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-3xl overflow-hidden border border-gray-150 bg-radial from-gray-50 to-gray-100 p-6 sm:p-8 flex flex-col justify-between relative shadow-xs">
              
              {/* Map Blueprint Grid Watermark */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold text-brand-primary bg-brand-primary/10 tracking-wider uppercase">
                    Detail Cabang {activeBranch.city}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5" />
                    Koordinat GPS Terdaftar
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeBranch.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="text-2xl font-display font-black text-gray-900 mb-2">
                        Kajoe - Cabang {activeBranch.city}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {activeBranch.desc}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Address detail card */}
                      <div className="p-4 rounded-xl bg-white border border-gray-150 shadow-2xs space-y-2">
                        <span className="text-[10px] font-extrabold text-brand-accent tracking-widest uppercase">Alamat Pengiriman</span>
                        <p className="text-xs text-gray-600 font-medium leading-relaxed">{activeBranch.address}</p>
                      </div>

                      {/* Contacts detail card */}
                      <div className="p-4 rounded-xl bg-white border border-gray-150 shadow-2xs space-y-2">
                        <span className="text-[10px] font-extrabold text-brand-primary tracking-widest uppercase">Kontak Langsung</span>
                        <div className="space-y-1">
                          <p className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-brand-primary" />
                            {activeBranch.phone}
                          </p>
                          <p className="text-xs text-gray-500 flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-gray-400" />
                            {activeBranch.hours}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Simulated visual map frame inside cards */}
              <div className="mt-8 pt-6 border-t border-gray-200/60 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-800">Butuh panduan rute jalan?</p>
                  <p className="text-[11px] text-gray-500">Gunakan Google Maps untuk memandu rute langsung ke toko kami.</p>
                </div>
                
                <a
                  href={activeBranch.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-brand-accent hover:bg-[#9a642d] text-white font-bold rounded-xl shadow-md text-xs inline-flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap"
                  id="google-maps-btn"
                >
                  <MapPin className="w-4 h-4" />
                  Buka Rute di Google Maps
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
