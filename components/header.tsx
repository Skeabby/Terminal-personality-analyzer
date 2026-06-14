'use client';

import { Network, Upload, Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onImport: () => void;
}

export function Header({ onImport }: HeaderProps) {
  return (
    <header className="border-b border-cyan-500/30 bg-black/50 backdrop-blur">
      <div className="px-6 py-4 flex items-center justify-between">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Network className="w-6 h-6 text-cyan-400" />
          <div>
            <h1 className="text-2xl font-bold neon-glow">NETWORK GRAPH</h1>
            <p className="text-xs text-cyan-300 opacity-75">Connection Mapper</p>
          </div>
        </motion.div>

        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={onImport}
            className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded text-cyan-400 text-sm font-mono hover:bg-cyan-500/30 flex items-center gap-2"
          >
            <Upload className="w-4 h-4" />
            Import
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded text-purple-400 text-sm font-mono hover:bg-purple-500/30 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export
          </motion.button>
        </div>
      </div>
    </header>
  );
}
