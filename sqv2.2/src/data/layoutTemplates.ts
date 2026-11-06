export type LayoutTemplateCategory = 'Featured' | 'Grid' | 'Split' | 'Mosaic' | 'Editorial';

export interface LayoutTemplate {
  id: string;
  name: string;
  category: LayoutTemplateCategory;
  columns: number;
  rows: number;
  areas: string[];
  zoneCount: number;
  description: string;
}

const areaNames = (count: number) => Array.from({ length: count }, (_, i) => `z${i + 1}`);

function uniqueGrid(columns: number, rows: number): string[] {
  return Array.from({ length: rows }, (_, r) =>
    areaNames(columns).map((_, c) => `z${r * columns + c + 1}`).join(' ')
  );
}

function featuredGrid(columns: number, rows: number, mainSide: 'left' | 'right' | 'top' | 'bottom', mainSpan: number): string[] {
  const cells = Array.from({ length: rows }, () => Array(columns).fill(''));
  let zone = 1;
  if (mainSide === 'left' || mainSide === 'right') {
    const start = mainSide === 'left' ? 0 : columns - mainSpan;
    for (let r = 0; r < rows; r++) for (let c = start; c < start + mainSpan; c++) cells[r][c] = 'z1';
    for (let r = 0; r < rows; r++) for (let c = 0; c < columns; c++) if (!cells[r][c]) cells[r][c] = `z${++zone}`;
  } else {
    const start = mainSide === 'top' ? 0 : rows - mainSpan;
    for (let r = start; r < start + mainSpan; r++) for (let c = 0; c < columns; c++) cells[r][c] = 'z1';
    for (let r = 0; r < rows; r++) for (let c = 0; c < columns; c++) if (!cells[r][c]) cells[r][c] = `z${++zone}`;
  }
  return cells.map(row => row.join(' '));
}

function checkerMosaic(�ۧq˞�