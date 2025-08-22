import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import { useAuth } from '../hooks/useAuth'
import type { UserProfile } from '../types/auth'
import type { Session } from '@supabase/supabase-js'

interface AuthContextType {
  user: UserProfile | null
  session: Session | null
  loading: boolean
  error: string | null
  isAuthenticated: boolean
  signIn: (credentials: { email: string; password?: string }) => Promise<any>
  signUp: (credentials: { email: string; password: string; full_name: string }) => Promise<any>
  signInWithGoogle: () => Promise<any>
  signOut: () => Promise<any>
  clearError: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const auth = useAuth()

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}

export default AuthContext