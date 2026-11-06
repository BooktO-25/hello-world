import React from 'react';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard,
  Building2,
  Tv,
  FolderOpen,
  ListMusic,
  PlaySquare,
  ShieldCheck,
  User,
  Users,
  AlertTriangle,
  Bell,
  BellOff,
  Rocket
} from 'lucide-react';
import { roleLabel } from '../lib/permissions';

interface SidebarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onlineCount: number;
  totalDevicesCount: number;
  staleCount: number;
  darkMode: boolean;
  notificationsEnabled: boolean;
  onToggleNotifications: () => void;
  /** Mobile-only slide-out drawer state — always visible on desktop
   * regardless of these. */
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  onlineCount,
  totalDevicesCount,
  staleCount,
  darkMode,
  notificationsEnabled,
  onToggleNotifications,
  isMobileOpen = false,
  onCloseMobile,
}) => {
  const { userProfile, openAuthModal } = useAuth();

  const handleSelectTab = (tab: string) => {
    onSelectTab(tab);
    onCloseMobile?.(); // picking a section also closes the mobile drawer
  };

  const managementItems = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
    { 
      id: 'businesses', 
      label: userProfile?.role === 'BUSINESS_OWNER' ? 'My Business & Locations' : 'Businesses & Tenants', 
      icon: Building2 
    },
    { id: 'devices', label: 'Devices', icon: Tv, badge: `${onlineCount}/${to�ۧq˞�