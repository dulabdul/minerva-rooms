'use client';
import About from '@/components/Home/About';
import Advantage from '@/components/Home/Advantage';
import Hero from '@/components/Home/Hero';
import Recommendation from '@/components/Home/Recommendation';
import Testimonial from '@/components/Home/Testimonial';
import Footer from '@/components/Layout/Footer';

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <About />
      <Advantage />
      <Recommendation />
      <Testimonial />
    </main>
  );
}
