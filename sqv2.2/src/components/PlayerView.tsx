import React, { useState, useEffect, useRef } from 'react';
import { Device, Playlist, ContentItem } from '../types';
import { getLayoutTemplate } from '../data/layoutTemplates';
import { PlayerPane } from './PlayerPane';
import {
  Wifi,
  WifiOff,
  Tv,
  Compass,
  HardDrive,
  Activity,
  X,
  Clock,
  Maximize,
  Minimize
} from 'lucide-react';

interface PlayerViewProps {
  device: Device;
  /** One entry for a normal full-screen device, or one per split zone
   * (2 or 3) for a split-layout device — see resolveAllPanePlaylistIds(). */
  panePlaylists: (Playlist | undefined)[];
  contents: ContentItem[];
  onHeartbeat: (deviceId: string) => void;
  onExitPlayer?: () => void;
  darkMode: boolean;
  /** Kiosk mode hides the exit/preview-only controls, for real TV deployments. */
  kioskMode?: boolean;
  /** Fires whenever zone 0's active content changes — used by the real
   * kiosk to record playback telemetry. Left undefined in the dashboard
   * preview, which shouldn't count as real playback. */
  onPlaybackStart?: (event: { contentId: string; title: string; durationSeconds: number }) => void;
}

export const PlayerView: React.FC<PlayerViewProps> = ({
  device,
  panePlaylists,
  contents,
  onHeartbeat,
  onExitPlayer,
  darkMode,
  kioskMode = false,
  onPlaybackStart,
}) => {
  const [isSimulatedOffline, setIsSimulatedOffline] = useState(false);
  const [heartbeatCounter, setHeartbeatCounter] = useState(30);
  const [orientation, setOrientation] = useState<'LAN�ۧq˞�