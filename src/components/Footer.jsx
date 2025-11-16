import React from 'react';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-cyan-400 to-purple-500" />
            <div>
              <p className="text-white font-semibold">Ecliptz Labs</p>
              <p className="text-white/60 text-sm">Premium hackathon experiences</p>
            </div>
          </div>

          <div className="text-white/70 text-sm text-center sm:text-right">
            <p>support@ecliptzlabs.com</p>
            <p>+91 98765 43210</p>
            <div className="mt-2 flex justify-center sm:justify-end gap-3">
              <a href="#" aria-label="Instagram" className="p-2 rounded-md hover:bg-white/10"><Instagram size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-white/10"><Linkedin size={18} /></a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-md hover:bg-white/10"><Youtube size={18} /></a>
            </div>
            <div className="mt-3 text-xs text-white/50">© {new Date().getFullYear()} Ecliptz Labs. All rights reserved. <a href="#" className="underline">Terms & Conditions</a></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
