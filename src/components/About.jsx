import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-white to-[#fbf7f2] py-20 text-neutral-800">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          <h2 className="font-manrope text-3xl font-semibold tracking-tight md:text-4xl">Raised with love, guided by ethics</h2>
          <p className="mt-4 text-lg text-neutral-600">
            We are a small, dedicated Shiba Inu breeder focused on health, temperament, and early socialization. Our
            puppies grow in a calm, loving environment, cared for like family.
          </p>
          <div className="mt-6 flex items-center gap-6">
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
              <p className="text-2xl font-bold text-[#f15b2a]">10+ yrs</p>
              <p className="text-sm text-neutral-500">breeding experience</p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
              <p className="text-2xl font-bold text-[#f15b2a]">Health</p>
              <p className="text-sm text-neutral-500">tested parents</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="order-1 md:order-2"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-neutral-200 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1525253136156-f2aa3f5dc2b4?q=80&w=1600&auto=format&fit=crop"
              alt="Breeder with Shiba Inu"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#ffede3]/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
