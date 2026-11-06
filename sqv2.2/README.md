# SPACEQ Display 2.4.0 — Layout Studio

This build adds the SPACEQ Layout Studio: a simple freeform composition editor for multi-zone displays.

Highlights:
- Freeform zones with drag, resize, snap-to-grid and numeric positioning.
- 1–4 zone quick layouts plus unlimited additional zones.
- Duplicate, delete and lock zones.
- Per-zone playlist assignment and default playlist.
- Landscape and portrait canvas preview.
- Custom layouts render directly on the player using percentage geometry.
- Existing 128 preset layouts remain available.
- Existing per-media Frame controls remain available for crop, zoom, position and rotation.
- Original media files are never modified or transcoded by the layout editor.

Note: this source package could not run a dependency install in the sandbox, so the final Vercel/GitHub build should run `npm ci` before `npm run build`.
# SPACEQ Display - Multi-Tenant Digital Signage System

## What was broken

This project (generated in Google AI Studio) built and typechecked fine, but had no
working way for an actual TV/display to show content on its own — the player only
existed as a screen *inside* the logged-in admin dashboard. Fixed:

- Added a standalone kiosk player (`src/components/PublicPlayer.tsx`) that loads
  with `?display=<deviceId>` in the URL, signs in anonymously, and streams just
  that one device's playlist — no dashboard login needed.
- Fixed the "Display URL" button in Device Manager, which built a broken
  `/player/<id>` link (n�ۧq˞�