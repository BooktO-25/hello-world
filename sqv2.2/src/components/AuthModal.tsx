import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  X,
  ShieldCheck,
  Mail,
  Lock,
  Building2,
  LogOut,
  UserPlus,
  LogIn
} from 'lucide-react';

interface AuthModalProps {
  darkMode: boolean;
}

export const AuthModal: React.FC<AuthModalProps> = ({ darkMode }) => {
  const {
    userProfile,
    isAuthModalOpen,
    closeAuthModal,
    loginWithEmail,
    signupWithEmail,
    loginWithGoogle,
    authError,
    logout
  } = useAuth();

  const [mode, setMode] = useState<'LOGIN' | 'SIGNUP'>('LOGIN');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);
    try {
      await loginWithEmail(email, password);
    } catch (err: any) {
      setErrorMsg(err?.message || 'Failed to login with provided credentials.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);
    try {
      await signupWithEmail�ۧq˞�