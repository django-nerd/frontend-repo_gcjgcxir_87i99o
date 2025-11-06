import React, { Component } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import KennelFeatures from './components/KennelFeatures';
import Gallery from './components/Gallery';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // Non-blocking: could log to a service
    console.error('App crashed:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-black p-6 text-center text-white">
          <div>
            <h1 className="text-2xl font-semibold">Something went wrong</h1>
            <p className="mt-2 text-white/70">Please refresh the page. If the issue persists, we\'ll fix it shortly.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen bg-black font-sans">
        <Hero />
        <About />
        <KennelFeatures />
        <Gallery />
        <footer id="contact" className="border-t border-white/10 bg-zinc-950 py-10 text-white">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-lg font-semibold">Get in touch</h3>
                <p className="text-white/70">Email us at hello@shibaluxe.com to start the reservation process.</p>
              </div>
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 font-medium text-black hover:bg-white/90">
                Join Waiting List
              </a>
            </div>
            <p className="mt-8 text-center text-sm text-white/50">© {new Date().getFullYear()} Shiba Luxe Kennels. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </ErrorBoundary>
  );
}
