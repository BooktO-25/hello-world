import React, { useState } from 'react';
import { Business, Location, Device } from '../types';
import { useAuth } from '../context/AuthContext';
import { Building2, MapPin, Tv, Plus, Check, ChevronRight, ShieldAlert } from 'lucide-react';

interface BusinessHierarchyViewProps {
  businesses: Business[];
  locations: Location[];
  devices: Device[];
  selectedBusiness: Business;
  onSelectBusiness: (biz: Business) => void;
  onAddBusiness: (name: string, brandColor: string) => void;
  onAddLocation: (businessId: string, name: string, city: string, address: string) => void;
  darkMode: boolean;
}

export const BusinessHierarchyView: React.FC<BusinessHierarchyViewProps> = ({
  businesses,
  locations,
  devices,
  selectedBusiness,
  onSelectBusiness,
  onAddBusiness,
  onAddLocation,
  darkMode,
}) => {
  const { userProfile } = useAuth();
  const isBusinessOwner = userProfile?.role === 'BUSINESS_OWNER';

  const [showBizModal, setShowBizModal] = useState(false);
  const [showLocModal, setShowLocModal] = useState(false);

  const [newBizName, setNewBizName] = useState('');
  const [newBizColor, setNewBizColor] = useState('#E11D48');

  const [newLocName, setNewLocName] = useState('');
  const [newLocCity, setNewLocCity] = useState('');
  const [newLocAddress, setNewLocAddress] = useState('');

  const currentLocations = locations.filter(l => l.businessId === selectedBusiness.id);

  const handleCreateBusiness = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBizN�ۧq˞�