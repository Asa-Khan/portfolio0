import { socialLinks } from '@/lib/content/portfolio';
import { SocialSectionType } from '@/lib/types/sections';

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      url: socialLinks.wattsapp,
      icon: 'bx:bxl-whatsapp',
    },

    // {
    //   icon: 'lucide:twitter',
    //   url: socialLinks.twitter,
    // },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
  ],
};
