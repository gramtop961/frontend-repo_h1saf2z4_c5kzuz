import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  React.useEffect(() => {
    // Smooth scroll behavior
    if ('scrollBehavior' in document.documentElement.style) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#05060a] text-white">
      <BackgroundDecor />
      <Navbar />
      <div className="relative z-10">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

function BackgroundDecor(){
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,212,255,0.06),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(155,92,255,0.06),transparent_40%)]" />
    </div>
  );
}
