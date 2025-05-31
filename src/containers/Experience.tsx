'use client';

import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '../lib/content/experience'; // Import your data file
import { animated, useSpring } from '@react-spring/web';
import React from 'react';
import { useInView } from 'react-intersection-observer';

// Single Experience Card Component
const ExperienceCard = ({
  experience,
  index,
}: {
  experience: any;
  index: number;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation for slide-in effect based on index
  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView
      ? 'translateX(0)' // Item stops at the middle after coming into view
      : index % 2 === 0
      ? 'translateX(10px)' // Right side animation
      : 'translateX(-10px)', // Left side animation
    config: { tension: 220, friction: 25 },
  });

  return (
    <animated.div
      ref={ref}
      style={animation}
      className="relative mb-8 sm:mb-12 px-6 sm:px-8"
    >
      {/* Wrapper for Icon, Date, and Experience Card */}
      <div
        className={`flex flex-col sm:flex-row sm:items-center justify-start space-y-6 sm:space-x-6 sm:space-y-0 ${
          index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
        }`}
      >
        {/* Icon and Date - Positioned side by side */}
        <div className="flex items-center justify-center space-x-4 sm:space-x-6 mx-2">
          {/* Icon */}
          <div className="  border border-[#87C232] text-white rounded-full p-4 sm:p-6 mb-2 ">
            <div className="text-xl sm:text-3xl">{experience.icon}</div>
          </div>

          {/* Date */}
          <p className="text-gray-300 text-xs sm:text-sm">{experience.date}</p>
        </div>

        {/* Main Experience Card */}
        <div className=" text-white border border-[#87C232] w-full sm:w-96 rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex-1">
          {/* Title and Description */}
          <div className="flex flex-col items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-2xl font-semibold">
              {experience.title}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              {experience.location}
            </p>

            {/* Description */}
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed mb-4">
              {experience.description}
            </p>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

// Experience Section Component
const Experience = () => (
  <section className="relative py-16 sm:py-20" id="experience">
    <h2 className="text-2xl sm:text-4xl font-bold text-center text-white mb-8 sm:mb-12">
      My Experiences
    </h2>

    {/* Experience Cards */}
    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-6 sm:gap-12">
      {experiencesData.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} index={index} />
      ))}
    </div>
  </section>
);

export default Experience;
