import React from 'react';
import { PawPrint, ShieldCheck, Heart } from 'lucide-react';

const Feature = ({ icon: Icon, title, children }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-white/70">{children}</p>
  </div>
);

export default function About() {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-black to-zinc-900 py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Commitment</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            We are a boutique Shiba Inu breeder focused on health, temperament, and responsible placement. Our dogs are
            family first, raised at home with early neuro stimulation and socialization.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature icon={ShieldCheck} title="Health Tested">
            OFA and genetic testing with transparent health records. Veterinary care and up‑to‑date vaccinations.
          </Feature>
          <Feature icon={Heart} title="Ethically Raised">
            Puppies are raised in‑home using Puppy Culture protocols to promote confidence and sound temperament.
          </Feature>
          <Feature icon={PawPrint} title="Lifetime Support">
            Guidance for nutrition, training, and care for the lifetime of your Shiba.
          </Feature>
        </div>
      </div>
    </section>
  );
}
