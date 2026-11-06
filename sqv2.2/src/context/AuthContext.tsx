import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  User as FirebaseUser,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, googleProvider, db } from '../lib/firebase';
import { UserRole, Business } from '../types';
import { saveBusiness, findPendingInviteForEmail, markInviteAccepted } from '../services/firebaseService';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;
  businessId: string; // '' only for SUPER_ADMIN, REGIONAL_ADMIN, or a not-yet-onboarded account
  /** Only set for REGIONAL_ADMIN — the geography label(s) they can manage
   * (matches Business.region). Assigned by a Super Admin, never self-set. */
  assignedRegions?: string[];
  createdAt: string;
}

interface AuthContextType {
  user: FirebaseUser | null;
  userProfile: UserProfile | null;
  loading: boolean;
  authError: string | null;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  loginWithEmail: (email: string, pass: string) => Promise<void>;
  /** Self-serve signup: always creates a brand-new Business the caller owns. */
  signupWithEmail: (email: string, pass: string, name: string, businessName: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  /** �ۧq˞�