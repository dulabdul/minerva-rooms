'use client';
import About from '@/components/Home/About';
import Advantage from '@/components/Home/Advantage';
import Hero from '@/components/Home/Hero';
import Recommendation from '@/components/Home/Recommendation';
import Testimonial from '@/components/Home/Testimonial';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Advantage />
      <Recommendation />
      <Testimonial />
    </>
  );
}
