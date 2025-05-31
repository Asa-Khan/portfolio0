import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export interface Skill {
  name: string;

  icon: string;

  category: 'language' | 'framework' | 'tool' | 'database' | 'other' | string;

  color: string;
}

const SkillCard: React.FC<{ title: string; skills: Skill[] }> = ({
  title,
  skills,
}) => {
  return (
    <div className="  text-center py-6 md:py-8 border border-[#7CB331]  rounded-md">
      <h3 className="text-2xl font-semibold text-white mb-6">{title}</h3>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="grid grid-cols-3 gap-2 sm:gap-7 sm:grid-cols-4   "
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center group mx-auto flex-wrap"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.4,
              type: 'spring',
              stiffness: 150,
            }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <motion.div className="text-3xl md:text-5xl mb-2 p-1  ">
              <Icon
                icon={skill.icon}
                style={{
                  color: skill.color,
                  width: '40px',
                  height: '40px',
                }}
                className="hover:scale-150 duration-400  transition-all  "
              />
            </motion.div>
            {/* Skill Name */}
            <p className="text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 ">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillCard;
