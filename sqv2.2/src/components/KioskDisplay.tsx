import React, { useEffect, useState, useRef } from 'react';
import { doc, onSnapshot, setDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Device, Playlist, ContentItem } from '../types';
import { PlayerView } from './PlayerView';
import { resolveAllPanePlaylistIds, allAssignedPlaylistIds } from '../lib/scheduling';
import { Tv, Copy, CheckCircle2, Maximize } from 'lucide-react';
import QRCode from 'qrcode';

const STORAGE_KEY = 'spaceq_device_id';
const APP_VERSION = 'v2.2.2-kiosk';
const OFFLINE_SNAPSHOT_KEY = 'spaceq_offline_cycle_v1';

function generateCode(): string {
  // 6-digit numeric code, easy to read and type from across a room.
  return String(Math.floor(100000 + Math.random() * 900000));
}

/**
 * The TV/kiosk entry point. Every physical display opens the exact same
 * fixed URL (no device ID, no business ID, nothing identifying in the URL
 * at all). On first load it mints its own 6-digit pairing code, creates an
 * unclaimed placeholder device doc using that code as its permanent ID, and
 * displays the code full-screen. A Business Owner enters that code once in
 * their dashboard to claim it. From then on this same browser reconnects to
 * the same device ID forever (stored in localStorage) — no new code is ever
 * generated again unless the device is unpaired/deleted or local storage is
 * cleared, matching "don't regenerate while still active."
 *
 * Crucially: this never calls Firebase Auth (no signInAn�ۧq˞�