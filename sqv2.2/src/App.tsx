import React, { useState, useEffect } from 'react';
import {
  Business,
  Location,
  Device,
  ContentItem,
  Playlist,
  ActivityLog,
  ContentType,
  LayoutMode,
  DeviceZone,
  TransitionEffect,
  PageContent
} from './types';

import { AuthProvider, useAuth } from './context/AuthContext';
import { AuthModal } from './components/AuthModal';
import { LandingGate } from './components/LandingGate';
import { BusinessOnboarding } from './components/BusinessOnboarding';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { DashboardView } from './components/DashboardView';
import { BusinessHierarchyView } from './components/BusinessHierarchyView';
import { DeviceManagerView } from './components/DeviceManagerView';
import { ContentLibraryView } from './components/ContentLibraryView';
import { PlaylistBuilderView } from './components/PlaylistBuilderView';
import { PlayerView } from './components/PlayerView';
import { TeamView } from './components/TeamView';
import { AnnouncementView } from './components/AnnouncementView';
import { SuperAdminConsole } from './components/SuperAdminConsole';
import { ShieldOff } from 'lucide-react';
import { useOfflineAlerts, notificationsGranted, requestNotificationPermission } from './lib/useOfflineAlerts';
import { effectiveStatus, formatLastSeen } from './lib/deviceStatus';
import { resolveAllPanePlaylistIds } from './lib/scheduling';
import { getLayoutTemplate } from './data/layoutTemplates';
im�ۧq˞�