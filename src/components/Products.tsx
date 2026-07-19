import React from 'react';
import { ShoppingCart, Star, Sparkles, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductsProps {
  onSelectProduct: (product: { name: string; size: string; price: number }) => void;
}

export default function Products({ onSelectProduct }: ProductsProps) {
  const sizes = [
    {
      id: 'size-30',
      name: 'Kajoe Travel Bottle',
      size: '30ml',
      price: 18000,
      badge: 'Praktis',
      desc: 'Mudah dibawa ke mana saja. Muat di saku, tas kecil, atau pouch traveling untuk perlindungan instan saat bepergian.',
      benefits: ['Mudah dibawa bepergian', 'Anti bocor & praktis', 'Pas untuk saku celana'],
      imageColor: 'from-[#a1c491] to-[#6d965e]',
      scale: 0.9,
      tagline: 'Teman setiamu di perjalanan'
    },
    {
      id: 'size-60',
      name: 'Kajoe Family Essential',
      size: '60ml',
      price: 32000,
      badge: 'Paling Populer',
      desc: 'Ukuran ideal untuk kebutuhan harian keluarga di rumah. Memberikan kenyamanan hangat yang cukup untuk seisi rumah.',
      benefits: ['Ukuran paling pas', 'Favorit para Ibu', 'Nyaman di genggaman'],
      imageColor: 'from-[#8db07c] to-[#4e7d3d]',
      scale: 1.0,
      bestSeller: true,
      tagline: 'Kehangatan harian seluruh keluarga'
    },
    {
      id: 'size-120',
      name: 'Kajoe Value Pack',
      size: '120ml',
      price: 58000,
      badge: 'Super Hemat',
      desc: 'Solusi paling hemat dan tahan lama. Sangat cocok bagi pengguna rutin minyak kayu putih untuk persediaan jangka panjang.',
      benefits: ['Harga per-ml termurah', 'Tahan hingga berbulan-bulan', 'Cocok untuk pemakaian rutin'],
      imageColor: 'from-[#7fa46c] to-[#366127]',
      scale: 1.1,
      tagline: 'Stok aman, hemat maksimal'
    }
  ];

  return (
    <section id="produk" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute -bottom-16 left-1/4 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary">Pilihan Ukuran Botol</span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-gray-900 tracking-tight">
            Varian Botol Kajoe Paling Pas Untuk Anda
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Pilihlah ukuran botol Kajoe yang sesuai dengan mobilitas dan kebutuhan perlindungan harian Anda beserta keluarga tercinta.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {sizes.map((item) => (
            <motion.div
              key={item.size}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className={`relative rounded-3xl p-8 bg-white border flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-xl ${
                item.bestSeller 
                  ? 'border-brand-primary/40 ring-4 ring-brand-primary/5' 
                  : 'border-gray-150'
              }`}
            >
              {/* Varian Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold shadow-md tracking-wide uppercase ${
                  item.bestSeller
                    ? 'bg-brand-primary text-white'
                    : 'bg-brand-accent-light text-brand-accent border border-brand-accent/10'
                }`}>
                  {item.badge}
                </span>
              </div>

              <div>
                {/* 3D-Like Product Visual representation */}
                <div className="h-56 w-full flex items-center justify-center relative mb-6 rounded-2xl bg-radial from-gray-50 to-gray-100/50 overflow-hidden">
                  
                  {/* Background Soft Glow */}
                  <div className={`absolute w-36 h-36 rounded-full bg-gradient-to-tr ${item.imageColor} opacity-20 blur-xl`} />

                  {/* Creative abstract leaf design standing in for the bottle */}
                  <div className="relative flex flex-col items-center">
                    {/* Bottle cap */}
                    <div className="w-10 h-6 bg-[#b27a3c] rounded-t-sm shadow-inner relative z-10">
                      <div className="absolute top-1 left-1 right-1 h-1 bg-[#8c5828] opacity-50" />
                    </div>
                    {/* Bottle Neck */}
                    <div className="w-6 h-4 bg-white/40 border-x border-gray-200" />
                    {/* Bottle body */}
                    <div 
                      className="w-16 bg-white/75 border border-gray-250/60 rounded-b-xl shadow-md flex items-center justify-center overflow-hidden relative"
                      style={{ 
                        height: `${80 + (item.scale * 30)}px`,
                        width: `${40 + (item.scale * 15)}px`
                      }}
                    >
                      {/* Oil Liquid inside */}
                      <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${item.imageColor} opacity-85 rounded-b-lg`} style={{ height: '75%' }}>
                        {/* Bubbles */}
                        <div className="absolute bottom-4 left-3 w-1.5 h-1.5 bg-white/40 rounded-full" />
                        <div className="absolute bottom-8 right-2 w-1 h-1 bg-white/40 rounded-full animate-pulse" />
                      </div>
                      
                      {/* Tiny brand text overlay */}
                      <div className="absolute z-10 text-[9px] font-bold text-[#b27a3c] bg-white/90 px-1 py-0.5 rounded shadow-xs scale-90">
                        KAJOE
                      </div>
                    </div>
                  </div>

                  {/* Star rating overlay */}
                  <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-xs px-2 py-1 rounded-lg text-[10px] font-bold text-gray-700 flex items-center gap-1 border border-gray-100">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-current" />
                    <span>4.9 (45+)</span>
                  </div>

                  {/* Volume size bottom overlay */}
                  <div className="absolute bottom-3 right-3 bg-brand-primary text-white px-2.5 py-1 rounded-lg text-xs font-extrabold tracking-wider">
                    {item.size}
                  </div>
                </div>

                {/* Info and price */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold text-brand-accent tracking-wider uppercase">{item.tagline}</span>
                  <h3 className="text-xl font-display font-black text-gray-900">{item.name}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>

                {/* Price Label */}
                <div className="mb-6 flex items-baseline gap-1.5 bg-brand-accent-light/30 p-3 rounded-xl border border-brand-accent/5">
                  <span className="text-xs text-brand-accent font-semibold">Harga Asli:</span>
                  <span className="text-2xl font-black text-brand-accent font-display">
                    Rp {item.price.toLocaleString('id-ID')}
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium">/ botol</span>
                </div>

                {/* Feature checklist */}
                <div className="space-y-2.5 mb-8">
                  {item.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                      <div className="p-0.5 rounded-full bg-brand-primary/10 text-brand-primary flex-shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Button */}
              <button
                onClick={() => onSelectProduct({ name: item.name, size: item.size, price: item.price })}
                className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  item.bestSeller
                    ? 'bg-brand-primary hover:bg-brand-secondary text-white shadow-lg shadow-brand-primary/15 hover:shadow-xl hover:-translate-y-0.5'
                    : 'bg-white hover:bg-brand-primary hover:text-white border border-brand-primary/20 hover:border-brand-primary text-brand-primary hover:-translate-y-0.5 hover:shadow-md'
                }`}
              >
                <ShoppingCart className="w-4 h-4" />
                Pesan {item.size} Sekarang
              </button>
            </motion.div>
          ))}
        </div>

        {/* Free Shipping Info banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-5 rounded-2xl bg-amber-50 border border-amber-150 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-700 flex-shrink-0">
              <Sparkles className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">🎁 Penawaran Spesial Peluncuran!</h4>
              <p className="text-xs text-gray-500">Dapatkan Gratis Ongkir seluruh Indonesia dengan minimal pembelian 3 botol (ukuran apa saja).</p>
            </div>
          </div>
          <button
            onClick={() => onSelectProduct({ name: 'Kajoe Family Essential', size: '60ml', price: 32000 })}
            className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-lg shadow-xs transition-colors whitespace-nowrap cursor-pointer"
          >
            Klaim Promo Ini
          </button>
        </motion.div>

      </div>
    </section>
  );
}
