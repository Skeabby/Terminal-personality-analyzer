'use client';

import { Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Node } from '@/lib/types';

interface NodeInspectorProps {
  node: Node;
  onRemove: () => void;
}

export function NodeInspector({ node, onRemove }: NodeInspectorProps) {
  return (
    <motion.div
      className="border border-purple-500/30 rounded-lg p-4 bg-black/50 neon-border space-y-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <h3 className="text-xs font-bold text-purple-400 mb-1">NODE DETAILS</h3>
          <p className="text-sm font-bold text-white break-all">{node.label}</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={onRemove}
          className="p-2 text-red-400 hover:bg-red-500/20 rounded"
        >
          <Trash2 className="w-4 h-4" />
        </motion.button>
      </div>

      <div className="space-y-2 text-xs">
        <div>
          <div className="text-purple-300 mb-1">Type</div>
          <div className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-purple-400">
            {node.type}
          </div>
        </div>
        <div>
          <div className="text-purple-300 mb-1">ID</div>
          <div className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-purple-400 font-mono truncate">
            {node.id}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
