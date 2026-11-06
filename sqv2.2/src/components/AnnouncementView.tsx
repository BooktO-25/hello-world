import React, { useState, useEffect, useRef } from 'react';
import { Device, Playlist } from '../types';
import { isBroadcastActive } from '../lib/scheduling';
import { Rocket, Tv, ListMusic, Clock, ChevronUp, Radio, X } from 'lucide-react';

const DURATIONS: { label: string; seconds: number | null }[] = [
  { label: '5 min', seconds: 5 * 60 },
  { label: '30 min', seconds: 30 * 60 },
  { label: '1 hour', seconds: 60 * 60 },
  { label: 'Until landed', seconds: null },
];

function formatRemaining(expiresAt: string | null): string {
  if (!expiresAt) return 'No timer';
  const ms = new Date(expiresAt).getTime() - Date.now();
  if (ms <= 0) return 'Ending…';
  const totalSec = Math.floor(ms / 1000);
  const m = Math.floor(totalSec / 60).toString().padStart(2, '0');
  const s = (totalSec % 60).toString().padStart(2, '0');
  return `T–${m}:${s}`;
}

interface AnnouncementViewProps {
  devices: Device[];
  playlists: Playlist[];
  darkMode: boolean;
  onLaunch: (deviceIds: string[], playlistId: string, durationSeconds: number | null) => Promise<void>;
  onLand: (deviceId: string) => Promise<void>;
}

export const AnnouncementView: React.FC<AnnouncementViewProps> = ({ devices, playlists, darkMode, onLaunch, onLand }) => {
  const [selectedDeviceIds, setSelectedDeviceIds] = useState<string[]>(devices.map(d => d.id));
  const [playlistId, setPlaylistId] = useState(playlists[0]?.id || '');
  const [durationIdx, setDurationIdx] = useState(1);
  const [phase, setPhase] = useState<'i�ۧq˞�