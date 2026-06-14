'use client';

import { useState } from 'react';
import { Plus, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface ControlPanelProps {
  onAddNode: (label: string, type: string) => void;
  nodeCount: number;
  linkCount: number;
}

export function ControlPanel({ onAddNode, nodeCount, linkCount }: ControlPanelProps) {
  const [nodeLabel, setNodeLabel] = useState('');
  const [selectedType, setSelectedType] = useState('default');

  const handleAddNode = () => {
    if (nodeLabel.trim()) {
      onAddNode(nodeLabel, selectedType);
      setNodeLabel('');
    }
  };

  return (
    <motion.div
      className="border border-cyan-500/30 rounded-lg p-4 bg-black/50 neon-border space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div>
        <h3 className="text-sm font-bold text-cyan-400 mb-3 flex items-center gap-2">
          <Zap className="w-4 h-4" />
          CONTROLS
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="p-2 bg-cyan-500/10 rounded border border-cyan-500/20">
          <div className="text-cyan-300">Nodes</div>
          <div className="text-lg font-bold text-cyan-400">{nodeCount}</div>
        </div>
        <div className="p-2 bg-purple-500/10 rounded border border-purple-500/20">
          <div className="text-purple-300">Links</div>
          <div className="text-lg font-bold text-purple-400">{linkCount}</div>
        </div>
      </div>

      <div className="border-t border-cyan-500/20 pt-4 space-y-2">
        <label className="text-xs font-bold text-green-400 flex items-center gap-2">
          <Plus className="w-3 h-3" />
          Add Node
        </label>
        <input
          type="text"
          value={nodeLabel}
          onChange={(e) => setNodeLabel(e.target.value)}
          placeholder="Node label..."
          className="w-full px-3 py-2 bg-cyan-500/5 border border-cyan-500/30 rounded text-sm text-cyan-300"
          onKeyPress={(e) => e.key === 'Enter' && handleAddNode()}
        />
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="w-full px-3 py-2 bg-cyan-500/5 border border-cyan-500/30 rounded text-sm text-cyan-300"
        >
          <option value="default">Default</option>
          <option value="person">Person</option>
          <option value="organization">Organization</option>
          <option value="event">Event</option>
        </select>
        <motion.button
          whileHover={{ scale: 1.02 }}
          onClick={handleAddNode}
          className="w-full px-3 py-2 bg-green-500/20 border border-green-500/50 rounded text-sm font-bold text-green-400 hover:bg-green-500/30"
        >
          Add
        </motion.button>
      </div>
    </motion.div>
  );
}
