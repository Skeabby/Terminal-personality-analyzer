export interface Node {
  id: string;
  label: string;
  type: string;
  x?: number;
  y?: number;
  color?: string;
  size?: number;
  metadata?: Record<string, any>;
}

export interface Link {
  id: string;
  source: string;
  target: string;
  label?: string;
  weight?: number;
  color?: string;
}

export interface GraphData {
  nodes: Node[];
  links: Link[];
}
