'use client';
import About from '@/components/Home/About';
import Advantage from '@/components/Home/Advantage';
import Hero from '@/components/Home/Hero';
import Recommendation from '@/components/Home/Recommendation';
import Testimonial from '@/components/Home/Testimonial';
import { useRef } from 'react';

export default function Home() {
  const exploreRef = useRef(null);

  return (
    <>
      <Hero exploreRef={exploreRef} />
      <About />
      <Advantage />
      <Recommendation exploreRef={exploreRef} />
      <Testimonial />
    </>
  );
}
