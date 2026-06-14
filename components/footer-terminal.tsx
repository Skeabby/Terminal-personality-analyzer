'use client';

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

export function FooterTerminal() {
  return (
    <motion.footer
      className="mt-12 py-8 border-t border-green-500/30 text-center text-xs text-green-400 space-y-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <p className="font-mono uppercase tracking-wider">PSYCHE.EXE v1.0</p>
      <p className="text-green-500/70">Powered by Gemini 1.5 Flash • Hosted on Vercel</p>
      <div className="flex items-center justify-center gap-2 mt-4">
        <a
          href="https://github.com/Skeabby/Terminal-personality-analyzer"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-green-300 transition-colors"
        >
          <Github className="w-4 h-4" />
          View Source
        </a>
      </div>
      <p className="text-green-500/50 mt-4">Licensed under MIT • No mercy • All facts</p>
    </motion.footer>
  );
}
