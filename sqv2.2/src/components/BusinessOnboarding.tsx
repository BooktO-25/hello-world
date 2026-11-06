import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Building2, ArrowRight, LogOut } from 'lucide-react';

export const BusinessOnboarding: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const { userProfile, completeBusinessOnboarding, logout } = useAuth();
  const [businessName, setBusinessName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim()) return;
    setError('');
    setIsSubmitting(true);
    try {
      await completeBusinessOnboarding(businessName.trim());
    } catch (err: any) {
      setError(err?.message || 'Could not create your business. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center px-6 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-[#F8F9FA] text-[#111827]'
    }`}>
      <div className={`w-full max-w-sm rounded-2xl border shadow-2xl p-6 space-y-5 ${
        darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'
      }`}>
        <div className="w-12 h-12 rounded-xl bg-rose-600 text-white flex items-center justify-center">
          <Building2 className="w-6 h-6" />
        </div>

        <div className="space-y-1">
          <h1 className="text-lg font-extrabold">Welcome, {userProfile?.displ�ۧq˞�