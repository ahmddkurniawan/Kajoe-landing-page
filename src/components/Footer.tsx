import React from 'react';
import { Leaf, Instagram, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenOrder: () => void;
}

export default function Footer({ onOpenOrder }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
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
    <footer className="bg-[#142d16] text-white pt-16 pb-8 relative overflow-hidden" id="hubungi">
      {/* Leaves watermark */}
      <div className="absolute bottom-0 right-0 opacity-[0.03] translate-y-16 translate-x-16">
        <Leaf className="w-96 h-96 fill-current" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Logo and Tagline Column */}
          <div className="md:col-span-5 space-y-4 text-left">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 group"
            >
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-brand-accent-light">
                <Leaf className="w-5 h-5 fill-current" />
              </div>
              <span className="text-2xl font-display font-extrabold text-white tracking-wide">
                Kajoe
              </span>
            </a>
            <p className="text-white/70 text-sm font-light leading-relaxed max-w-sm">
              Kajoe menyajikan kehangatan murni dari 100% Minyak Kayu Putih Asli Makassar yang disuling secara higienis tanpa campuran bahan kimia. Aman dan nyaman untuk seisi keluarga.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-sm font-bold uppercase text-brand-accent tracking-wider mb-4">Navigasi</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a
                  href="#home"
                  onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#tentang-kami"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#tentang-kami'); }}
                  className="hover:text-white transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#produk"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#produk'); }}
                  className="hover:text-white transition-colors"
                >
                  Pilihan Produk
                </a>
              </li>
              <li>
                <a
                  href="#cabang"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#cabang'); }}
                  className="hover:text-white transition-colors"
                >
                  Lokasi Cabang
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="text-sm font-bold uppercase text-brand-accent tracking-wider mb-1">Hubungi Kami</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <span>Kantor Pusat: Jl. Somba Opu No. 120, Makassar, Sulawesi Selatan</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <a href="tel:+628123456789" className="hover:text-white transition-colors">+62 812-3456-789</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <a href="mailto:info@kajoeminyak.com" className="hover:text-white transition-colors">info@kajoeminyak.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom footer row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs text-white/50">
            © {currentYear} Kajoe Minyak Kayu Putih Asli. Hak Cipta Dilindungi Undang-Undang.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/kajoe.id"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-all"
              aria-label="WhatsApp"
            >
              <Phone className="w-4 h-4 fill-current" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
