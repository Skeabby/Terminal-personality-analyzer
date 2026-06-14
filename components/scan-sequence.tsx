'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ScanSequenceProps {
  isScanning: boolean;
}

const phases = [
  '> INITIALIZING NEURAL SCAN...',
  '> PARSING LINGUISTIC PATTERNS...',
  '> ANALYZING BEHAVIORAL VECTORS...',
  '> CROSS-REFERENCING MEME DATABASE...',
  '> CALCULATING THREAT MATRICES...',
  '> COMPILING PERSONALITY PROFILE...',
  '> ████████████████████ 100%',
];

export function ScanSequence({ isScanning }: ScanSequenceProps) {
  const [currentPhase, setCurrentPhase] = useState(0);

  useEffect(() => {
    if (!isScanning) {
      setCurrentPhase(0);
      return;
    }

    const interval = setInterval(() => {
      setCurrentPhase(prev => {
        if (prev >= phases.length - 1) return prev;
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(interval);
  }, [isScanning]);

  if (!isScanning) return null;

  return (
    <motion.div
      className="terminal-border rounded-lg p-6 md:p-8 bg-black/50 backdrop-blur"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div className="space-y-2 font-mono text-sm">
        {phases.map((phase, i) => (
          <motion.div
            key={i}
            className={`${
              i <= currentPhase
                ? 'text-green-400 opacity-100'
                : 'text-green-400 opacity-20'
            }`}
            animate={i === currentPhase ? { textShadow: [
              '0 0 10px rgba(0,255,136,0.5)',
              '0 0 20px rgba(0,255,136,0.8)',
              '0 0 10px rgba(0,255,136,0.5)',
            ] } : {}}
            transition={{ duration: 0.6 }}
          >
            {phase}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
