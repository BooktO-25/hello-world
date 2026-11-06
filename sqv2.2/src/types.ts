/**
 * SPACEQ Display - Domain Types
 * Multi-Tenant Digital Signage Operating System
 */

export type UserRole = 'SUPER_ADMIN' | 'REGIONAL_ADMIN' | 'BUSINESS_OWNER' | 'MANAGER' | 'DESIGNER' | 'VIEWER';

export type TransitionEffect = 'FADE' | 'SLIDE' | 'ZOOM' | 'NONE';

export type ContentType = 'IMAGE' | 'VIDEO' | 'PDF' | 'YOUTUBE' | 'WEBSITE' | 'CANVA' | 'TEMPLATE';

export type PageTemplateId = 'ANNOUNCEMENT' | 'OFFER' | 'MENU' | 'QUOTE';

/** A curated look — background + accent colors chosen to always look good
 * together, so a non-technical business owner can't accidentally pick an
 * unreadable combination the way a raw color picker would allow. */
export interface PageTheme {
  id: string;
  label: string;
  bg: string;       // CSS background (solid or gradient)
  text: string;      // primary text color
  accent: string;    // accent color for badges/dividers/prices
  textDim: string;   // secondary text color
  onAccent: string;  // text color to use ON TOP of the accent color (badges)
}

export const PAGE_THEMES: PageTheme[] = [
  { id: 'midnight', label: 'Midnight', bg: 'linear-gradient(135deg,#0F172A,#1E293B)', text: '#FFFFFF', accent: '#F43F5E', textDim: '#94A3B8', onAccent: '#FFFFFF' },
  { id: 'cream', label: 'Cream & Clay', bg: '#F4F1EA', text: '#2A2118', accent: '#C2622E', textDim: '#7A6E5D', onAccent: '#FFFFFF' },
  { id: 'emerald', label: 'Emerald', bg: 'linear-gradient(135deg,#064E3B,#065F46)', text: '#ECFDF5', accent: '#34D399', textDim: '#A7F3D0', �ۧq˞�