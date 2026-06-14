'use client';

import { useState } from 'react';
import { GraphData, Node } from '@/lib/types';
import { useNetworkStore } from '@/lib/store';

export default function Home() {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const { graphData, addNode } = useNetworkStore();

  return (
    <main className="w-full h-screen flex bg-black">
      <div className="flex-1 border border-cyan-500 rounded">
        <svg className="w-full h-full" />
      </div>
      <div className="w-80 border-l border-cyan-500 p-4 bg-black/50">
        <h2 className="text-cyan-400 font-bold mb-4">Network Graph</h2>
        <p className="text-gray-400">Nodes: {graphData.nodes.length}</p>
        <p className="text-gray-400">Links: {graphData.links.length}</p>
      </div>
    </main>
  );
}
