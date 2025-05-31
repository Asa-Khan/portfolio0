import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I am always open to new opportunities and collaborations. If you have a project in mind, or just want to say hi, feel free to send me an email.',
  ],
  link: `mailto:${author.email}`,
};
