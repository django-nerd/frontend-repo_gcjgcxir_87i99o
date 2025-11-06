import React from 'react';

const photos = [
  'https://images.unsplash.com/photo-1602848597370-44a0ecae0b87?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1525253013412-55c1a69a5738?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1601758124511-cac6a51f3d91?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1600&auto=format&fit=crop'
];

export default function Gallery() {
  return (
    <section className="w-full bg-black py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">Gallery</h2>
        <p className="mb-10 max-w-2xl text-white/70">A glimpse into our happy, healthy Shibas and their daily adventures.</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:gap-5">
          {photos.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img src={src} alt="Shiba gallery" className="h-36 w-full object-cover sm:h-48 md:h-56 lg:h-64" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
