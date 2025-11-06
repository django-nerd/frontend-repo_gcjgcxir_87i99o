import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import KennelFeatures from './components/KennelFeatures';
import Gallery from './components/Gallery';

// Simple error boundary so any runtime error (e.g., during hot updates) never blanks the whole page
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('App crashed:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center p-6">
          <div className="max-w-lg text-center">
            <h1 className="font-manrope text-2xl font-semibold">Something went wrong</h1>
            <p className="mt-2 text-white/80">Try reloading the page. If the issue persists, Spline may be blocked by your network; the site will still work without it.</p>
            <button onClick={() => window.location.reload()} className="mt-6 inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-2.5 font-medium hover:bg-white/20">Reload</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
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

        <footer id="contact" className="border-t border-neutral-200 bg-[#fbf7f2] py-10">
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
    </ErrorBoundary>
  );
}

export default App;
