import { 
  collection, 
  doc, 
  onSnapshot, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit
} from 'firebase/firestore';
import { db, auth } from '../lib/firebase';
import { Business, Location, Device, ContentItem, Playlist, ActivityLog, TeamInvite } from '../types';

// Collection references
const BIZ_COL = 'businesses';
const LOC_COL = 'locations';
const DEV_COL = 'devices';
const CNT_COL = 'contents';
const PL_COL = 'playlists';
const ACT_COL = 'activityLogs';
const USR_COL = 'users';
const INV_COL = 'invites';

// Real-time Subscriptions with Server-Side Tenant Scoping

/** Businesses visible to a Regional Admin: only those in their assigned
 * region(s), via a whitelist query Firestore can verify is safe (unlike an
 * unfiltered collection scan, which region-scoped rules would reject outright). */
export function subscribeBusinessesForRegions(regions: string[], callback: (data: Business[]) => void) {
  if (!auth.currentUser || regions.length === 0) {
    callback([]);
    return () => {};
  }
  const q = query(collection(db, BIZ_COL), where('region', 'in', regions.slice(0, 10)));
  return onSnapshot(q, snapshot => {
    callback(snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Business)));
  }, error => console.warn('Region businesses subscription error:', error));
}

export function subscribeBusinesses(callback: (data: Business[]) => void, businessId?: string, role?: string) {
  if (!auth.currentUser) {
    callba�ۧq˞�