import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Leaf } from 'lucide-react';

const items = [
  {
    icon: Heart,
    title: 'Puppy Care',
    desc: 'Early socialization, gentle handling, and enrichment for confident, happy pups.',
  },
  {
    icon: Shield,
    title: 'Health First',
    desc: 'Vet-checked, vaccinated, and raised from health-tested parents.',
  },
  {
    icon: Leaf,
    title: 'Natural Routine',
    desc: 'Sunlit play areas, fresh air, and calm surroundings for balanced development.',
  },
];

const KennelFeatures = () => {
  return (
    <section id="kennel" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-manrope text-3xl font-semibold tracking-tight md:text-4xl">Our Puppies & The Kennel</h2>
          <a href="#contact" className="text-sm font-medium text-[#f15b2a] hover:opacity-80">Reserve a puppy →</a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group rounded-3xl border border-neutral-200 bg-[#fffaf6] p-6 shadow-sm transition hover:shadow-md"
            >
              <it.icon className="h-6 w-6 text-[#f15b2a]" />
              <h3 className="mt-4 text-xl font-semibold text-neutral-900">{it.title}</h3>
              <p className="mt-2 text-neutral-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KennelFeatures;
