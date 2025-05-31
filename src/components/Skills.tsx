import SkillCard from '@/components/SkillSection';

import { skillsIcons } from '../lib/content/skills';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="py-10  ">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-bold text-white mb-16"
      >
        My Skills
      </motion.h2>
      <div className="container mx-auto px-6 grid gap-12 md:grid-cols-2 lg:gap-16">
        <SkillCard
          title="Languages"
          skills={skillsIcons.filter((skill) => skill.category === 'language')}
        />
        <SkillCard
          title="Frameworks"
          skills={skillsIcons.filter((skill) => skill.category === 'framework')}
        />
        <SkillCard
          title="Tools"
          skills={skillsIcons.filter((skill) => skill.category === 'tool')}
        />
        <SkillCard
          title="Databases"
          skills={skillsIcons.filter((skill) => skill.category === 'database')}
        />
        <SkillCard
          title="Other Technologies"
          skills={skillsIcons.filter((skill) => skill.category === 'other')}
        />
      </div>
    </section>
  );
};

export default Skills;
