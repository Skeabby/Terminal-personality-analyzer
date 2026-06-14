import * as d3 from 'd3';

export function createForceSimulation(data: any, width: number, height: number) {
  return d3
    .forceSimulation(data.nodes)
    .force('link', d3.forceLink(data.links).id((d: any) => d.id).distance(100))
    .force('charge', d3.forceManyBody().strength(-300))
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius((d: any) => (d.size || 20) + 10));
}

export function getNodeDegree(nodeId: string, links: any[]) {
  return links.filter((l) => l.source === nodeId || l.target === nodeId).length;
}
