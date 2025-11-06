import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Dynamically load Spline so the page never goes blank if the package or scene fails
const Hero = () => {
  const [SplineComp, setSplineComp] = useState(null);

  useEffect(() => {
    let mounted = true;
    import('@splinetool/react-spline')
      .then((m) => {
        if (mounted) setSplineComp(() => m.default);
      })
      .catch(() => {
        if (mounted) setSplineComp(null);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#0b0b0b]">
      <div className="absolute inset-0">
        {SplineComp ? (
          <SplineComp
            scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div
        className="pointer-events-none absolute inset-0 mix-blend-soft-light"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 40%, rgba(255,176,120,0.25) 0%, rgba(255,255,255,0) 60%)',
        }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-manrope text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
        >
          Shiba Inu Puppies, Raised with Heart
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
          className="mt-4 max-w-2xl text-base text-neutral-200 sm:text-lg"
        >
          A boutique breeding experience where luxury meets tenderness. Healthy, socialized, and irresistibly charming.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#gallery"
            className="group inline-flex items-center justify-center rounded-full bg-[#f15b2a] px-6 py-3 font-medium text-white shadow-lg shadow-[#f15b2a]/20 transition hover:translate-y-[-2px] hover:bg-[#ff7342] hover:shadow-[#ff7342]/30"
          >
            Discover our Puppies
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-md transition hover:bg-white/20"
          >
            Reserve Yours
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
