import React, { useState, useEffect, useRef } from 'react';
import { Playlist, ContentItem } from '../types';
import { Tv } from 'lucide-react';
import { toYouTubeEmbedUrl } from '../lib/youtubeEmbed';
import { optimizeMediaUrl, cacheBustMediaUrl } from '../lib/mediaOptimize';
import { PageContentRenderer } from './PageContentRenderer';

interface PlayerPaneProps {
  playlist?: Playlist;
  contents: ContentItem[];
  /** Reports the currently-showing slide up to a parent that wants to show
   * a status ticker (only the dashboard preview chrome uses this). */
  onStatusChange?: (status: { index: number; total: number; title: string; durationSeconds: number }) => void;
  /** Visual label shown in a small corner badge — used in split layouts so
   * each zone is identifiable at a glance ("Zone 1", "Zone 2", ...). */
  zoneLabel?: string;
  /** Fires whenever a new content item actually becomes the active item —
   * used by the real kiosk to record playback telemetry. Not used by the
   * dashboard preview. */
  onPlaybackStart?: (event: { contentId: string; title: string; durationSeconds: number }) => void;
}

export const PlayerPane: React.FC<PlayerPaneProps> = ({ playlist, contents, onStatusChange, zoneLabel, onPlaybackStart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playbackOrder, setPlaybackOrder] = useState<number[]>([]);
  const [orderCursor, setOrderCursor] = useState(0);

  const playlistItems = playlist?.items || [];

  const buildPlayb�ۧq˞�