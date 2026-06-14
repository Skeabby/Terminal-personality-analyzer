export function generateSampleData() {
  return {
    nodes: [
      { id: '1', label: 'Alice', type: 'person', color: 'rgb(255, 0, 110)', size: 30 },
      { id: '2', label: 'Bob', type: 'person', color: 'rgb(255, 0, 110)', size: 25 },
      { id: '3', label: 'Charlie', type: 'person', color: 'rgb(255, 0, 110)', size: 25 },
      { id: '4', label: 'Tech Corp', type: 'organization', color: 'rgb(0, 255, 65)', size: 35 },
      { id: '5', label: 'Conference 2024', type: 'event', color: 'rgb(255, 100, 0)', size: 28 },
    ],
    links: [
      { id: 'l1', source: '1', target: '4', label: 'Works at', weight: 2 },
      { id: 'l2', source: '2', target: '4', label: 'Works at', weight: 2 },
      { id: 'l3', source: '1', target: '2', label: 'Friends', weight: 1 },
      { id: 'l4', source: '3', target: '5', label: 'Attending', weight: 1 },
      { id: 'l5', source: '1', target: '5', label: 'Speaking', weight: 2 },
    ],
  };
}

export function exportGraphAsJSON(data: any) {
  return JSON.stringify(data, null, 2);
}
