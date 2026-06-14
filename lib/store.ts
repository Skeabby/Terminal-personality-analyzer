import { create } from 'zustand';
import { GraphData, Node, Link } from './types';

interface NetworkStore {
  graphData: GraphData;
  addNode: (label: string, type: string) => void;
  addLink: (source: string, target: string) => void;
  removeNode: (nodeId: string) => void;
}

const generateId = () => Math.random().toString(36).substr(2, 9);

export const useNetworkStore = create<NetworkStore>((set) => ({
  graphData: {
    nodes: [
      { id: '1', label: 'Node 1', type: 'default', color: 'rgb(0,240,255)' },
      { id: '2', label: 'Node 2', type: 'default', color: 'rgb(0,240,255)' },
    ],
    links: [
      { id: 'l1', source: '1', target: '2' },
    ],
  },

  addNode: (label, type) =>
    set((state) => ({
      graphData: {
        ...state.graphData,
        nodes: [
          ...state.graphData.nodes,
          {
            id: generateId(),
            label,
            type,
            color: 'rgb(0,240,255)',
            size: 25,
          },
        ],
      },
    })),

  addLink: (source, target) =>
    set((state) => ({
      graphData: {
        ...state.graphData,
        links: [
          ...state.graphData.links,
          {
            id: generateId(),
            source,
            target,
          },
        ],
      },
    })),

  removeNode: (nodeId) =>
    set((state) => ({
      graphData: {
        nodes: state.graphData.nodes.filter((n) => n.id !== nodeId),
        links: state.graphData.links.filter(
          (l) => l.source !== nodeId && l.target !== nodeId
        ),
      },
    })),
}));
