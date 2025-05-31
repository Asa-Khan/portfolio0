import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'Machine Learning',
      'Deep Learning',
      'Power BI',
      'Prject Management',
      'Optimization Techniques',
    ],
  },
  img: '/Asad.png',
};
