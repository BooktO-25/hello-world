import React, { useState } from 'react';
import { Business, Location, Device, ContentItem, ActivityLog } from '../types';
import { 
  Tv, 
  ArrowUpRight, 
  Search,
  Filter,
  MoreVertical,
  Activity,
  Plus
} from 'lucide-react';

interface DashboardViewProps {
  businesses: Business[];
  locations: Location[];
  devices: Device[];
  contents: ContentItem[];
  activities: ActivityLog[];
  selectedBusiness: Business;
  darkMode: boolean;
  onNavigateToDevices: () => void;
  onNavigateToContent: () => void;
  onNavigateToPlaylists: () => void;
  onPairNewDevice: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  businesses,
  locations,
  devices,
  contents,
  activities,
  selectedBusiness,
  darkMode,
  onNavigateToDevices,
  onNavigateToContent,
  onNavigateToPlaylists,
  onPairNewDevice,
}) => {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredLocations = locations.filter(l => l.businessId === selectedBusiness.id);
  const filteredDevices = devices.filter(d => d.businessId === selectedBusiness.id);
  const onlineDevices = filteredDevices.filter(d => d.status === 'ONLINE');
  const offlineDevices = filteredDevices.filter(d => d.status === 'OFFLINE');

  const displayedDevices = filteredDevices.filter(d => 
    d.name.toLowerCase().includes(filterQuery.toLowerCase()) || 
    d.ipAddress.includes(filterQuery)
  );

  return (
    <div className={`p-6 lg:p-8 space-y-8 min-h-full transition-colors ${
      darkMode ? 'bg-sla�ۧq˞�