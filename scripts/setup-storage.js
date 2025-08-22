import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables
const supabaseUrl = process.env.VITE_NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.VITE_NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables')
  console.error('VITE_NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl)
  console.error('VITE_NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY:', supabaseKey ? 'Found' : 'Missing')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function setupStorage() {
  try {
    console.log('Setting up Supabase Storage...')
    
    // Create assets bucket
    const { data: bucket, error: bucketError } = await supabase.storage
      .createBucket('assets', {
        public: true,
        allowedMimeTypes: ['image/*', 'video/*'],
        fileSizeLimit: 50 * 1024 * 1024 // 50MB
      })
    
    if (bucketError && !bucketError.message.includes('already exists')) {
      throw bucketError
    }
    
    console.log('✅ Assets bucket created/verified')
    
    // Upload hero background GIF
    const gifPath = path.join(__dirname, '../src/assets/hero-background.gif')
    
    if (fs.existsSync(gifPath)) {
      const gifFile = fs.readFileSync(gifPath)
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('assets')
        .upload('hero-background.gif', gifFile, {
          contentType: 'image/gif',
          cacheControl: '3600',
          upsert: true
        })
      
      if (uploadError) {
        throw uploadError
      }
      
      console.log('✅ Hero background GIF uploaded')
      
      // Get public URL
      const { data: urlData } = supabase.storage
        .from('assets')
        .getPublicUrl('hero-background.gif')
      
      console.log('🔗 Public URL:', urlData.publicUrl)
    } else {
      console.log('⚠️  Hero background GIF not found, skipping upload')
    }
    
    console.log('🎉 Storage setup completed!')
    
  } catch (error) {
    console.error('❌ Error setting up storage:', error)
    process.exit(1)
  }
}

setupStorage()