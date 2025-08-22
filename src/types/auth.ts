// Authentication types for the application

export interface UserProfile {
  id: string
  email: string
  full_name?: string
  company_name?: string
  phone?: string
  role: 'user' | 'admin'
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface UserSession {
  id: string
  user_id: string
  session_token: string
  ip_address?: string
  user_agent?: string
  expires_at: string
  created_at: string
  last_activity: string
}

export interface AuthState {
  user: UserProfile | null
  session: UserSession | null
  loading: boolean
  error: string | null
}

export interface LoginCredentials {
  email: string
  password?: string
}

export interface RegisterCredentials {
  email: string
  password: string
  full_name: string
  company_name?: string
  phone?: string
}

export interface Lead {
  id: string
  email: string
  full_name?: string
  company_name?: string
  phone?: string
  message?: string
  source: string
  status: 'new' | 'contacted' | 'qualified' | 'converted'
  created_at: string
  updated_at: string
}

export interface WebContent {
  id: string
  section_key: string
  content_type: 'text' | 'html' | 'json' | 'image'
  content_value: string
  content_metadata: Record<string, any>
  is_active: boolean
  created_by?: string
  created_at: string
  updated_at: string
}