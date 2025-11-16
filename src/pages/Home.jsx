import React from 'react';
import Hero from '../components/Hero';
import { AboutSection, TimelinePreview, PrizesSection, CriteriaSection, FAQSection } from '../components/Sections';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <TimelinePreview />
      <PrizesSection />
      <CriteriaSection />
      <FAQSection />
    </main>
  );
}
