import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import KennelFeatures from './components/KennelFeatures';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Minimal top bar */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/60 border-b border-white/30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-[#f15b2a]" />
            <span className="font-semibold tracking-tight">Shiba Atelier</span>
          </div>
          <nav className="hidden gap-6 text-sm text-neutral-700 md:flex">
            <a href="#about" className="hover:text-neutral-900">About</a>
            <a href="#kennel" className="hover:text-neutral-900">The Kennel</a>
            <a href="#gallery" className="hover:text-neutral-900">Gallery</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </nav>
        </div>
      </header>

      <main className="space-y-0">
        <div className="pt-14">{/* spacing for fixed header */}
          <Hero />
        </div>
        <About />
        <KennelFeatures />
        <Gallery />
      </main>

      <footer className="border-t border-neutral-200 bg-[#fbf7f2] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Shiba Atelier. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-neutral-600">
            <a href="mailto:hello@shibalove.kennel" className="hover:text-neutral-900">hello@shibalove.kennel</a>
            <span>•</span>
            <a href="#" aria-label="Instagram" className="hover:text-neutral-900">Instagram</a>
            <a href="#" aria-label="Facebook" className="hover:text-neutral-900">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
