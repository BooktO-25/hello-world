import React, { useState } from 'react';
import { Business, ContentItem, Playlist, ScheduleRule, MediaFraming } from '../types';
import { useAuth } from '../context/AuthContext';
import { can } from '../lib/permissions';
import { DAY_LABELS } from '../lib/scheduling';
import { 
  ListMusic, 
  Plus, 
  Trash2, 
  Clock, 
  Repeat, 
  Shuffle, 
  Calendar, 
  ArrowUp, 
  ArrowDown, 
  SlidersHorizontal, 
  Play, 
  Check, 
  Sparkles,
  X
} from 'lucide-react';

interface PlaylistBuilderViewProps {
  playlists: Playlist[];
  contents: ContentItem[];
  selectedBusiness: Business;
  onUpdatePlaylist: (updatedPlaylist: Playlist) => void;
  onCreatePlaylist: (name: string, description: string) => void;
  darkMode: boolean;
}

export const PlaylistBuilderView: React.FC<PlaylistBuilderViewProps> = ({
  playlists,
  contents,
  selectedBusiness,
  onUpdatePlaylist,
  onCreatePlaylist,
  darkMode,
}) => {
  const { userProfile } = useAuth();
  const canManage = can(userProfile?.role, 'managePlaylists');

  const bizPlaylists = playlists.filter(p => p.businessId === selectedBusiness.id);
  const bizContents = contents.filter(c => c.businessId === selectedBusiness.id);

  const [activePlaylistId, setActivePlaylistId] = useState<string>(bizPlaylists[0]?.id || '');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [framingItemId, setFramingItemId] = useState<string | null>(null);
  const [framingDr�ۧq˞�