import React from 'react';
import { Leaf, ShieldCheck, Flame, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Features() {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-brand-primary" />,
      title: '100% Alami',
      desc: 'Diekstrak langsung melalui penyulingan uap daun kayu putih pilihan terbaik tanpa bahan kimia, pewarna sintetis, maupun pengawet buatan.',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-150',
      badge: 'Murni & Aman'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-amber-600" />,
      title: 'Aroma Menenangkan',
      desc: 'Memiliki aroma aromaterapi khas yang menyegarkan untuk membantu melegakan pernapasan, meredakan stres, dan memberikan ketenangan pikiran.',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-150',
      badge: 'Relaksasi Maksimal'
    },
    {
      icon: <Flame className="w-8 h-8 text-brand-accent" />,
      title: 'Hangat Tahan Lama',
      desc: 'Formulasi murni menghasilkan rasa hangat meresap mendalam yang tahan lama untuk meredakan masuk angin, perut kembung, kram, dan pegal linu.',
      bgColor: 'bg-brand-accent-light/30',
      borderColor: 'border-brand-accent/20',
      badge: 'Perlindungan Ekstra'
    }
  ];

  return (
    <section id="tentang-kami" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase font-extrabold tracking-widest text-brand-accent"
          >
            Kualitas Tanpa Kompromi
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display font-black text-gray-900 tracking-tight"
          >
            Keunggulan Utama Minyak Kayu Putih Kajoe
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            Kami mendedikasikan proses produksi dari daun terbaik untuk menghasilkan kehangatan murni yang setia menemani dan melindungi keluarga Anda sepanjang hari.
          </motion.p>
        </div>

        {/* Features Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, index) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-2xl bg-white border border-gray-100 shadow-xs hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Badge card overlay */}
                <span className="absolute top-4 right-6 text-[10px] font-bold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                  {feat.badge}
                </span>

                {/* Icon wrapper */}
                <div className={`w-14 h-14 rounded-2xl ${feat.bgColor} flex items-center justify-center mb-6`}>
                  {feat.icon}
                </div>

                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {feat.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {feat.desc}
                </p>
              </div>

              {/* Bullet proof list item */}
              <div className="flex items-center gap-2 pt-4 border-t border-gray-50 text-xs font-semibold text-brand-primary">
                <CheckCircle2 className="w-4 h-4 text-brand-secondary fill-current text-white" />
                <span>Teruji Lab & Sertifikasi Halal</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Story / Banner about brand authenticity */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-3xl overflow-hidden bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-8 md:p-12 relative shadow-lg"
        >
          {/* Subtle leaves watermark in background */}
          <div className="absolute top-0 right-0 opacity-10 translate-x-12 -translate-y-12">
            <Leaf className="w-80 h-80 fill-current" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-accent-light/80">Penyulingan Tradisional Modern</span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold leading-tight">
              Diproses Alami Dari Pohon Kayu Putih Pilihan Di Tanah Sulawesi Selatan
            </h3>
            <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed">
              Makassar dikenal sebagai salah satu daerah penghasil minyak kayu putih dengan kadar cineole tertinggi. Kajoe mempertahankan metode warisan leluhur yang higienis demi menjaga kemurnian khasiat minyak esensial kayu putih terbaik untuk kesehatan pernapasan dan tubuh Anda.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-bold text-brand-accent-light">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-accent" />
                <span>Garansi 100% Uang Kembali Jika Terbukti Palsu</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
