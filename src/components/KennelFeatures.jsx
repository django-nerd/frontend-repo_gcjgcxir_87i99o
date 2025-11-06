import React from 'react';
import { Star, Bone, Home } from 'lucide-react';

const Item = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 text-white">
    <div className="mt-1 rounded-lg bg-white/10 p-2"><Icon className="h-5 w-5" /></div>
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-white/70">{desc}</p>
    </div>
  </div>
);

export default function KennelFeatures() {
  return (
    <section className="w-full bg-zinc-950 py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Why Choose Our Kennel</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              A premium experience focused on health, structure, and the spirited Shiba personality you love.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Item icon={Star} title="Champion Lines" desc="Carefully paired sires and dams from proven pedigrees." />
          <Item icon={Bone} title="Quality Nutrition" desc="Whole‑food diets and supplements for optimal development." />
          <Item icon={Home} title="Raised At Home" desc="Clean, enriched spaces that encourage curiosity and calm." />
        </div>
      </div>
    </section>
  );
}
