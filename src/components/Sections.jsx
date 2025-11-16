import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gift, Lightbulb, Code2, Palette, Presentation, HelpCircle } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl font-semibold text-white">
          About the Hackathon
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mt-4 text-white/80 max-w-3xl">
          ECLIPTZ TECHSTORM HACKATHON 2025 brings together students, professionals, and makers to innovate, prototype, and network. Organized by Ecliptz Labs, the 24-hour sprint focuses on rapid problem-solving, collaboration, and building impactful solutions.
        </motion.p>
      </div>
    </section>
  );
}

export function TimelinePreview() {
  const steps = ['Registration', 'Round 1', 'Round 2', 'Round 3', 'Final Round', 'Winners'];
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Animated Timeline</h3>
        <div className="mt-8 relative">
          <div className="absolute left-0 right-0 top-4 h-1 bg-gradient-to-r from-cyan-400/40 via-purple-500/40 to-cyan-400/40 blur-md" />
          <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="h-2 w-full bg-white/5 rounded" />
                <div className="mt-3 text-center text-white/80 text-sm">{s}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PrizesSection() {
  const prizes = [
    { title: '1st Prize', color: 'from-cyan-400 to-purple-500' },
    { title: '2nd Prize', color: 'from-purple-500 to-violet-500' },
    { title: '3rd Prize', color: 'from-violet-500 to-cyan-400' },
    { title: 'Best UI/UX', color: 'from-pink-400 to-purple-500' },
    { title: 'Best Innovation', color: 'from-emerald-400 to-cyan-400' },
    { title: 'Best Social Impact Idea', color: 'from-amber-400 to-pink-500' },
  ];
  return (
    <section id="prizes" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2"><Gift size={20} className="text-cyan-300"/> Prizes</h3>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {prizes.map((p) => (
            <motion.div key={p.title} whileHover={{ y: -4 }} className="relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-cyan-500/40">
              <div className="rounded-2xl p-6 bg-[#0b0c12]/70 border border-white/10 backdrop-blur">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-black text-xs font-semibold bg-gradient-to-r ${p.color}`}>{p.title}</div>
                <p className="mt-3 text-white/70 text-sm">Glowing award for excellence. Details announced during the event.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CriteriaSection() {
  const items = [
    { title: 'Innovation', icon: Lightbulb, desc: 'Originality and novelty of the idea.' },
    { title: 'Technical Implementation', icon: Code2, desc: 'Engineering depth and code quality.' },
    { title: 'UI/UX', icon: Palette, desc: 'Design clarity, accessibility, and polish.' },
    { title: 'Impact & Presentation', icon: Presentation, desc: 'Problem fit, usefulness, and clarity of pitch.' },
  ];
  return (
    <section id="judging" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">Judging Criteria</h3>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ title, icon: Icon, desc }) => (
            <motion.div key={title} whileHover={{ scale: 1.02 }} className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur">
              <Icon className="text-cyan-300" />
              <h4 className="mt-3 text-white font-semibold">{title}</h4>
              <p className="text-white/70 text-sm mt-1">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const faqs = [
    ['Who is eligible to participate?', 'Students, professionals, and makers are welcome.'],
    ['What is the team size?', 'Form teams of up to 4 members or participate solo.'],
    ['What is the fee?', '₹500 per team for registration.'],
    ['Is the fee refundable?', 'Fees are non-refundable after confirmation.'],
    ['What equipment should I bring?', 'Your laptop, charger, and optional peripherals.'],
    ['Is internet provided?', 'Yes, Wi-Fi will be available at the venue.'],
    ['Are mentors available?', 'Mentors will support teams during rounds.'],
    ['What are submission rules?', 'Submit your repo link and demo at the end.'],
    ['Who owns the IP?', 'Teams retain full ownership of their IP.'],
    ['How do I get help?', 'Reach out via the contact page or on-spot support.'],
  ];
  return (
    <section id="faq" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2"><HelpCircle size={20} className="text-cyan-300"/> FAQ</h3>
        <div className="mt-6 divide-y divide-white/10 rounded-xl bg-white/5 border border-white/10">
          {faqs.map(([q, a], idx) => (
            <Disclosure key={idx} q={q} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Disclosure({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button
        aria-expanded={open}
        aria-controls={`faq-panel-${q}`}
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-4 sm:px-6 py-4 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      >
        <span className="text-white font-medium">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-white/60">+</motion.span>
      </button>
      <motion.div
        id={`faq-panel-${q}`}
        role="region"
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden px-4 sm:px-6"
      >
        <p className="pb-4 text-white/70 text-sm">{a}</p>
      </motion.div>
    </div>
  );
}
