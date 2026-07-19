import React, { useState } from 'react';
import { X, Check, ShoppingBag, Phone, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: {
    name: string;
    size: string;
    price: number;
  };
}

export default function ContactModal({ isOpen, onClose, selectedProduct }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    size: selectedProduct?.size || '60ml',
    qty: 1,
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update size if selectedProduct changes
  React.useEffect(() => {
    if (selectedProduct) {
      setFormData(prev => ({
        ...prev,
        size: selectedProduct.size
      }));
    }
  }, [selectedProduct]);

  const prices: { [key: string]: number } = {
    '30ml': 18000,
    '60ml': 32000,
    '120ml': 58000
  };

  const getPrice = () => {
    const unitPrice = prices[formData.size] || 32000;
    return unitPrice * formData.qty;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const productName = `Kajoe Minyak Kayu Putih ${formData.size}`;
    const totalPrice = getPrice().toLocaleString('id-ID');
    const text = `Halo Kajoe,%0A%0ASaya ingin memesan Minyak Kayu Putih Asli:%0A- *Produk*: ${productName}%0A- *Jumlah*: ${formData.qty} botol%0A- *Nama*: ${formData.name}%0A- *No. HP*: ${formData.phone}%0A- *Alamat*: ${formData.address}%0A- *Catatan*: ${formData.notes || '-'}%0A%0A*Total Pembayaran*: Rp ${totalPrice}%0A%0AMohon info cara pembayarannya. Terima kasih!`;
    
    window.open(`https://wa.me/628123456789?text=${text}`, '_blank');
    onClose();
    setIsSubmitted(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl z-10"
          >
            {/* Header decor bar */}
            <div className="h-2 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent" />

            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all"
              id="close-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-brand-primary/10 text-brand-primary">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-gray-900">Form Pemesanan Kajoe</h3>
                    <p className="text-xs text-gray-500">Minyak Kayu Putih 100% Asli & Murni</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Product Size Select */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pilih Ukuran Botol</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['30ml', '60ml', '120ml'].map((sz) => (
                        <button
                          key={sz}
                          type="button"
                          onClick={() => setFormData({ ...formData, size: sz })}
                          className={`py-2 px-3 text-sm font-semibold rounded-lg border transition-all ${
                            formData.size === sz
                              ? 'border-brand-primary bg-brand-primary/5 text-brand-primary ring-2 ring-brand-primary/20'
                              : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {sz}
                          <span className="block text-[10px] font-normal text-gray-500">
                            Rp {prices[sz].toLocaleString('id-ID')}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity and Total Display */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Jumlah (Botol)</label>
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={formData.qty}
                        onChange={(e) => setFormData({ ...formData, qty: parseInt(e.target.value) || 1 })}
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
                        required
                      />
                    </div>
                    <div className="bg-brand-accent-light/40 rounded-lg p-3 flex flex-col justify-center">
                      <span className="text-xs text-brand-accent font-medium">Total Estimasi</span>
                      <span className="text-lg font-bold text-brand-accent">
                        Rp {getPrice().toLocaleString('id-ID')}
                      </span>
                    </div>
                  </div>

                  <hr className="border-gray-100" />

                  {/* Customer Information */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                    <input
                      type="text"
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nomor WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="Contoh: 08123456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Alamat Pengiriman</label>
                    <textarea
                      rows={2}
                      placeholder="Alamat lengkap (nama jalan, nomor rumah, RT/RW, kecamatan, kota)"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm resize-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Catatan Tambahan (Opsional)</label>
                    <input
                      type="text"
                      placeholder="Catatan tambahan..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary text-sm"
                    />
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-brand-primary hover:bg-brand-secondary text-white rounded-xl text-sm font-semibold shadow-md shadow-brand-primary/10 hover:shadow-lg transition-all"
                  >
                    Lanjutkan Order
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-8 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4 animate-bounce">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Pemesanan Siap Dikirim!</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Pesanan Anda telah kami rekap. Selanjutnya Anda akan diarahkan ke WhatsApp official kami untuk konfirmasi pengiriman & pembayaran.
                </p>

                <div className="bg-brand-bg rounded-xl p-4 border border-brand-primary/10 w-full mb-6 text-left space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Produk</span>
                    <span className="font-semibold text-gray-800">Kajoe Minyak Kayu Putih {formData.size} ({formData.qty}x)</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Nama Penerima</span>
                    <span className="font-semibold text-gray-800">{formData.name}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Total Belanja</span>
                    <span className="font-bold text-brand-primary">Rp {getPrice().toLocaleString('id-ID')}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    Kirim via WhatsApp
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full py-2.5 text-xs text-gray-500 hover:text-gray-700 font-medium transition-colors"
                  >
                    Kembali Edit Form
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
