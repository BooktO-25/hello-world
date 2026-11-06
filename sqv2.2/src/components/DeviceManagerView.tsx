import React, { useState, useEffect, useRef } from 'react';
import { Business, Location, Device, Playlist, LayoutMode, DeviceZone } from '../types';
import { useAuth } from '../context/AuthContext';
import { can } from '../lib/permissions';
import { effectiveStatus, formatLastSeen } from '../lib/deviceStatus';
import { resolveAllPanePlaylistIds, allAssignedPlaylistIds } from '../lib/scheduling';
import { LAYOUT_TEMPLATES, LAYOUT_TEMPLATE_CATEGORIES, getLayoutTemplate, LayoutTemplate } from '../data/layoutTemplates';
import { CustomLayoutStudio } from './CustomLayoutStudio';
import { 
  Tv, 
  Wifi, 
  WifiOff, 
  Trash2, 
  ExternalLink, 
  PlusCircle, 
  Key, 
  Compass, 
  HardDrive, 
  ListMusic, 
  CheckCircle2,
  Sliders,
  Copy,
  CalendarClock,
  Lock,
  X,
  Sparkles,
  RefreshCw
} from 'lucide-react';

interface DeviceManagerViewProps {
  devices: Device[];
  businesses: Business[];
  locations: Location[];
  playlists: Playlist[];
  selectedBusiness: Business;
  onClaimDevice: (code: string, name: string, locationId: string, playlistId: string, orientation: 'LANDSCAPE' | 'PORTRAIT', assignedPlaylistIds?: string[]) => Promise<void>;
  initialClaimCode?: string | null;
  onClaimCodeConsumed?: () => void;
  onUpdateDeviceLayout: (deviceId: string, layoutMode: LayoutMode, assignedPlaylistIds: string[], defaultPlaylistId: string, zones: DeviceZone[], rotation: 0 | 90 | 180 | 270, zoneWeights: number[], layoutTemplateId?: string) => void;
  onSyncDevice: (deviceId: string�ۧq˞�