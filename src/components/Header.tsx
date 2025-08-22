import { useState } from 'react'
import { MenuIcon, XIcon, UserIcon } from 'lucide-react'
import LoginDialog from './LoginDialog'
import { useAuthContext } from '../contexts/AuthContext'
import { getAssetUrl } from '../lib/storageUtils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  
  const { user, session, isAuthenticated, signOut } = useAuthContext()

  const handleSignOut = async () => {
    await signOut()
    setIsUserMenuOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent hover:bg-black/80 backdrop-blur-md h-20 transition-all duration-500 ease-in-out">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 py-2 px-8">
            {/* Logo and Title - Far Left */}
            <div className="flex items-center space-x-4 flex-shrink-0">
              <img
                alt="Brandy"
                className="h-14 w-auto hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_logo_w.png"
              />
              <img
                alt="Brandy Title"
                className="h-12 w-auto hover:scale-105 transition-transform duration-300"
                src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_title_w.png"
              />
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden md:flex items-center space-x-10 flex-1 justify-center">
              <a href="#caracteristicas" className="text-white/90 hover:text-cyan-400 transition-all duration-300 font-medium text-lg tracking-wide">
                Características
              </a>
              <a href="#soluciones" className="text-white/90 hover:text-cyan-400 transition-all duration-300 font-medium text-lg tracking-wide">
                Soluciones
              </a>
              <a href="#precios" className="text-white/90 hover:text-cyan-400 transition-all duration-300 font-medium text-lg tracking-wide">
                Precios
              </a>
            </nav>

            {/* Login Button - Far Right */}
            <div className="hidden md:flex items-center flex-shrink-0">
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 text-white/90 hover:text-cyan-400 transition-all duration-300"
                  >
                    <UserIcon className="w-5 h-5" />
                    <span>{user?.email || session?.user?.email}</span>
                  </button>
                  
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-white/20 rounded-lg shadow-lg">
                      <a
                        href="/dashboard"
                        className="block px-4 py-2 text-white hover:bg-gray-400/10 transition-colors"
                      >
                        Dashboard
                      </a>
                      <button
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-white hover:bg-gray-400/10 transition-colors"
                      >
                        Salir
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                   onClick={() => setIsLoginOpen(true)}
                   className="bg-transparent border-2 border-white/30 hover:border-cyan-400 hover:bg-cyan-400 hover:shadow-cyan-400/50 active:bg-green-400 active:border-green-400 active:shadow-green-400/50 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                 >
                   Login
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white/90 hover:text-cyan-400 transition-all duration-300"
            >
              {isMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-white/10 bg-black/90 backdrop-blur-sm">
              <nav className="flex flex-col space-y-4">
                <a href="#caracteristicas" className="text-white/90 hover:text-cyan-400 transition-all duration-300 font-medium">
                  Características
                </a>
                <a href="#soluciones" className="text-white/90 hover:text-cyan-400 transition-all duration-300 font-medium">
                  Soluciones
                </a>
                <a href="#precios" className="text-white/90 hover:text-cyan-400 transition-all duration-300 font-medium">
                  Precios
                </a>
                {isAuthenticated ? (
                  <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                    <a href="/dashboard" className="text-white/90 hover:text-cyan-400 transition-all duration-300">
                      Dashboard
                    </a>
                    <button
                      onClick={handleSignOut}
                      className="text-left text-white/90 hover:text-cyan-400 transition-all duration-300"
                    >
                      Salir
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsLoginOpen(true)}
                    className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 w-full mt-4 shadow-lg"
                  >
                    Login
                  </button>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>

      <LoginDialog 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />
    </>
  )
}