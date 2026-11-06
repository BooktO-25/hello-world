import cloudinaryConfig from '../../cloudinary-config.json';

export interface UploadResult {
  url: string;
  bytes: number;
}

const LARGE_FILE_THRESHOLD = 100 * 1024 * 1024;
const CHUNK_SIZE = 20 * 1024 * 1024;
const MAX_RETRIES = 3;

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function uploadRequest(
  url: string,
  formData: FormData,
  headers: Record<string, string>,
  onProgress: (loaded: number, total: number) => void,
  chunkBytes: number,
): Promise<any> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    Object.entries(headers).forEach(([key, value]) => xhr.setRequestHeader(key, value));

    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) onProgress(e.loaded, chunkBytes);
    };

    xhr.onload = () => {
      let body: any = null;
      try { body = JSON.parse(xhr.responseText || '{}'); } catch { /* handled below */ }
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(body);
      } else {
        const detail = body?.error?.message || xhr.getResponseHeader('X-Cld-Error') || `HTTP ${xhr.status}`;
        reject(new Error(detail));
      }
    };
    xhr.onerror = () => reject(new Error('Network error during upload.'));
    xhr.ontimeout = () => reject(new Error('Upload request timed out.'));
    xhr.send(formData);
  });
}

async function uploadLargeFile(file: File, onProgress: (percent: number) => void): Promise<Uplo�ۧq˞�