'use client';

import { useState } from 'react';
import { X, Upload } from 'lucide-react';
import { motion } from 'framer-motion';
import { GraphData } from '@/lib/types';

interface DataImporterProps {
  onImport: (data: GraphData) => void;
  onClose: () => void;
}

export function DataImporter({ onImport, onClose }: DataImporterProps) {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState('');

  const handleImport = () => {
    try {
      setError('');
      const data = JSON.parse(jsonInput);
      if (data.nodes && Array.isArray(data.nodes) && data.links && Array.isArray(data.links)) {
        onImport(data);
      } else {
        setError('Invalid format');
      }
    } catch (err) {
      setError('Failed to parse JSON');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="border border-cyan-500/30 rounded-lg p-6 bg-black/90 max-w-2xl w-full mx-4 neon-border"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold neon-glow flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Import Data
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-cyan-500/20 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            placeholder="Paste JSON data..."
            className="w-full h-40 px-3 py-2 bg-cyan-500/5 border border-cyan-500/30 rounded font-mono text-sm text-cyan-300"
          />
          {error && <div className="p-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm">{error}</div>}
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleImport}
              className="flex-1 px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded font-bold text-cyan-400 hover:bg-cyan-500/30"
            >
              Import
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-500/20 border border-gray-500/50 rounded font-bold text-gray-400 hover:bg-gray-500/30"
            >
              Close
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
