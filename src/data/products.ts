export const products = {
  brandAgent: {
    name: 'El Brand Agent (o sea, Brandy)',
    description: 'Toma la personalidad de tu negocio y habla como tú.',
    benefits: [
      'Recibe tus ideas y te sugiere contenido',
      'Organiza todo automáticamente',
      'Mantiene la voz de tu marca'
    ]
  },
  creativeDirector: {
    name: 'Creative Director (Diseñador/a top)',
    description: 'Transforma fotos en flyers y posts con templates brutales.',
    benefits: [
      'Solo le dices qué quieres, y lo ejecuta',
      'Templates profesionales listos',
      'Diseños optimizados para redes'
    ]
  },
  communityManager: {
    name: 'Community Manager & RP',
    description: 'Responde los mensajes de tus clientes 24/7.',
    benefits: [
      'Manda promos y listas de invitados',
      'Lo deja todo guardado en tu base',
      'Atención personalizada siempre'
    ]
  },
  trafficker: {
    name: 'Trafficker (el que vende sin que lo veas)',
    description: 'Se encarga de tus anuncios. Sin drama.',
    benefits: [
      'Conecta con Meta automáticamente',
      'Ajusta presupuestos inteligentemente',
      'Reporta lo justo y necesario'
    ]
  }
}

export const testimonials = [
  {
    name: 'María González',
    role: 'CMO',
    company: 'TechStart',
    quote: 'Reducimos tiempo de campaña 70% manteniendo calidad premium.',
    metric: '70% menos tiempo'
  },
  {
    name: 'Carlos Ruiz',
    role: 'Founder',
    company: 'GrowthCo',
    quote: 'ROI aumentó 3x con optimización automática de Node Agency.',
    metric: '3x ROI'
  },
  {
    name: 'Ana Martínez',
    role: 'Marketing Director',
    company: 'ScaleUp',
    quote: 'Engagement subió 150% con respuestas instantáneas 24/7.',
    metric: '+150% engagement'
  }
]

export const capabilities = [
  {
    name: 'Calificador',
    description: 'Identifica leads de alta calidad automáticamente'
  },
  {
    name: 'Agendador',
    description: 'Coordina reuniones sin fricción'
  },
  {
    name: 'Soporte',
    description: 'Resuelve consultas 24/7 con precisión'
  },
  {
    name: 'Cobranza',
    description: 'Gestiona pagos con tacto y eficiencia'
  },
  {
    name: 'Entrenador',
    description: 'Mejora performance del equipo continuamente'
  },
  {
    name: 'Personalizado',
    description: 'Agentes únicos para necesidades específicas'
  }
]

export const trustLogos = [
  'Microsoft',
  'Google',
  'Salesforce',
  'HubSpot',
  'Slack',
  'Notion'
]

export const problems = [
  {
    title: 'Marketing desorganizado',
    description: 'Herramientas dispersas, sin coordinación',
    stat: '73% de empresas'
  },
  {
    title: 'Respuestas lentas',
    description: 'Clientes esperan, ventas se pierden',
    stat: '24h promedio'
  },
  {
    title: 'Contenido inconsistente',
    description: 'Marca sin personalidad definida',
    stat: '60% del tiempo'
  }
]

export const solutions = [
  {
    title: 'Todo centralizado',
    description: 'Una plataforma, todo conectado',
    benefit: 'Eficiencia 10x'
  },
  {
    title: 'Respuestas instantáneas',
    description: 'IA que nunca duerme, siempre responde',
    benefit: '24/7 disponible'
  },
  {
    title: 'Marca consistente',
    description: 'Personalidad única en cada interacción',
    benefit: 'Identidad sólida'
  }
]

export const comparisonData = [
  {
    feature: 'Integración completa',
    brandy: true,
    others: false
  },
  {
    feature: 'IA personalizada',
    brandy: true,
    others: false
  },
  {
    feature: 'Respuesta 24/7',
    brandy: true,
    others: 'Limitado'
  },
  {
    feature: 'Setup en minutos',
    brandy: true,
    others: 'Días/semanas'
  }
]

export const howItWorks = [
  {
    step: '1',
    emoji: '🎯',
    title: 'Define tu personalidad',
    description: 'Brandy aprende tu voz y estilo único'
  },
  {
    step: '2',
    emoji: '🔗',
    title: 'Conecta tus herramientas',
    description: 'Integración automática con tus plataformas'
  },
  {
    step: '3',
    emoji: '🚀',
    title: 'Activa y observa',
    description: 'Tu equipo IA trabaja mientras tú creces'
  }
]

export const brandyFeatures = [
  {
    title: 'Guarda todo',
    description: 'Cada conversación, cada lead, cada insight se almacena automáticamente en tu base de datos personal.',
    icon: '💾'
  },
  {
    title: 'Corre en la nube',
    description: 'Infraestructura escalable que crece contigo. Sin límites de capacidad ni preocupaciones técnicas.',
    icon: '☁️'
  }
]

export const teamMembers = [
  {
    name: 'Brand Agent',
    role: 'Personalidad de marca',
    description: 'Mantiene la voz única de tu negocio',
    features: products.brandAgent.benefits
  },
  {
    name: 'Creative Director',
    role: 'Diseño profesional',
    description: 'Crea contenido visual impactante',
    features: products.creativeDirector.benefits
  },
  {
    name: 'Community Manager',
    role: 'Atención al cliente',
    description: 'Responde y gestiona tu comunidad',
    features: products.communityManager.benefits
  },
  {
    name: 'Trafficker',
    role: 'Publicidad inteligente',
    description: 'Optimiza tus campañas automáticamente',
    features: products.trafficker.benefits
  }
]