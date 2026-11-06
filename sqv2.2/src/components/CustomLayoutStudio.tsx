import React, { useMemo, useRef, useState } from 'react';
import { Copy, Grid3X3, Lock, Maximize2, Minus, Plus, RotateCcw, Sparkles, Trash2, Unlock } from 'lucide-react';
import { DeviceZone } from '../types';

export interface ZoneGeometry {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Props {
  zones: DeviceZone[];
  setZones: React.Dispatch<React.SetStateAction<DeviceZone[]>>;
  darkMode: boolean;
  orientation: 'LANDSCAPE' | 'PORTRAIT';
}

const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));
const snap = (n: number) => Math.round(n / 2) * 2;

const ensureGeometry = (zone: DeviceZone, index: number, total: number): DeviceZone => {
  if (zone.geometry) return zone;
  if (total === 2) return { ...zone, geometry: index === 0 ? { x: 0, y: 0, width: 50, height: 100 } : { x: 50, y: 0, width: 50, height: 100 } };
  if (total === 3) return { ...zone, geometry: index === 0 ? { x: 0, y: 0, width: 66, height: 100 } : index === 1 ? { x: 66, y: 0, width: 34, height: 50 } : { x: 66, y: 50, width: 34, height: 50 } };
  const col = index % 2, row = Math.floor(index / 2);
  return { ...zone, geometry: { x: col * 50, y: row * 50, width: 50, height: 50 } };
};

const gridPresets = (rows: number, cols: number): ZoneGeometry[] => Array.from({ length: rows * cols }, (_, i) => {
  const col = i % cols;
  const row = Math.floor(i / cols);
  return { x: col * (100 / cols), y: row * (100 / rows), width: 100 / cols, height: 100 / rows }�ۧq˞�