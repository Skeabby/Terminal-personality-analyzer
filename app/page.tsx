'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { NetworkGraph } from '@/components/network-graph';
import { ControlPanel } from '@/components/control-panel';
import { NodeInspector } from '@/components/node-inspector';
import { DataImporter } from '@/components/data-importer';
import { useNetworkStore } from '@/lib/store';
import { GraphData, Node } from '@/lib/types';

export default function Home() {
  const [showImporter, setShowImporter] = useState(false);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const { graphData, setGraphData, addNode, removeNode } = useNetworkStore();

  const handleImportData = (data: GraphData) => {
    setGraphData(data);
    setShowImporter(false);
  };

  const handleAddNode = (label: string, type: string) => {
    addNode(label, type);
  };

  const handleRemoveNode = () => {
    if (selectedNode) {
      removeNode(selectedNode.id);
      setSelectedNode(null);
    }
  };

  return (
    <main className="w-full h-screen flex flex-col bg-black">
      <Header onImport={() => setShowImporter(true)} />
      
      <div className="flex-1 flex gap-4 p-4 overflow-hidden">
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex-1 rounded-lg border border-cyan-500/30 overflow-hidden bg-black/50">
            <NetworkGraph
              data={graphData}
              onNodeClick={setSelectedNode}
            />
          </div>
        </div>

        <div className="w-80 flex flex-col gap-4 overflow-y-auto">
          <ControlPanel
            onAddNode={handleAddNode}
            nodeCount={graphData.nodes.length}
            linkCount={graphData.links.length}
          />

          {selectedNode && (
            <NodeInspector
              node={selectedNode}
              onRemove={handleRemoveNode}
            />
          )}
        </div>
      </div>

      {showImporter && (
        <DataImporter
          onImport={handleImportData}
          onClose={() => setShowImporter(false)}
        />
      )}
    </main>
  );
}
