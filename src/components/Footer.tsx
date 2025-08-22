import { TwitterIcon, LinkedinIcon, GithubIcon, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/20">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-display font-bold text-green-400 mb-4">
              BrandyApp
            </h3>
            <p className="text-gray-400 mb-6">
              Agentes de IA que transforman tu marketing en una máquina de resultados.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-display font-semibold mb-4">Producto</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Integraciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Precios
                </a>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-display font-semibold mb-4">Recursos</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Guías
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Soporte
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-400/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 BrandyApp. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0 flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-red-400" fill="currentColor" /> para equipos que crean el futuro.
          </p>
        </div>
      </div>
    </footer>
  )
}