import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Business, UserRole, TeamInvite } from '../types';
import { can, roleLabel, ASSIGNABLE_ROLES } from '../lib/permissions';
import {
  subscribeBusinessMembers,
  subscribeInvites,
  createInvite,
  revokeInvite,
  updateMemberRole,
  BusinessMember,
} from '../services/firebaseService';
import { UserPlus, Mail, ShieldCheck, Trash2, Users, Clock, X } from 'lucide-react';

interface TeamViewProps {
  selectedBusiness: Business;
  darkMode: boolean;
}

const ROLE_DESCRIPTIONS: Record<Exclude<UserRole, 'SUPER_ADMIN' | 'REGIONAL_ADMIN'>, string> = {
  BUSINESS_OWNER: 'Full control — devices, content, playlists, team, and business settings.',
  MANAGER: 'Runs day-to-day operations — devices, locations, content, and playlists. Cannot manage the team.',
  DESIGNER: 'Content only — uploads media and builds playlists. Cannot touch devices or the team.',
  VIEWER: 'Read-only — can see dashboards, devices, and content, but cannot create, edit, or delete anything.',
};

export const TeamView: React.FC<TeamViewProps> = ({ selectedBusiness, darkMode }) => {
  const { userProfile } = useAuth();
  const [members, setMembers] = useState<BusinessMember[]>([]);
  const [invites, setInvites] = useState<TeamInvite[]>([]);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<Exclude<UserRole, 'SUPER_ADMIN' | 'REGIONAL_ADMIN'>>('MANAGER'�ۧq˞�