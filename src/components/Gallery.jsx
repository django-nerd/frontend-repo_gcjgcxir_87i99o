import React from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556228578-8ad0200c1f6b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1600&auto=format&fit=crop',
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative w-full bg-[#fbf7f2] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-manrope text-3xl font-semibold tracking-tight md:text-4xl">Gallery</h2>
          <a href="#contact" className="text-sm font-medium text-[#f15b2a] hover:opacity-80">Get notified on new litters →</a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl bg-neutral-200 ${
                i % 5 === 0 ? 'col-span-2 md:col-span-1 md:row-span-2 aspect-[3/4]' : 'aspect-[4/3]'
              }`}
            >
              <img src={src} alt="Shiba" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" loading="lazy" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
