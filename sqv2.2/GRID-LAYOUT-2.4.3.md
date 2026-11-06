# SPACEQ Display 2.4.3 — Device Editor + Grid Studio

- The device-card calendar-looking icon is the **Device Editor**; its tooltip now says `Edit device layout & content`.
- The Device Editor keeps a dedicated left-side Layout Studio and a simple right-side content assignment panel.
- Grid customization is now explicit: **Customize grid** is available beside Customize layout.
- Grid Studio provides quick 2×2, 2×3, 3×2, 3×3 and 4×4 starting layouts, followed by drag/resize/snap editing.
- Existing playlist assignments are preserved when changing the grid geometry where possible.
- The original media is never altered by layout editing.
- The previous zone-count initialization fix remains in place so opening Device Editor does not reference an uninitialized `zoneCount`.
