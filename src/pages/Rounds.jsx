import React from 'react';

const rounds = [
  {
    title: 'Round 1: Ideation & Prototype Basics',
    judging: ['innovation', 'clarity', 'feasibility'],
    desc: 'Kick-off, define problem, draft solution and base prototype.'
  },
  {
    title: 'Round 2: Development & Features',
    judging: ['functionality', 'UI/UX', 'technical depth'],
    desc: 'Build core features, iterate on UX and architecture.'
  },
  {
    title: 'Round 3: Final Polish & Submission',
    judging: ['completeness', 'stability'],
    desc: 'Refine, test, and prepare final deliverables.'
  },
  {
    title: 'Final Round: Presentations',
    judging: ['Pitching', 'impact', 'validation'],
    desc: 'Showcase solution, demo and answer Q&A.'
  }
];

export default function Rounds(){
  return (
    <main className="pt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-semibold text-white">Rounds Overview</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {rounds.map((r)=> (
          <div key={r.title} className="rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-cyan-500/40">
            <div className="rounded-2xl h-full p-6 bg-[#0b0c12]/70 border border-white/10 backdrop-blur">
              <h3 className="text-white font-semibold">{r.title}</h3>
              <p className="text-white/70 text-sm mt-2">{r.desc}</p>
              <ul className="mt-3 text-xs text-white/60 list-disc pl-5">
                {r.judging.map((j)=> <li key={j}>What judges look for: {j}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
