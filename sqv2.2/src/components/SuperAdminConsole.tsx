import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Business } from '../types';
import {
  subscribeBusinesses,
  findUserByEmail,
  setRegionalAdmin,
  updateBusinessRegion,
  PlatformUser,
} from '../services/firebaseService';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Building2, MapPin, UserPlus, ShieldCheck, Search, LogOut, Check } from 'lucide-react';

export const SuperAdminConsole: React.FC = () => {
  const { userProfile, logout } = useAuth();
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [regionalAdmins, setRegionalAdmins] = useState<PlatformUser[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const [inviteEmail, setInviteEmail] = useState('');
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [newRegion, setNewRegion] = useState('');
  const [status, setStatus] = useState<{ type: 'error' | 'success'; text: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const unsub = subscribeBusinesses(setBusinesses, '', 'SUPER_ADMIN');
    const unsubAdmins = onSnapshot(
      query(collection(db, 'users'), where('role', '==', 'REGIONAL_ADMIN')),
      snap => setRegionalAdmins(snap.docs.map(d => ({ uid: d.id, ...d.data() } as PlatformUser)))
    );
    return () => { unsub(); unsubAdmins(); };
  }, []);

  const k�ۧq˞�