import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, CalendarRange, CreditCard, Home, Timeline, Layers3, Phone } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/registration', label: 'Registration', icon: CreditCard },
  { to: '/schedule', label: 'Detailed Schedule', icon: CalendarRange },
  { to: '/timeline', label: 'Hackathon Timeline', icon: Timeline },
  { to: '/rounds', label: 'Rounds Overview', icon: Layers3 },
  { to: '/contact', label: 'Contact', icon: Phone },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/5 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-purple-500 shadow-[0_0_20px_rgba(0,212,255,0.6)]" />
            <span className="font-semibold tracking-wide text-white/90">Ecliptz Labs</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors hover:text-white hover:bg-white/5 ${isActive ? 'text-cyan-300' : 'text-white/70'}`}
              >
                <Icon size={16} />
                {label}
              </NavLink>
            ))}
            <Link
              to="/registration"
              className="ml-3 px-4 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-black shadow-[0_0_20px_rgba(0,212,255,0.5)] hover:shadow-[0_0_30px_rgba(155,92,255,0.6)] transition-shadow"
            >
              Register Now
            </Link>
          </div>

          <button
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-md text-white/80 hover:bg-white/10"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-black/50 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-1">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block px-3 py-2 rounded-md text-sm transition-colors ${isActive ? 'text-cyan-300 bg-white/5' : 'text-white/80 hover:bg-white/5'}`}
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/registration"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 text-black text-center"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
