import { Device, DeviceZone, Playlist, ScheduleRule, zoneCountFor } from '../types';
import { getLayoutTemplate } from '../data/layoutTemplates';

function timeToMinutes(t: string): number {
  const [h, m] = t.split(':').map(Number);
  return (h || 0) * 60 + (m || 0);
}

function localDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function isDateInRange(rule: ScheduleRule, now: Date): boolean {
  // Schedule dates are entered as local calendar dates. Using toISOString()
  // here silently converted them to UTC and could shift a rule by one day
  // around midnight in India and other positive-offset time zones.
  const dateStr = localDateString(now);
  if (rule.startDate && dateStr < rule.startDate) return false;
  if (rule.endDate && dateStr > rule.endDate) return false;
  return true;
}

/**
 * Whether a single ScheduleRule is active at `now`. Supports same-day windows
 * (e.g. 07:00–11:00) and overnight windows that cross midnight (e.g. 22:00–02:00).
 */
export function isScheduleRuleActive(rule: ScheduleRule, now: Date = new Date()): boolean {
  if (!isDateInRange(rule, now)) return false;

  const day = now.getDay(); // 0=Sun..6=Sat
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const startMin = timeToMinutes(rule.startTime);
  const endMin = timeToMinutes(rule.endTime);

  if (star�ۧq˞�