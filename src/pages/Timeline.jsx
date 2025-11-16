import React from 'react';

export default function Timeline(){
  const block = `Hackathon Timeline
10:00 AM – 5:00 PM

Round 1
Initial development, ideation & prototype building
(Includes 1:00 – 2:00 PM lunch break)
Jury evaluation from 4:00 – 5:00 PM

6:00 PM – 1:00 AM

Round 2
Deep development phase & feature implementation
(Includes 8:00 – 9:00 PM dinner break)
Jury evaluation from 12:00 AM – 1:00 AM
Fun activity from 1:00 – 2:00 AM

2:00 AM – 8:00 AM

Round 3
Final development, polishing & submission preparation
Jury evaluation from 8:00 – 10:00 AM

11:00 AM – 4:00 PM

Final Round
Team presentations
Batch 1: 11:00 AM – 1:00 PM
Lunch: 1:00 – 2:00 PM
Batch 2: 2:00 – 4:00 PM

5:00 PM

Results
Prize distribution & closing ceremony`;

  return (
    <main className="pt-24 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-semibold text-white">Hackathon Timeline</h1>
      <div className="mt-6 relative">
        <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400/60 via-purple-500/60 to-cyan-400/60 blur" />
        <pre className="relative whitespace-pre-wrap bg-white/5 border border-white/10 rounded-2xl p-6 text-white/80">
{block}
        </pre>
      </div>
    </main>
  );
}
