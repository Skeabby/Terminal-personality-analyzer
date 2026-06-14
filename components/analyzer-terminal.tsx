'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Zap } from 'lucide-react';
import { useToast } from './ui/toast-provider';

interface AnalyzerTerminalProps {
  onAnalyze: (text: string) => Promise<void>;
  isLoading: boolean;
}

export function AnalyzerTerminal({ onAnalyze, isLoading }: AnalyzerTerminalProps) {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      toast('Input cannot be empty', 'error');
      return;
    }
    await onAnalyze(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      handleSubmit(e as any);
    }
    if (e.key === 'Escape') {
      setInput('');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="terminal-border rounded-lg p-6 md:p-8 bg-black/50 backdrop-blur"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <label className="block text-sm mb-3 text-green-400 font-bold uppercase tracking-wider">
        <span className="text-green-500">[INPUT]</span> Personality Text
      </label>
      <textarea
        ref={textareaRef}
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Paste a bio, tweet, comment, or any text you want analyzed...\n\n[Ctrl+Enter to analyze • Esc to clear]"
        className="w-full h-32 md:h-40 bg-black/60 text-green-400 border border-green-500 rounded p-4 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent resize-none"
        disabled={isLoading}
      />
      <div className="mt-4 flex gap-3 items-center justify-between">
        <span className="text-xs text-green-400 opacity-50">
          {input.length} / 5000 characters
        </span>
        <motion.button
          type="submit"
          disabled={isLoading || !input.trim()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-2 bg-green-500 text-black font-bold rounded hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed uppercase text-sm tracking-wider"
        >
          <Zap className="w-4 h-4" />
          {isLoading ? 'Analyzing...' : 'Analyze'}
          <Send className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.form>
  );
}
