# SPACEQ Display 2.4.4 — Main App Final Consolidation

This package consolidates the current main/CMS app work.

## Product flow
1. Add/manage devices. A device may exist without a playlist.
2. Content: upload/manage media and create playlists independently.
3. Layout Studio: create/reuse layouts, grid presets, freeform zones, crop/zoom/reposition/rotation.
4. Assign playlists to zones.
5. Preview the composition.
6. Select one or more devices and publish.

## Main fixes included from the current 2.4.x line
- Large-media upload path uses chunked upload handling for files above the normal single-upload limit.
- Device editor is separate from layout customization.
- Dedicated Layout Studio / grid customization.
- Per-zone media framing controls.
- Original media is not intentionally transcoded by the layout editor.
- Temporary display-facing status UI is intended to auto-dismiss after 20 seconds.

## Important
This is the main/CMS application package. It is not the Android Player APK.

Before production deployment, run the repository's normal dependency install and production build in GitHub Actions/Vercel and test the Device Editor and 155 MB upload against the live backend.
