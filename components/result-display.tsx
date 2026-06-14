'use client';

import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { AnalysisResult } from '@/lib/types';
import { useToast } from './ui/toast-provider';

interface ResultDisplayProps {
  result: AnalysisResult;
}

const threatColors = {
  LOW: 'text-green-400',
  MODERATE: 'text-yellow-400',
  HIGH: 'text-orange-400',
  CRITICAL: 'text-red-500',
  MAXIMUM: 'text-red-600',
};

const threatBorders = {
  LOW: 'border-green-500',
  MODERATE: 'border-yellow-500',
  HIGH: 'border-orange-500',
  CRITICAL: 'border-red-500',
  MAXIMUM: 'border-red-600',
};

export function ResultDisplay({ result }: ResultDisplayProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    const text = `[PSYCHE.EXE REPORT]\n\nARCHETYPE: ${result.archetype}\nTHREAT LEVEL: ${result.threatLevel}\n\nSUMMARY:\n${result.summary}\n\nTRAITS:\n${result.traits.map(t => `• ${t}`).join('\n')}\n\nFLAGS:\n${result.flags.map(f => `⚠️ ${f}`).join('\n')}\n\nINTERNET AGE: ${result.internetAge}\nCONFIDENCE: ${result.confidence}%\n\nVERDICT: ${result.verdict}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    toast('Report copied to clipboard!', 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className={`terminal-border rounded-lg p-6 md:p-8 bg-black/50 backdrop-blur border-2 ${threatBorders[result.threatLevel]}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-6 pb-4 border-b border-green-500/30">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-xs uppercase tracking-widest text-green-400 mb-2">Threat Assessment</p>
          <div className="flex items-baseline justify-between">
            <h2 className="text-2xl md:text-4xl font-bold">{result.archetype}</h2>
            <span className={`text-xl md:text-2xl font-bold uppercase tracking-wider ${threatColors[result.threatLevel]}`}>
              [{result.threatLevel}]
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-xs uppercase tracking-widest text-green-400 mb-2">Summary</p>
        <p className="text-sm leading-relaxed text-green-200">{result.summary}</p>
      </motion.div>

      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-xs uppercase tracking-widest text-green-400 mb-3">Detected Traits</p>
        <ul className="space-y-2">
          {result.traits.map((trait, i) => (
            <li key={i} className="text-sm text-green-200 flex items-start gap-2">
              <span className="text-green-500 mt-1">▪</span>
              <span>{trait}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-xs uppercase tracking-widest text-yellow-400 mb-3">System Flags</p>
        <ul className="space-y-2">
          {result.flags.map((flag, i) => (
            <li key={i} className="text-sm text-yellow-200 flex items-start gap-2">
              <span className="text-yellow-500">⚠</span>
              <span>{flag}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="mb-6 grid grid-cols-2 gap-4 py-4 border-y border-green-500/30"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div>
          <p className="text-xs uppercase tracking-widest text-green-400">Internet Age</p>
          <p className="text-sm font-bold text-green-300">{result.internetAge}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-green-400">Confidence</p>
          <p className="text-sm font-bold text-green-300">{result.confidence}%</p>
        </div>
      </motion.div>

      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <p className="text-xs uppercase tracking-widest text-green-400 mb-2">Final Verdict</p>
        <p className="text-sm italic text-green-200 border-l-2 border-green-500 pl-4">
          "{result.verdict}"
        </p>
      </motion.div>

      <motion.button
        onClick={handleCopy}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500 text-green-400 rounded hover:bg-green-500/20 transition-colors text-sm font-mono uppercase"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            Copy Full Report
          </>
        )}
      </motion.button>
    </motion.div>
  );
}
