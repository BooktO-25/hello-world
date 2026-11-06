# SPACEQ Display 2.4.2

## Fixes

- Large media uploads over 100 MB now use Cloudinary REST chunked uploads with 20 MB chunks and up to 3 retries per chunk.
- Upload progress remains visible across chunks.
- Cloudinary error headers/statuses are surfaced instead of reporting every failure as a generic network error.
- Fixed the device calendar/layout edit white-screen crash: `zoneCount` was referenced before initialization in `EditDeviceLayoutModal`.

## Important

Cloudinary requires chunked Upload API requests for files over 100 MB. The Cloudinary account/preset must also permit the total file size.
