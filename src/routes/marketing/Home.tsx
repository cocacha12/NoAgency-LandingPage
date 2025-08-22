import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { products, testimonials, capabilities, trustLogos, problems, solutions, comparisonData, howItWorks, brandyFeatures, teamMembers } from '../../data/products'
import { CheckIcon, ArrowRightIcon } from 'lucide-react'
import { getAssetUrl } from '../../lib/storageUtils'
import { 
  siCanva, 
  siOpenai, 
  siGmail, 
  siGithubcopilot, 
  siTiktok, 
  siInstagram, 
  siMeta, 
  siWhatsapp, 
  siGooglegemini,
  siMessenger,
  siCheckmarx,
  siIcloud,
  siOpenai as siBrain,
  siCashapp
} from 'simple-icons'
import { Smartphone, Brain, Bot, Calendar, MessageCircle, Rocket } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Video Background */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.4 }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/what_is.mp4" type="video/mp4" />
        </video>
        
        {/* Background gradient overlay */}
        <div className="absolute inset-0 hero-gradient opacity-70"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-cyan-400/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container-custom text-center relative z-10 px-4 py-8">
          {/* Main headline */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[0.9] tracking-tight">
              Tu marca con vida propia.
              <br />
              <span className="gradient-text bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">Literal.</span>
            </h1>
          </div>
          
          {/* Description */}
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 leading-relaxed">
              Brandy es el primer asistente inteligente que se convierte en tu negocio. Sí, es tu marca: responde como tú, crea como tú, habla como tú.
            </p>
            <p className="text-base md:text-lg text-white font-medium">
              No es un bot, es tu nueva cabeza creativa, social y publicitaria.
            </p>
          </div>
          
          {/* Quote highlight */}
          <div className="mb-12">
            <div className="glass rounded-2xl p-6 md:p-8 max-w-2xl mx-auto border border-cyan-500/20">
              <p className="text-lg md:text-xl text-cyan-400 italic font-medium">
                "Hola, soy El Torito. ¿Subimos un post para la promo de los viernes?"
              </p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary text-base md:text-lg px-8 py-4 hover-lift">
              <span className="mr-2">👉</span>
              Empezar con Brandy
            </button>
            <button className="btn-secondary text-base md:text-lg px-8 py-4 hover-lift">
              <span className="mr-2">🚀</span>
              Ver cómo funciona
            </button>
          </div>
          
          {/* Integrations Section */}
          <div className="mt-20 pt-8">
            <p className="text-center text-gray-400 mb-8 text-sm uppercase tracking-wider">Conecta tus Apps con tu Marca</p>
            <div className="bg-gradient-to-r from-gray-100/10 to-gray-200/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-300/20 shadow-inner">
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="p-3 hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-gray-400 hover:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d={siCanva.path} />
                  </svg>
                </div>
                <div className="p-3 hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-gray-400 hover:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d={siOpenai.path} />
                  </svg>
                </div>
                <div className="p-3 hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-gray-400 hover:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d={siGmail.path} />
                  </svg>
                </div>
                <div className="p-3 hover:scale-110 transition-transform duration-300">
                   <svg className="w-8 h-8 text-gray-400 hover:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                     <path d={siGithubcopilot.path} />
                   </svg>
                 </div>
                <div className="p-3 hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-gray-400 hover:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d={siTiktok.path} />
                  </svg>
                </div>
                <div className="p-3 hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-gray-400 hover:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d={siInstagram.path} />
                  </svg>
                </div>
                <div className="p-3 hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-gray-400 hover:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d={siMeta.path} />
                  </svg>
                </div>
                <div className="p-3 hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-gray-400 hover:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d={siWhatsapp.path} />
                  </svg>
                </div>
                <div className="p-3 hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-gray-400 hover:text-gray-300 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d={siGooglegemini.path} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          

        </div>
      </section>

      {/* 2. What Brandy Does - Complete Team */}
      <section className="py-32 relative" style={{
        backgroundImage: `url(https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/hero-background.gif)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Background overlay for better text readability */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/hero-background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}></div>
        <div className="container-custom relative z-10">
          {/* Section header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-cyan-400">💡</span> ¿Qué hace Brandy?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Imagina esto:
            </p>
          </div>
          
          {/* Feature cards grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            <div className="group bg-black rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover-lift relative">
              <img 
                src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_logo_w.png" 
                alt="Brandy Logo" 
                className="absolute top-4 left-4 w-8 h-8"
              />
              <div className="pt-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Tu restaurante necesita ideas para levantar las ventas esta semana. Tu negocio te sugiere una promo irresistible en segundos
                </p>
                <img 
                  src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/quehace1.png" 
                  alt="Promociones" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
            
            <div className="group bg-black rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover-lift relative">
              <img 
                src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_logo_w.png" 
                alt="Brandy Logo" 
                className="absolute top-4 left-4 w-8 h-8"
              />
              <div className="pt-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Le mandas una foto de tu plato estrella. En un parpadeo, te devuelve un flyer listo para publicar en Instagram
                </p>
                <img 
                  src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/quehace2.png" 
                  alt="Foto a flyer" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
            
            <div className="group bg-black rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover-lift relative">
              <img 
                src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_logo_w.png" 
                alt="Brandy Logo" 
                className="absolute top-4 left-4 w-8 h-8"
              />
              <div className="pt-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Un cliente escribe por DM preguntando por la carta. Tu negocio responde al instante, con el tono y estilo de tu marca
                </p>
                <img 
                  src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/quehace3.png" 
                  alt="Respuestas instantáneas" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
            
            <div className="group bg-black rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover-lift relative">
              <img 
                src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_logo_w.png" 
                alt="Brandy Logo" 
                className="absolute top-4 left-4 w-8 h-8"
              />
              <div className="pt-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Quieres lanzar una campaña de anuncios. Tu negocio ya está armando los textos, el diseño y hasta el presupuesto
                </p>
                <img 
                  src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/quehace4.png" 
                  alt="Anuncios automáticos" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Team Section Header */}
          <div className="text-center mb-16 bg-black rounded-2xl p-8 border border-cyan-500/20 relative">
            <img 
              src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_logo_w.png" 
              alt="Brandy Logo" 
              className="absolute top-4 left-4 w-8 h-8"
            />
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-cyan-400">🤖</span> ¿Quién es quién?
            </h3>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Brandy App no es solo un asistente. Es tu equipo completo, siempre disponible, sin sueldos, sin vacaciones, y sin que tengas que explicarle dos veces.
            </p>
          </div>
          
          {/* Team cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            {/* Brand Agent */}
            <div className="group bg-black rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover-lift relative">
              <img 
                src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_logo_w.png" 
                alt="Brandy Logo" 
                className="absolute top-4 left-4 w-6 h-6"
              />
              <div className="pt-8">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  Brand Agent (sí, Brandy mismo)
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Es quien habla como tu negocio. Toma su nombre, su personalidad y su tono. Recibe tus ideas, te propone promociones, redacta posts y coordina con el resto del team. Es tu voz, pero con superpoderes.
                </p>
                <img 
                  src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/quien1.png" 
                  alt="Brand Agent" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Creative Director */}
            <div className="group bg-black rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover-lift relative">
              <img 
                src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_logo_w.png" 
                alt="Brandy Logo" 
                className="absolute top-4 left-4 w-6 h-6"
              />
              <div className="pt-8">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  Creative Director (el/la seco/a del diseño)
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Le mandas una foto y te devuelve un flyer listo para subir. Usa uno de los 5 templates de marca y adapta el diseño a tu estilo. No necesitas saber de diseño, él/ella lo hace todo por ti.
                </p>
                <img 
                  src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/quien2.png" 
                  alt="Creative Director" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Community Manager */}
            <div className="group bg-black rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover-lift relative">
              <img 
                src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_logo_w.png" 
                alt="Brandy Logo" 
                className="absolute top-4 left-4 w-6 h-6"
              />
              <div className="pt-8">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  Community Manager & PR
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Atiende los mensajes que llegan por redes sociales, como si fuera un humano. Responde dudas, envía promos, arma listas y guarda todo en tu base de datos. Siempre activo, siempre amable, siempre en tu idioma.
                </p>
                <img 
                  src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/quien3.png" 
                  alt="Community Manager" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Trafficker */}
            <div className="group bg-black rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover-lift relative">
              <img 
                src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/Brandy_logo_w.png" 
                alt="Brandy Logo" 
                className="absolute top-4 left-4 w-6 h-6"
              />
              <div className="pt-8">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                  Trafficker (el ninja de los anuncios)
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  (Muy pronto…) Lanza y optimiza campañas publicitarias por ti. Se conecta con Meta y Google, ajusta presupuestos y te muestra resultados sin que tengas que meterte a un panel. El ROI en piloto automático.
                </p>
                <img 
                  src="https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/quien4.png" 
                  alt="Trafficker" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center">
            <div className="glass rounded-2xl p-8 max-w-3xl mx-auto border border-cyan-500/20">
              <p className="text-xl md:text-2xl text-gray-300 mb-2">
                Todo eso, <strong className="text-white">sin agencias, sin briefings, sin dolores de cabeza.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Problem & Solution */}
      <section className="section-padding bg-gradient-to-b from-black to-gray-950">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">El problema que todos conocemos</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl text-gray-300">
                Gestionar redes sociales y marketing es un caos.
              </p>
              <p className="text-lg text-gray-400">
                Demasiadas herramientas, respuestas lentas, y una marca que no se reconoce a sí misma.
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Problems */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-red-400 mb-8">⸻ La realidad actual</h3>
              
              <div className="flex items-start gap-4 p-6 bg-red-950/20 rounded-xl border border-red-500/20">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-red-300">Marketing desordenado</h4>
                  <p className="text-gray-300 mb-2">Demasiadas plataformas que no se hablan entre sí.</p>
                  <p className="text-red-400 font-bold">→ Un Frankenstein digital sin estrategia.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-red-950/20 rounded-xl border border-red-500/20">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-red-300">Respuestas lentas</h4>
                  <p className="text-gray-300 mb-2">Tus clientes preguntan. La respuesta llega al día siguiente… si es que llega.</p>
                  <p className="text-red-400 font-bold">→ Promedios de 24h = ventas perdidas.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-red-950/20 rounded-xl border border-red-500/20">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-red-300">Contenido sin identidad</h4>
                  <p className="text-gray-300 mb-2">Posts que parecen hechos por robots, sin alma ni coherencia.</p>
                  <p className="text-red-400 font-bold">→ 60% del tiempo, tu marca no se nota.</p>
                </div>
              </div>
            </div>
            
            {/* Solutions */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-green-400 mb-8">⸻ Con Brandy</h3>
              
              <div className="flex items-start gap-4 p-6 bg-green-950/20 rounded-xl border border-green-500/20">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-green-300">Todo en un solo lugar</h4>
                  <p className="text-gray-300 mb-2">Ideas, diseño, atención al cliente y campañas… todo desde un chat.</p>
                  <p className="text-green-400 font-bold">→ Ahorra tiempo. Organiza tu vida. Potencia tu marca.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-green-950/20 rounded-xl border border-green-500/20">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-green-300">Respuestas automáticas e instantáneas</h4>
                  <p className="text-gray-300 mb-2">Brandy responde por ti, como tú.</p>
                  <p className="text-green-400 font-bold">→ Clientes atendidos al instante. Siempre.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-green-950/20 rounded-xl border border-green-500/20">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-green-300">Tu marca con personalidad real</h4>
                  <p className="text-gray-300 mb-2">Brandy habla, escribe y se muestra como si fuera tu negocio.</p>
                  <p className="text-green-400 font-bold">→ Una identidad viva en cada interacción.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Comparison Table */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">🤖 Brandy vs. el caos de las herramientas aisladas</h3>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="glass rounded-2xl overflow-hidden border border-cyan-500/20">
              <div className="grid grid-cols-3 gap-0">
                {/* Header */}
                <div className="p-6 bg-gray-900/50 border-b border-gray-700">
                  <h4 className="text-xl font-bold text-center">Funcionalidad</h4>
                </div>
                <div className="p-6 bg-cyan-950/30 border-b border-gray-700">
                  <h4 className="text-xl font-bold text-center text-cyan-400">🔥 Brandy</h4>
                </div>
                <div className="p-6 bg-gray-900/50 border-b border-gray-700">
                  <h4 className="text-xl font-bold text-center">🛠️ Herramientas tradicionales</h4>
                </div>
                
                {/* Comparison rows */}
                <div className="p-6 border-b border-gray-800">
                  <p className="font-medium">Integración total</p>
                </div>
                <div className="p-6 bg-cyan-950/10 border-b border-gray-800">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400 text-xl">✅</span>
                    <span className="text-green-400 font-medium">Todo conectado</span>
                  </div>
                </div>
                <div className="p-6 border-b border-gray-800">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-red-400 text-xl">❌</span>
                    <span className="text-red-400">Herramientas sueltas</span>
                  </div>
                </div>
                
                <div className="p-6 border-b border-gray-800">
                  <p className="font-medium">IA que entiende tu negocio</p>
                </div>
                <div className="p-6 bg-cyan-950/10 border-b border-gray-800">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400 text-xl">✅</span>
                    <span className="text-green-400 font-medium">Personalizada</span>
                  </div>
                </div>
                <div className="p-6 border-b border-gray-800">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-red-400 text-xl">❌</span>
                    <span className="text-red-400">Genérica</span>
                  </div>
                </div>
                
                <div className="p-6 border-b border-gray-800">
                  <p className="font-medium">Atención al cliente 24/7</p>
                </div>
                <div className="p-6 bg-cyan-950/10 border-b border-gray-800">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400 text-xl">✅</span>
                    <span className="text-green-400 font-medium">Siempre responde</span>
                  </div>
                </div>
                <div className="p-6 border-b border-gray-800">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-red-400 text-xl">❌</span>
                    <span className="text-red-400">Solo en horario hábil</span>
                  </div>
                </div>
                
                <div className="p-6 border-b border-gray-800">
                  <p className="font-medium">Puesta en marcha</p>
                </div>
                <div className="p-6 bg-cyan-950/10 border-b border-gray-800">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400 text-xl">✅</span>
                    <span className="text-green-400 font-medium">En minutos</span>
                  </div>
                </div>
                <div className="p-6 border-b border-gray-800">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-red-400 text-xl">❌</span>
                    <span className="text-red-400">Días (o semanas) de setup</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button className="btn-primary text-lg px-8 py-4 hover-lift">
                <span className="mr-2">🚀</span>
                Probar Brandy gratis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How it Works & Social Proof */}
      <section className="py-32 bg-gray-950/30">
        <div className="container-custom">
          {/* How it works header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-cyan-400">🎨</span> ¿Y cómo se ve todo esto?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                Un chat como el de WhatsApp.
              </p>
              <p className="text-lg md:text-xl text-white font-medium">
                Pero en vez de hablar con tu amigo... hablas con tu negocio.
              </p>
            </div>
          </div>
          
          {/* Process steps */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-32">
            <div className="group text-center glass rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover-lift">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <Smartphone className="w-16 h-16 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                Subes y escribes
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Subes fotos, escribes ideas, eliges templates.
              </p>
            </div>
            <div className="group text-center glass rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover-lift">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <svg className="w-16 h-16 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d={siMessenger.path} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                Recibes resultados
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Recibes posts, imágenes, promos, respuestas.
              </p>
            </div>
            <div className="group text-center glass rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover-lift">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                <svg className="w-16 h-16 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d={siCheckmarx.path} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                Todo fluye
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Todo fluye. Todo suena como tu marca. Todo se ve increíble.
              </p>
            </div>
          </div>
          
          {/* Social Proof Section */}
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Resultados que <span className="text-cyan-400">hablan</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Negocios reales que ya están transformando su presencia digital
            </p>
          </div>
          
          {/* Testimonials grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="group glass rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover-lift">
                <p className="text-lg mb-6 italic text-gray-300 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                  <div className="text-cyan-400 font-bold text-lg">{testimonial.metric}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technology & Capabilities */}
      <section className="section-padding bg-gradient-to-b from-gray-950 to-black">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">La tecnología detrás de Brandy</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Inteligencia artificial avanzada que entiende tu negocio como nadie más.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="glass rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400 flex items-center gap-3">
                  <Brain className="w-8 h-8" />
                  Guarda todo
                </h3>
                <p className="text-gray-300 mb-4">
                  Cada conversación, cada preferencia, cada detalle de tu marca queda registrado. 
                  Brandy aprende y mejora constantemente.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Memoria persistente de conversaciones
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Análisis de patrones de comportamiento
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Personalización automática
                  </li>
                </ul>
              </div>
              
              <div className="glass rounded-2xl p-8 border border-cyan-500/20">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400 flex items-center gap-3">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d={siIcloud.path} />
                  </svg>
                  Corre en la nube
                </h3>
                <p className="text-gray-300 mb-4">
                  Sin instalaciones, sin mantenimiento. Brandy está siempre disponible, 
                  desde cualquier dispositivo.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Acceso desde cualquier dispositivo
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Actualizaciones automáticas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Seguridad empresarial
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass rounded-2xl p-8 border border-cyan-500/20">
                <div className="text-center mb-8">
                  <Bot className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-cyan-400">IA Conversacional Avanzada</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <p className="text-sm text-gray-400 mb-2">Cliente:</p>
                    <p className="text-white">"¿Tienen descuentos para estudiantes?"</p>
                  </div>
                  <div className="bg-cyan-950/30 rounded-lg p-4">
                    <p className="text-sm text-cyan-400 mb-2">Brandy:</p>
                    <p className="text-white">"¡Claro! Tenemos 20% off para estudiantes. Solo necesitas tu credencial universitaria. ¿Te ayudo con el proceso?"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Specialized Capabilities */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Agentes especializados</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Cada Brandy se especializa en diferentes industrias y necesidades.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="glass rounded-2xl p-8 text-center border border-cyan-500/20 hover-lift">
                <Bot className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
                <h4 className="text-xl font-bold mb-4 text-cyan-400">{capability.name}</h4>
                <p className="text-gray-300 mb-6">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 flex items-center justify-center gap-4">
              <svg className="w-12 h-12 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                <path d={siCashapp.path} />
              </svg>
              <span className="text-cyan-400">Pricing</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Sabemos que cada negocio es único.
              <br />
              <strong className="text-white">Por eso, no te vamos a lanzar un plan en la cara.</strong>
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="glass p-12 text-center hover-lift">
              <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Brain className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-4xl font-display font-bold text-white mb-8">Mejor, conversemos.</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Tú nos cuentas de tu negocio.
                <br />
                Nosotros te mostramos cómo Brandy puede ayudarte.
              </p>
              <div className="flex items-center justify-center gap-2 text-cyan-400 mb-8">
                <Calendar className="w-6 h-6" />
                <p className="text-lg font-medium">
                  Agenda una reunión personalizada con nuestro equipo
                </p>
              </div>
              <button className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                Agenda con Brandy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding relative" style={{
        backgroundImage: 'url(https://ghllpsejvegdleerdger.supabase.co/storage/v1/object/public/flyers/uploads/hero-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container-custom text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
              🥳 ¿Listo para tener un negocio con <span className="text-cyan-400">personalidad</span>?
            </h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Tu marca está esperando tener voz, ideas y presencia real.
              <br />
              <strong className="text-white">Dale vida con Brandy.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="btn-primary text-xl px-12 py-5 inline-flex items-center gap-3 hover:scale-105 transition-transform">
                <Rocket className="w-6 h-6" />
                Empezar ahora
              </button>
              <button className="btn-secondary text-xl px-12 py-5 inline-flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                Agendar reunión
              </button>
            </div>
            <div className="mt-16 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                Únete a las empresas que ya están transformando su presencia digital
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}