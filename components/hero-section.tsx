'use client';

import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export function HeroSection() {
  return (
    <motion.div
      className="text-center py-12 md:py-16"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex items-center justify-center gap-3 mb-4"
        animate={{ textShadow: [
          '0 0 10px rgba(0,255,136,0.5)',
          '0 0 20px rgba(0,255,136,0.8)',
          '0 0 10px rgba(0,255,136,0.5)',
        ] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Terminal className="w-8 h-8" />
        <h1 className="text-3xl md:text-5xl font-bold tracking-wider">PSYCHE.EXE</h1>
      </motion.div>
      <p className="text-sm md:text-base text-green-300 mb-2 uppercase tracking-wider">
        Brutally Accurate AI Personality Diagnostics
      </p>
      <p className="text-xs md:text-sm text-green-400 opacity-75">
        [No Mercy • All Facts • Terminal Read]
      </p>
    </motion.div>
  );
}
