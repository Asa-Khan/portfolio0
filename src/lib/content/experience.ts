// Import React and Icon components once
import React from 'react';
import { FaReact, FaVuejs } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

export const experiencesData = [
  {
    title: 'BSc in Software Engineering',
    location: 'University of Engineering and Technology, Pakistan',
    description:
      'Currently pursuing Software Engineering at UET Taxila, focusing on software development principles and modern technologies. The program blends theoretical knowledge with practical experience, preparing me to tackle real-world challenges in the tech industry.',
    icon: React.createElement(LuGraduationCap),
    date: '2022 Sep - 2026 June',
  },
  // {
  //   title: 'MERN Stack Developer Intern',
  //   location: 'Tech Net Cloud, Islamabad, Pakistan',
  //   description:
  //     'Optimized backend performance by 30% through efficient RESTful APIs and robust authentication systems. Collaborated with senior developers to deliver key projects ahead of schedule, improving overall team productivity.',
  //   icon: React.createElement(FaVuejs),
  //   date: '2024 Feb - 2024 May',
  // },
 {
  title: 'Data Scientist',
  location: 'Tech Solutions | Lahore, Pakistan', // Replace with actual company if needed
  description:
    'Led end-to-end development of predictive models, improving business decision-making accuracy by 25%. Utilized Python, Scikit-learn, and Power BI to build machine learning pipelines and interactive dashboards.',
  icon: React.createElement, // You can use a data-related icon here
  date: '2023 June - 2024 April',
},
{
  title: 'AI/ML Research Member',
  location: 'Google Developer Student Club (GDSC)',
  description:
    'Contributed to machine learning projects and research initiatives. Optimized model performance and collaborated on deep learning applications, enhancing overall project quality and impact.',
  icon: React.createElement(LuGraduationCap),
  date: '2022 Nov - 2023 Oct',
}

];
