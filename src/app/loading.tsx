'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const ANIMATION_DURATION = 1.5;

const LoadingScreen: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, ANIMATION_DURATION * 1000); // Converts to milliseconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (isLoaded) return null; // Remove loading screen after animation

  return (
    <motion.div
      style={{
        inset: 0,
        position: 'fixed',
        backgroundColor: 'var(--backgroundPrimary)', // Replace with actual color if needed
        zIndex: 6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      initial={{ opacity: 1 }}
      animate={{
        opacity: 0,
        x: '-50vw', // Animates the x position to the left
        y: '-50vh', // Animates the y position towards the top
      }}
      transition={{ duration: ANIMATION_DURATION }}
    >
      <motion.div
        initial={{ opacity: 0.3, scale: 1.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: ANIMATION_DURATION }}
      >
        <h1 className="relative text-2xl capitalize font-signature text-accent group top-1">
          <span className="text-[#72A230]">Arbab Mustafa</span>
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
