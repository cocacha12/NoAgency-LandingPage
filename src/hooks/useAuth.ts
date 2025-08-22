import { useState, useEffect, useCallback } from 'react'
import type { User, Session } from '@supabase/supabase-js'
import { 
  supabase, 
  signInWithEmail, 
  signUpWithEmail, 
  signInWithGoogle, 
  signOut, 
  getCurrentUser, 
  getSession,
  getUserProfile,
  subscribeToAuthChanges
} from '../lib/supabaseClient'
import type { UserProfile, LoginCredentials, RegisterCredentials, AuthState } from '../types/auth'

export const useAuth = () => {
  const [authState, setAuthState] = useState<{
    user: UserProfile | null
    session: Session | null
    loading: boolean
    error: string | null
  }>({
    user: null,
    session: null,
    loading: true,
    error: null,
  })

  // Initialize auth state
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const { session } = await getSession()
        
        if (session?.user) {
          const { profile } = await getUserProfile(session.user.id)
          setAuthState({
            user: profile,
            session: session,
            loading: false,
            error: null,
          })
        } else {
          setAuthState({
            user: null,
            session: null,
            loading: false,
            error: null,
          })
        }
      } catch (error) {
        console.error('Error initializing auth:', error)
        setAuthState({
          user: null,
          session: null,
          loading: false,
          error: 'Error initializing authentication',
        })
      }
    }

    initializeAuth()

    // Subscribe to auth changes
    const { data: { subscription } } = subscribeToAuthChanges(async (event, session) => {
      console.log('Auth state changed:', event, session)
      
      if (event === 'SIGNED_IN' && session?.user) {
        const { profile } = await getUserProfile(session.user.id)
        setAuthState({
          user: profile,
          session: session,
          loading: false,
          error: null,
        })
      } else if (event === 'SIGNED_OUT') {
        setAuthState({
          user: null,
          session: null,
          loading: false,
          error: null,
        })
      } else if (event === 'TOKEN_REFRESHED' && session) {
        setAuthState(prev => ({
          ...prev,
          session: session,
        }))
      }
    })

    return () => {
      subscription?.unsubscribe()
    }
  }, [])

  // Sign in function
  const signIn = useCallback(async (credentials: LoginCredentials) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }))
      
      const { data, error } = await signInWithEmail(credentials)
      
      if (error) {
        setAuthState(prev => ({
          ...prev,
          loading: false,
          error: error.message,
        }))
        return { success: false, error: error.message }
      }

      // If using magic link, don't update state immediately
      if (!credentials.password) {
        setAuthState(prev => ({ ...prev, loading: false }))
        return { 
          success: true, 
          message: 'Check your email for the magic link!',
          requiresEmailConfirmation: true 
        }
      }

      return { success: true }
    } catch (error: any) {
      const errorMessage = error.message || 'An unexpected error occurred'
      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }))
      return { success: false, error: errorMessage }
    }
  }, [])

  // Sign up function
  const signUp = useCallback(async (credentials: RegisterCredentials) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }))
      
      const { data, error } = await signUpWithEmail(credentials)
      
      if (error) {
        setAuthState(prev => ({
          ...prev,
          loading: false,
          error: error.message,
        }))
        return { success: false, error: error.message }
      }

      setAuthState(prev => ({ ...prev, loading: false }))
      return { 
        success: true, 
        message: 'Check your email to confirm your account!',
        requiresEmailConfirmation: true 
      }
    } catch (error: any) {
      const errorMessage = error.message || 'An unexpected error occurred'
      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }))
      return { success: false, error: errorMessage }
    }
  }, [])

  // Sign in with Google
  const signInWithGoogleProvider = useCallback(async () => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }))
      
      const { data, error } = await signInWithGoogle()
      
      if (error) {
        setAuthState(prev => ({
          ...prev,
          loading: false,
          error: error.message,
        }))
        return { success: false, error: error.message }
      }

      return { success: true }
    } catch (error: any) {
      const errorMessage = error.message || 'An unexpected error occurred'
      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }))
      return { success: false, error: errorMessage }
    }
  }, [])

  // Sign out function
  const handleSignOut = useCallback(async () => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }))
      
      const { error } = await signOut()
      
      if (error) {
        setAuthState(prev => ({
          ...prev,
          loading: false,
          error: error.message,
        }))
        return { success: false, error: error.message }
      }

      return { success: true }
    } catch (error: any) {
      const errorMessage = error.message || 'An unexpected error occurred'
      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: errorMessage,
      }))
      return { success: false, error: errorMessage }
    }
  }, [])

  // Clear error function
  const clearError = useCallback(() => {
    setAuthState(prev => ({ ...prev, error: null }))
  }, [])

  return {
    // State
    user: authState.user,
    session: authState.session,
    loading: authState.loading,
    error: authState.error,
    isAuthenticated: !!authState.user,
    
    // Actions
    signIn,
    signUp,
    signInWithGoogle: signInWithGoogleProvider,
    signOut: handleSignOut,
    clearError,
  }
}

export default useAuth