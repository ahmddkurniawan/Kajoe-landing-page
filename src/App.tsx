/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import Branches from './components/Branches';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    size: string;
    price: number;
  } | undefined>(undefined);

  const handleOpenOrder = () => {
    setSelectedProduct(undefined); // Reset to default
    setIsOrderOpen(true);
  };

  const handleSelectProduct = (product: { name: string; size: string; price: number }) => {
    setSelectedProduct(product);
    setIsOrderOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-gray-800 antialiased selection:bg-brand-primary/20 selection:text-brand-primary">
      {/* Navigation */}
      <Header onOpenOrder={handleOpenOrder} />

      {/* Hero Section */}
      <Hero onOpenOrder={handleOpenOrder} />

      {/* Keunggulan Section */}
      <Features />

      {/* Catalog / Products Section */}
      <Products onSelectProduct={handleSelectProduct} />

      {/* Lokasi Cabang Section */}
      <Branches />

      {/* Testimonial Section */}
      <Testimonials />

      {/* Footer Section */}
      <Footer onOpenOrder={handleOpenOrder} />

      {/* Contact / Checkout Modal */}
      <ContactModal
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        selectedProduct={selectedProduct}
      />
    </div>
  );
}
