'use client';
import About from '@/components/Home/About';
import Advantage from '@/components/Home/Advantage';
import Hero from '@/components/Home/Hero';
import Recommendation from '@/components/Home/Recommendation';
import Testimonial from '@/components/Home/Testimonial';
import { AnimatePresence } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const exploreRef = useRef(null);

  return (
    <>
      <AnimatePresence
        mode='wait'
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}>
        <Hero exploreRef={exploreRef} />
        <About />
        <Advantage />
        <Recommendation exploreRef={exploreRef} />
        <Testimonial />
      </AnimatePresence>
    </>
  );
}
