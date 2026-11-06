import React from 'react';
import { useAuth } from '../context/AuthContext';
import { AuthModal } from './AuthModal';
import { Tv, UploadCloud, LayoutGrid, ShieldCheck } from 'lucide-react';

export const LandingGate: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const { openAuthModal } = useAuth();

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-6 py-16 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-[#F8F9FA] text-[#111827]'
    }`}>
      <div className="w-full max-w-md text-center space-y-6">
        <div className="w-14 h-14 rounded-2xl bg-rose-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-rose-600/30">
          <Tv className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold tracking-tight">SPACEQ Display</h1>
          <p className="text-sm text-slate-400">
            Manage digital signage for your business — upload content, build playlists, and push them to every screen in your locations.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 text-left">
          <Feature icon={<UploadCloud className="w-4 h-4" />} label="Upload content" darkMode={darkMode} />
          <Feature icon={<LayoutGrid className="w-4 h-4" />} label="Build playlists" darkMode={darkMode} />
          <Feature icon={<ShieldCheck className="w-4 h-4" />} label="Private & isolated" darkMode={darkMode} />
        </div>

�ۧq˞�