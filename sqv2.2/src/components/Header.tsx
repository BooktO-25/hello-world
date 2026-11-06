import React from 'react';
import { Business, Location } from '../types';
import { useAuth } from '../context/AuthContext';
import { 
  Building2, 
  MapPin, 
  Sun, 
  Moon, 
  Play, 
  Plus,
  User,
  ShieldCheck,
  Database,
  Menu
} from 'lucide-react';

interface HeaderProps {
  businesses: Business[];
  selectedBusiness: Business;
  onSelectBusiness: (biz: Business) => void;
  locations: Location[];
  selectedLocationId: string;
  onSelectLocationId: (locId: string) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenLivePlayer: () => void;
  activeTab: string;
  onOpenMobileNav?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  businesses,
  selectedBusiness,
  onSelectBusiness,
  locations,
  selectedLocationId,
  onSelectLocationId,
  darkMode,
  onToggleDarkMode,
  onOpenLivePlayer,
  activeTab,
  onOpenMobileNav,
}) => {
  const { userProfile, openAuthModal } = useAuth();
  const filteredLocations = locations.filter(l => l.businessId === selectedBusiness.id);

  return (
    <header className={`h-16 border-b px-6 lg:px-8 flex items-center justify-between sticky top-0 z-30 transition-colors ${
      darkMode ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-gray-200 text-gray-900'
    }`}>
      {/* Title & Network Status Subtitle */}
      <div className="flex items-center gap-3 sm:gap-6 min-w-0">
        {onOpenMobileNav && (
          <button
            onClick={onOpenMobileNav}
            className={`md:hidde�ۧq˞�