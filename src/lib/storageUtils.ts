import { supabase } from './supabaseClient'

/**
 * Uploads a file to Supabase Storage
 * @param file - The file to upload
 * @param bucket - The storage bucket name
 * @param path - The path where to store the file
 * @returns Promise with the uploaded file data
 */
export async function uploadFile(file: File, bucket: string, path: string) {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) {
      throw error
    }

    return data
  } catch (error) {
    console.error('Error uploading file:', error)
    throw error
  }
}

/**
 * Gets the public URL for a file in Supabase Storage
 * @param bucket - The storage bucket name
 * @param path - The path to the file
 * @returns The public URL string
 */
export function getPublicUrl(bucket: string, path: string): string {
  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(path)

  return data.publicUrl
}

/**
 * Deletes a file from Supabase Storage
 * @param bucket - The storage bucket name
 * @param path - The path to the file
 * @returns Promise with the deletion result
 */
export async function deleteFile(bucket: string, path: string) {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .remove([path])

    if (error) {
      throw error
    }

    return data
  } catch (error) {
    console.error('Error deleting file:', error)
    throw error
  }
}

/**
 * Lists files in a Supabase Storage bucket
 * @param bucket - The storage bucket name
 * @param path - The folder path (optional)
 * @returns Promise with the list of files
 */
export async function listFiles(bucket: string, path?: string) {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .list(path, {
        limit: 100,
        offset: 0
      })

    if (error) {
      throw error
    }

    return data
  } catch (error) {
    console.error('Error listing files:', error)
    throw error
  }
}

// Predefined bucket names
export const STORAGE_BUCKETS = {
  ASSETS: 'assets',
  UPLOADS: 'uploads',
  MEDIA: 'media'
} as const

// Helper function to get asset URL
export function getAssetUrl(filename: string): string {
  // For development, use local assets first, then fallback to Supabase
  if (filename === 'hero-background.gif') {
    // Return the public asset URL
    return '/hero-background.gif'
  }
  if (filename === 'brandy-logo.png') {
    // Return the Supabase storage URL for logo
    return 'https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_logo_w.png'
  }
  if (filename === 'brandy-title.png') {
    // Return the Supabase storage URL for title
    return 'https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_title_w.png'
  }
  return getPublicUrl(STORAGE_BUCKETS.ASSETS, filename)
}