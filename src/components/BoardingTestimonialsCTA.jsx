import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Our Shiba came home confident and affectionate. The care and communication were exceptional from day one.',
    name: 'Sofia & Marco',
  },
  {
    quote:
      'Beautiful, healthy puppies and the kindest guidance. We felt supported every step of the way.',
    name: 'Elena R.',
  },
];

const BoardingTestimonialsCTA = () => {
  return (
    <section className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl space-y-20 px-6">
        {/* Boarding teaser */}
        <div className="grid grid-cols-1 items-center gap-10 rounded-3xl bg-[#fffaf6] p-8 ring-1 ring-neutral-200 md:grid-cols-2">
          <div>
            <h3 className="font-manrope text-2xl font-semibold tracking-tight md:text-3xl">Dog Boarding with Comfort</h3>
            <p className="mt-3 text-neutral-600">
              Welcoming all breeds. Cozy suites, daily playtime, and attentive care. Peace of mind while you travel.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm text-neutral-700 ring-1 ring-black/5">Heated indoor rooms</span>
              <span className="rounded-full bg-white px-4 py-2 text-sm text-neutral-700 ring-1 ring-black/5">Shaded outdoor runs</span>
              <span className="rounded-full bg-white px-4 py-2 text-sm text-neutral-700 ring-1 ring-black/5">Daily photo updates</span>
            </div>
            <a href="#contact" className="mt-6 inline-flex items-center rounded-full bg-[#f15b2a] px-6 py-3 font-medium text-white shadow-lg shadow-[#f15b2a]/20 transition hover:-translate-y-0.5 hover:bg-[#ff7342]">See prices & availability →</a>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1600&auto=format&fit=crop"
              alt="Boarding facilities"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex items-center gap-1 text-[#f15b2a]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-[#f15b2a] text-[#f15b2a]" />
                ))}
              </div>
              <p className="text-neutral-700">“{t.quote}”</p>
              <p className="mt-3 text-sm font-medium text-neutral-500">{t.name}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div id="contact" className="rounded-3xl bg-gradient-to-br from-[#ffede3] to-white p-10 text-center ring-1 ring-neutral-200">
          <h3 className="font-manrope text-2xl font-semibold">Ready to meet your Shiba?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-neutral-600">
            Tell us about your home and lifestyle. We’ll guide you to the perfect match and keep you updated on upcoming litters.
          </p>
          <a href="mailto:hello@shibalove.kennel" className="mt-6 inline-flex items-center rounded-full bg-neutral-900 px-6 py-3 font-medium text-white transition hover:bg-neutral-800">Get in touch</a>
        </div>
      </div>
    </section>
  );
};

export default BoardingTestimonialsCTA;
