'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { GraphData, Node } from '@/lib/types';

interface NetworkGraphProps {
  data: GraphData;
  onNodeClick: (node: Node) => void;
}

export function NetworkGraph({ data, onNodeClick }: NetworkGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || data.nodes.length === 0) return;

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    d3.select(svgRef.current).selectAll('*').remove();

    const svg = d3.select(svgRef.current).attr('width', width).attr('height', height);

    const simulation = d3
      .forceSimulation(data.nodes as any)
      .force('link', d3.forceLink(data.links as any).id((d: any) => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg
      .append('g')
      .selectAll('line')
      .data(data.links)
      .enter()
      .append('line')
      .attr('stroke', 'rgba(0, 240, 255, 0.5)')
      .attr('stroke-width', 2);

    const node = svg
      .append('g')
      .selectAll('circle')
      .data(data.nodes)
      .enter()
      .append('circle')
      .attr('r', (d: any) => d.size || 20)
      .attr('fill', (d: any) => d.color || 'rgb(0, 240, 255)')
      .attr('stroke', 'rgb(0, 240, 255)')
      .attr('stroke-width', 2)
      .on('click', (e: any, d: any) => onNodeClick(d))
      .call(
        d3.drag<SVGCircleElement, any>()
          .on('start', (e: any, d: any) => {
            if (!e.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          })
          .on('drag', (e: any, d: any) => {
            d.fx = e.x;
            d.fy = e.y;
          })
          .on('end', (e: any, d: any) => {
            if (!e.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          })
      );

    const labels = svg
      .append('g')
      .selectAll('text')
      .data(data.nodes)
      .enter()
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.3em')
      .attr('fill', 'white')
      .attr('font-size', '11px')
      .attr('font-weight', 'bold')
      .attr('pointer-events', 'none')
      .text((d: any) => d.label.substring(0, 10));

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y);
      labels.attr('x', (d: any) => d.x).attr('y', (d: any) => d.y);
    });
  }, [data]);

  return <svg ref={svgRef} className="w-full h-full" style={{ background: '#0a0a0a' }} />;
}
