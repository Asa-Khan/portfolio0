'use client';
import { certificationsSection } from '@/lib/content/certificate';

import { Wrapper } from '@/components';

import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import React, { useState } from 'react';

const Certificates = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const totalCertificates = certificationsSection.certifications.length;

  const showMore = () =>
    setVisibleCount((prev) => Math.min(prev + 3, totalCertificates));
  const showLess = () => setVisibleCount(6);

  return (
    <Wrapper id="certificate">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white ">
        {certificationsSection.title}
      </h2>

      <main className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 bg-transparent ">
        <AnimatePresence>
          {certificationsSection.certifications
            .slice(0, visibleCount)
            .map((certificate, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="p-6 bg-transparent   rounded-2xl shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2     border border-[#87C232]"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {certificate.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Issued by:{' '}
                  <span className="font-medium">{certificate.issuedBy}</span>
                </p>
                <a
                  href={certificate.certificateLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-[#87C232] hover:underline"
                >
                  View Certificate <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
        </AnimatePresence>
      </main>

      {/* Buttons with Smooth Hover Effects */}
      <div className="flex justify-center mt-6">
        {visibleCount < totalCertificates ? (
          <motion.button
            onClick={showMore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 text-white bg-transparent rounded-full shadow-md   transition-all border border-[#87C232]"
          >
            Show More
          </motion.button>
        ) : (
          <motion.button
            onClick={showLess}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 text-white bg-transparent rounded-full shadow-md   transition-all border border-[#87C232] "
          >
            Show Less
          </motion.button>
        )}
      </div>
    </Wrapper>
  );
};

export default Certificates;
