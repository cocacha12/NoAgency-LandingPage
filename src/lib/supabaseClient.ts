import { createClient } from '@supabase/supabase-js'
import type { UserProfile, LoginCredentials, RegisterCredentials, Lead } from '../types/auth'

const supabaseUrl = import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_URL || 'https://ghllpsejvegdleerdger.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY || 'sb_publishable_wWi1n3RkZyw7ZAoeAbi0wA_v6ir41i2'

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Auth helpers
export const signInWithEmail = async (credentials: LoginCredentials) => {
  if (credentials.password) {
    // Sign in with email and password
    const { data, error } = await supabase.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    })
    return { data, error }
  } else {
    // Sign in with magic link
    const { data, error } = await supabase.auth.signInWithOtp({
      email: credentials.email,
      options: {
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    })
    return { data, error }
  }
}

export const signUpWithEmail = async (credentials: RegisterCredentials) => {
  const { data, error } = await supabase.auth.signUp({
    email: credentials.email,
    password: credentials.password,
    options: {
      data: {
        full_name: credentials.full_name,
        company_name: credentials.company_name,
        phone: credentials.phone,
      },
      emailRedirectTo: `${window.location.origin}/dashboard`,
    },
  })
  return { data, error }
}

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/dashboard`,
    },
  })
  return { data, error }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser()
  return { user, error }
}

export const getSession = async () => {
  const { data: { session }, error } = await supabase.auth.getSession()
  return { session, error }
}

// Profile management
export const getUserProfile = async (userId: string): Promise<{ profile: UserProfile | null; error: any }> => {
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()
  
  return { profile, error }
}

export const updateUserProfile = async (userId: string, updates: Partial<UserProfile>) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single()
  
  return { data, error }
}

// Lead management
export const createLead = async (leadData: Omit<Lead, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('leads')
    .insert([leadData])
    .select()
    .single()
  
  return { data, error }
}

export const getLeads = async () => {
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })
  
  return { data, error }
}

// Web content management
export const getWebContent = async (sectionKey?: string) => {
  let query = supabase
    .from('web_content')
    .select('*')
    .eq('is_active', true)
  
  if (sectionKey) {
    query = query.eq('section_key', sectionKey)
  }
  
  const { data, error } = await query.order('created_at', { ascending: false })
  return { data, error }
}

export const updateWebContent = async (sectionKey: string, contentValue: string, contentMetadata?: Record<string, any>) => {
  const { data, error } = await supabase
    .from('web_content')
    .upsert({
      section_key: sectionKey,
      content_value: contentValue,
      content_metadata: contentMetadata || {},
      is_active: true,
    })
    .select()
    .single()
  
  return { data, error }
}

// Real-time subscriptions
export const subscribeToAuthChanges = (callback: (event: string, session: any) => void) => {
  return supabase.auth.onAuthStateChange(callback)
}

export const subscribeToLeads = (callback: (payload: any) => void) => {
  return supabase
    .channel('leads')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'leads' }, callback)
    .subscribe()
}

export const subscribeToWebContent = (callback: (payload: any) => void) => {
  return supabase
    .channel('web_content')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'web_content' }, callback)
    .subscribe()
}