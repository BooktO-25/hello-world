export interface ArchitectureDoc {
  id: string;
  title: string;
  category: string;
  description: string;
  markdownContent: string;
}

export const architectureDocs: ArchitectureDoc[] = [
  {
    id: 'prd',
    title: '1. Product Requirement Document (PRD)',
    category: 'Product & Vision',
    description: 'Executive overview, scope, core workflows, business hierarchy, and user roles.',
    markdownContent: `
# SPACEQ Display - Product Requirement Document (PRD)

## 1. Vision & Core Mission
**SPACEQ Display** is an enterprise-grade, cloud-first Business Display Operating System that transforms standard TVs, Android TVs, touch tablets, HDMI sticks, and mini PCs into remotely managed, smart commercial displays.

### Key Value Proposition
- **Zero In-Person Maintenance**: Never update USB thumb drives or physically touch displays again.
- **Unified Cloud Management**: Instant content publishing across single stores or 10,000+ global locations.
- **Resilient Offline Playback**: Edge caching ensures 100% uptime even during internet outages.
- **Future-Ready Modular Kernel**: Architecture designed to plug in Interactive Kiosks, Self-Ordering, AI Analytics, and Queue Systems without rewriting core services.

---

## 2. MVP Scope (Phase 1: Digital Signage)
Focus exclusively on high-performance Digital Signage to validate unit economics and SaaS scalability.

### Included Features:
1. **Multi-Tenant Hierarchy**: Business -> Locations -> Devices -> Playlists -> Content.
2. **Role�ۧq˞�