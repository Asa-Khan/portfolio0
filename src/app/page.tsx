'use client';
import { Skills } from '@/components';
import LoadingScreen from '@/components/loading';
import StarsCanvas from '@/components/Stars';
import {
  About,
  Certificates,
  Contact,
  Experience,
  Hero,
  Layout,
  Projects,
} from '@/containers';

import 'aos/dist/aos.css';
// If 'Skills.tsx' is in 'skills' folder
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay, e.g., 2 seconds (2000 ms)
    const timer = setTimeout(() => setIsLoading(false), 1600);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    // Render Loading component while isLoading is true
    return <LoadingScreen />;
  }

  return (
    <>
      <Layout>
        <Hero />
        <StarsCanvas />

        <About />
        {/* <Certificates /> */}
        <Skills />
        <Experience />
        {/* <Projects /> */}
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
