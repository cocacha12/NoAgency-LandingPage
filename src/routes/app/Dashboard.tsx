import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOutIcon, SettingsIcon, BarChart3Icon, UsersIcon } from 'lucide-react'
import { useAuthContext } from '../../contexts/AuthContext'

export default function Dashboard() {
  const navigate = useNavigate()
  const { user, session, isAuthenticated, signOut, loading } = useAuthContext()

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, loading, navigate])

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  if (loading || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-400"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-400/20">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-display font-bold text-green-400">
                Brandy
              </h1>
              <span className="text-gray-400">Dashboard</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">
                {user?.email || session?.user?.email}
              </span>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors"
              >
                <LogOutIcon className="w-4 h-4" />
                <span>Salir</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-custom py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-display font-bold mb-2">
            Bienvenido a Node Agency
          </h2>
          <p className="text-gray-400">
            Tu dashboard está en construcción. Pronto podrás gestionar todos tus agentes de IA desde aquí.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="border border-gray-400/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Agentes Activos</h3>
              <UsersIcon className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-green-400 mb-2">0</div>
            <p className="text-sm text-gray-400">Próximamente disponible</p>
          </div>

          <div className="border border-gray-400/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Conversaciones</h3>
              <BarChart3Icon className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-green-400 mb-2">0</div>
            <p className="text-sm text-gray-400">Próximamente disponible</p>
          </div>

          <div className="border border-gray-400/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Configuración</h3>
              <SettingsIcon className="w-5 h-5 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-green-400 mb-2">-</div>
            <p className="text-sm text-gray-400">Próximamente disponible</p>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className="border border-gray-400/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-display font-bold mb-4">
            Dashboard en Desarrollo
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Estamos construyendo una experiencia increíble para gestionar tus agentes de IA. 
            Mientras tanto, explora nuestras funcionalidades en la página principal.
          </p>
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Volver al inicio
          </button>
        </div>
      </main>
    </div>
  )
}