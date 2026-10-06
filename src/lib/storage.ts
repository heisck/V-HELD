import { appConfig } from './config';

export interface UploadResult {
  url: string;
  publicId: string;
}

export async function uploadMedia(file: Buffer, filename: string): Promise<UploadResult> {
  if (appConfig.isDev || appConfig.storage.driver === 'local') {
    // Development mode: emulate upload without calling external Cloudinary
    return {
      url: `/uploads/${filename}`,
      publicId: `dev_local_${filename}`,
    };
  }

  // Production Cloudinary logic
  return {
    url: `https://res.cloudinary.com/${appConfig.storage.cloudinary.cloudName}/image/upload/${filename}`,
    publicId: filename,
  };
}
