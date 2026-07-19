import React, { useState } from 'react';
import { Star, MessageSquare, Quote, Heart, Send, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const initialTestimonials = [
    {
      id: 1,
      name: 'Ibu Rahayu',
      role: 'Ibu Rumah Tangga (3 Anak)',
      avatar: 'https://picsum.photos/seed/rahayu/100/100',
      comment: 'Kajoe beneran asli! Beda banget hangatnya sama yang biasa saya beli di minimarket. Perut kembung anak saya langsung reda, baunya juga rileks banget buat tidur.',
      rating: 5,
      city: 'Makassar',
      tag: 'Keluarga'
    },
    {
      id: 2,
      name: 'Andi Pratama',
      role: 'Atlet & Penikmat Olahraga',
      avatar: 'https://picsum.photos/seed/andi/100/100',
      comment: 'Selalu saya bawa di tas olahraga. Hangatnya meresap dalam banget buat melemaskan otot paha sama betis yang kaku sehabis lari sore. Rekomendasi buat pegal-pegal!',
      rating: 5,
      city: 'Jakarta Utara',
      tag: 'Pegal Otot'
    },
    {
      id: 3,
      name: 'dr. Sarah Olivia',
      role: 'Pekerja Medis / Dokter Umum',
      avatar: 'https://picsum.photos/seed/sarah/100/100',
      comment: 'Aromaterapinya sangat kuat dan murni. Cocok sekali untuk dioleskan di leher atau dada saat pernapasan terasa tersumbat akibat cuaca dingin. Tanpa bahan sintetis berbahaya.',
      rating: 5,
      city: 'Surabaya',
      tag: 'Aroma Alami'
    }
  ];

  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    comment: '',
    rating: 5,
    city: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const added = {
      id: testimonials.length + 1,
      name: newReview.name,
      role: newReview.role || 'Pelanggan Setia',
      avatar: `https://picsum.photos/seed/${newReview.name}/100/100`,
      comment: newReview.comment,
      rating: newReview.rating,
      city: newReview.city || 'Indonesia',
      tag: 'Review Baru'
    };

    setTestimonials([added, ...testimonials]);
    setSubmitSuccess(true);
    setNewReview({ name: '', role: '', comment: '', rating: 5, city: '' });

    setTimeout(() => {
      setSubmitSuccess(false);
      setShowAddForm(false);
    }, 2500);
  };

  return (
    <section id="testimoni" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Background Decors */}
      <div className="absolute top-0 right-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-2xl space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-primary">Ulasan Terpercaya</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-gray-900 tracking-tight">
              Apa Kata Mereka Tentang Kajoe?
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Dengarkan langsung cerita bahagia dari pelanggan setia kami yang telah merasakan kehangatan murni minyak kayu putih asli Kajoe.
            </p>
          </div>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-6 py-3 bg-white hover:bg-gray-50 border border-gray-200 text-brand-primary hover:border-brand-primary font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer self-start md:self-auto"
            id="write-testimonial-btn"
          >
            <MessageSquare className="w-4 h-4 text-brand-primary" />
            {showAddForm ? 'Batal Menulis' : 'Tulis Ulasan Anda'}
          </button>
        </div>

        {/* Interactive Add Review Form */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              className="mb-12 overflow-hidden"
            >
              <div className="max-w-2xl mx-auto p-6 md:p-8 bg-white rounded-3xl border border-brand-primary/15 shadow-md space-y-6">
                <div className="flex items-center gap-2 text-brand-primary">
                  <Heart className="w-5 h-5 fill-current" />
                  <h3 className="text-lg font-display font-bold">Bagikan Pengalaman Hangat Anda</h3>
                </div>

                {!submitSuccess ? (
                  <form onSubmit={handleSubmitReview} className="space-y-4 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Nama Lengkap *</label>
                        <input
                          type="text"
                          placeholder="Nama Anda"
                          value={newReview.name}
                          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/10 focus:border-brand-primary text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Pekerjaan / Status</label>
                        <input
                          type="text"
                          placeholder="Contoh: Ibu Rumah Tangga / Karyawan"
                          value={newReview.role}
                          onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/10 focus:border-brand-primary text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Kota Domisili</label>
                        <input
                          type="text"
                          placeholder="Contoh: Makassar"
                          value={newReview.city}
                          onChange={(e) => setNewReview({ ...newReview, city: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/10 focus:border-brand-primary text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Berikan Rating Bintang</label>
                        <div className="flex gap-1.5 pt-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setNewReview({ ...newReview, rating: star })}
                              className="focus:outline-none cursor-pointer"
                            >
                              <Star
                                className={`w-6 h-6 ${
                                  star <= newReview.rating
                                    ? 'text-amber-400 fill-current'
                                    : 'text-gray-200'
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Isi Ulasan Pengalaman Anda *</label>
                      <textarea
                        rows={3}
                        placeholder="Bagaimana kehangatan, aroma, dan kepuasan Anda memakai minyak Kajoe?"
                        value={newReview.comment}
                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/10 focus:border-brand-primary text-sm resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Kirim Ulasan Saya
                    </button>
                  </form>
                ) : (
                  <div className="py-8 text-center flex flex-col items-center justify-center space-y-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Ulasan Berhasil Dikirim!</h4>
                    <p className="text-sm text-gray-500">Terima kasih atas ulasan positif Anda. Ulasan Anda telah terbit di galeri testimoni kami.</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {testimonials.map((testi, index) => (
              <motion.div
                key={testi.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-gray-150 shadow-xs flex flex-col justify-between relative hover:shadow-md transition-all group"
              >
                {/* Floating quote decoration */}
                <div className="absolute top-6 right-8 text-gray-100 group-hover:text-brand-accent/10 transition-colors pointer-events-none">
                  <Quote className="w-12 h-12 rotate-180 fill-current" />
                </div>

                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testi.rating ? 'text-amber-400 fill-current' : 'text-gray-200'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 text-sm font-light leading-relaxed relative z-10 italic">
                    "{testi.comment}"
                  </p>
                </div>

                {/* Profile Card Bottom */}
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-3">
                  <img
                    src={testi.avatar}
                    alt={testi.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-brand-accent/20"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-display font-bold text-gray-900">
                      {testi.name}
                    </h4>
                    <p className="text-[11px] text-gray-500 font-medium leading-tight">
                      {testi.role}
                    </p>
                    <span className="text-[10px] font-semibold text-brand-accent block mt-0.5">
                      📍 {testi.city}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
