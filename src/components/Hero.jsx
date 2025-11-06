import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/TnKqT5H3aMeW6z7q/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay should not block interaction with Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 sm:px-8">
        <div className="max-w-2xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight sm:text-6xl"
          >
            Premium Shiba Inu Breeder
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg text-white/80 sm:text-xl"
          >
            Ethical, health‑tested Shibas raised with love and early socialization. Reserve your new best friend today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 font-medium text-black shadow hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              Reserve a Puppy
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/30 px-6 py-3 font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
