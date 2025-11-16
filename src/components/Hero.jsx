import React from 'react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { Award, Timer, Users, Sandwich } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-20">
      <div className="absolute inset-0 -z-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-[#05060a]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-[90vh]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-400 to-cyan-300 drop-shadow-[0_0_25px_rgba(0,212,255,0.35)]">
          ECLIPTZ TECHSTORM HACKATHON 2025
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-white/80">
          "Build. Innovate. Compete. A 24-Hour Battle of Brains."
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/registration" className="pointer-events-auto group relative inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-black">
            <span className="absolute inset-0 rounded-md bg-gradient-to-r from-cyan-400 to-purple-500 blur-md opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 rounded-md bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3">Register Now</span>
          </Link>
          <Link to="/schedule" className="pointer-events-auto inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-cyan-300 hover:text-white transition-colors border border-cyan-400/30 hover:border-cyan-400/60 bg-white/5">
            View Schedule
          </Link>
          <Link to="/timeline" className="pointer-events-auto inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-purple-300 hover:text-white transition-colors border border-purple-400/30 hover:border-purple-400/60 bg-white/5">
            View Timeline
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl">
          <Badge icon={Users} label="100 Teams" />
          <Badge icon={Timer} label="24 Hours" />
          <Badge icon={Award} label="Prize Pool" />
          <Badge icon={Sandwich} label="Food + Fun Activities" />
        </div>

        <p className="mt-10 max-w-3xl text-white/70 text-sm sm:text-base">
          Join top builders to design, prototype, and launch innovative solutions in just 24 hours — hosted by Ecliptz Labs.
        </p>

        <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/70">
          <Link className="underline decoration-dotted hover:text-cyan-300" to="/rounds">Rounds Overview</Link>
          <a className="underline decoration-dotted hover:text-cyan-300" href="#prizes">Prizes</a>
          <a className="underline decoration-dotted hover:text-cyan-300" href="#judging">Judges & Criteria</a>
          <a className="underline decoration-dotted hover:text-cyan-300" href="#faq">FAQ</a>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon: Icon, label }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-2 px-3 text-white/80 backdrop-blur">
      <Icon size={16} className="text-cyan-300" />
      <span className="text-sm">{label}</span>
    </div>
  );
}
