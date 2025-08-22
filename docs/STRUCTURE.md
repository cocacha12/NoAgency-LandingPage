# Node Agency - Estructura del Sitio

## Mapa del Sitio

```
Node Agency Landing
├── / (Home - Marketing)
│   ├── Header (sticky)
│   ├── Hero
│   ├── Trust Logos
│   ├── Soluciones en Uno
│   ├── Problemas → Solución
│   ├── Comparativa (tabla)
│   ├── Testimonios
│   ├── Cómo Funciona
│   ├── Capacidades
│   ├── Calculadora de Precios
│   ├── CTA Final
│   └── Footer
├── /dashboard (App - Protegida)
│   ├── Header (con logout)
│   ├── Dashboard Content
│   └── Footer
└── /404 (Error page)
```

## Jerarquía de Secciones

### Inspiración: LlamadaPro.com
Estructura que replica el flujo y cadencia de LlamadaPro, adaptada para Node Agency con tono NotCo Tech.

---

## 1. Header (Sticky Navigation)

**Objetivo**: Navegación clara y acceso rápido al login

**Elementos**:
- Logo: "Node Agency" (texto, accent color)
- Nav: Características | Soluciones | Precios | Login (CTA)
- Mobile: Hamburger menu
- Auth state: Login button → Avatar + Dashboard link

**Copy Rules**:
- Nav items: máximo 2 palabras
- CTA destacado con accent color
- Responsive collapse en mobile

---

## 2. Hero Section

**Objetivo**: Captar atención y comunicar valor principal

**Elementos**:
- Headline principal (H1)
- Subheadline con métrica específica
- Dual CTAs: "Probar Demo" (primary) + "Entrar" (secondary)
- Visual element (opcional: dashboard preview)

**Copy Rules**:
- Headline: máximo 8 palabras, tono NotCo ("Crack complexity. Create faster.")
- Subheadline: incluir una métrica cuantificable
- CTAs: verbos de acción directos

**Ejemplo de Estructura**:
```
H1: "Agentes que venden. Resultados que escalan."
Subheadline: "Automatiza tu pipeline comercial con IA que convierte 3x más leads en clientes."
CTA1: "Probar Demo" | CTA2: "Entrar"
```

---

## 3. Trust Logos

**Objetivo**: Credibilidad social inmediata

**Elementos**:
- 6-8 logos de clientes/partners
- Grayscale con hover accent
- Responsive grid

**Copy Rules**:
- Headline opcional: "Confían en nosotros" o similar
- Logos reconocibles del mercado objetivo

---

## 4. Soluciones en Uno

**Objetivo**: Mostrar amplitud de la plataforma

**Elementos**:
- Headline: "Cinco agentes. Una plataforma."
- 5 cards: Brand Agent, Creative Director, Community Manager/RP, Trafficker, Integraciones
- Cada card: título + 3 bullets de valor

**Copy Rules**:
- Títulos de cards: máximo 3 palabras
- Bullets: beneficios específicos, no features
- Usar números y métricas cuando sea posible

**Estructura de Card**:
```
[Icono]
Título del Agente
• Beneficio específico 1
• Beneficio específico 2  
• Beneficio específico 3
```

---

## 5. Problemas → Nuestra Solución

**Objetivo**: Contrastar status quo vs. nuestra solución

**Elementos**:
- 3 bloques problema/solución
- Cada bloque: stat del problema + nuestra solución
- Layout side-by-side

**Copy Rules**:
- Stats reales del mercado
- Soluciones específicas, no genéricas
- Contraste claro entre "antes" y "después"

**Estructura de Bloque**:
```
Problema: "85% de leads se pierden por falta de seguimiento"
Solución: "Nuestro agente califica y agenda automáticamente en <2 minutos"
```

---

## 6. Comparativa (Tabla)

**Objetivo**: Posicionar contra alternativas fragmentadas

**Elementos**:
- Columnas: Node Agency vs "Herramientas Aisladas"
- Filas: Features clave
- Estados: ✓ Incluido | ✗ Limitado | ⚠ Requiere integración

**Copy Rules**:
- Features orientados a resultados de negocio
- Evitar jerga técnica
- Destacar ventajas únicas

---

## 7. Testimonios

**Objetivo**: Prueba social con resultados medibles

**Elementos**:
- 2-3 testimonios
- Cada uno: quote + nombre/rol/empresa + métrica de resultado
- Layout cards o carousel

**Copy Rules**:
- Quotes auténticos, no marketing speak
- Métricas específicas ("aumentó conversión 40%")
- Roles y empresas reconocibles

**Estructura de Testimonio**:
```
"Quote específico sobre el resultado obtenido"
- Nombre Apellido
- Cargo, Empresa
- Métrica: +40% conversión
```

---

## 8. Cómo Funciona

**Objetivo**: Simplificar el proceso de implementación

**Elementos**:
- 3 pasos numerados
- Cards con iconos
- Flujo visual claro

**Copy Rules**:
- Pasos de máximo 2 palabras
- Enfoque en simplicidad
- Timeframes específicos

**Estructura**:
```
1. Configurar (5 min)
2. Entrenar (1 día)
3. Desplegar (inmediato)
```

---

## 9. Capacidades/Use Cases

**Objetivo**: Mostrar versatilidad de agentes

**Elementos**:
- 6 tipos de agentes
- Grid responsive
- Cada card: nombre + descripción breve

**Copy Rules**:
- Nombres descriptivos del rol
- Descripciones orientadas a outcome
- Casos de uso específicos

**Agentes**:
- Calificador
- Agendador
- Soporte
- Cobranza
- Entrenador
- Personalizado

---

## 10. Calculadora de Precios

**Objetivo**: Transparencia y engagement

**Elementos**:
- Toggle Mensual/Anual
- Sliders para variables (agentes, conversaciones, etc.)
- Cálculo en tiempo real
- CTA para contacto

**Copy Rules**:
- Variables claras y comprensibles
- Precios transparentes
- Descuentos anuales visibles

---

## 11. CTA Final

**Objetivo**: Conversión con mínima fricción

**Elementos**:
- Headline de urgencia/valor
- Single CTA prominente
- Garantía o risk reversal

**Copy Rules**:
- Tono NotCo: directo y confiado
- Eliminar objeciones finales
- CTA específico (no "Contactar")

---

## 12. Footer

**Objetivo**: Navegación secundaria y confianza

**Elementos**:
- Logo y descripción breve
- Links de producto
- Links legales
- Social media
- Copyright

**Copy Rules**:
- Descripción de 1 línea
- Links organizados por categoría
- Información de contacto clara

---

## ASCII Wireframe

```
┌─────────────────────────────────────────────────────────┐
│ [LOGO] Nav1 Nav2 Nav3                        [LOGIN]    │ ← Header
├─────────────────────────────────────────────────────────┤
│                                                         │
│         HEADLINE PRINCIPAL                              │
│         Subheadline con métrica                         │
│         [CTA Primary] [CTA Secondary]                   │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ [Logo1] [Logo2] [Logo3] [Logo4] [Logo5] [Logo6]        │ ← Trust
├─────────────────────────────────────────────────────────┤
│                SOLUCIONES EN UNO                        │
│ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐               │
│ │Card1│ │Card2│ │Card3│ │Card4│ │Card5│               │
│ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘               │
├─────────────────────────────────────────────────────────┤
│              PROBLEMAS → SOLUCIÓN                       │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐        │
│ │ Problema 1  │ │ Problema 2  │ │ Problema 3  │        │
│ │ Solución 1  │ │ Solución 2  │ │ Solución 3  │        │
│ └─────────────┘ └─────────────┘ └─────────────┘        │
├─────────────────────────────────────────────────────────┤
│                   COMPARATIVA                           │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Feature    │ Node Agency │ Herramientas Aisladas   │ │
│ │ Feature 1  │      ✓      │          ✗              │ │
│ │ Feature 2  │      ✓      │          ⚠              │ │
│ └─────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────┤
│                   TESTIMONIOS                           │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐        │
│ │"Quote 1"    │ │"Quote 2"    │ │"Quote 3"    │        │
│ │- Nombre 1   │ │- Nombre 2   │ │- Nombre 3   │        │
│ │- Métrica 1  │ │- Métrica 2  │ │- Métrica 3  │        │
│ └─────────────┘ └─────────────┘ └─────────────┘        │
├─────────────────────────────────────────────────────────┤
│                 CÓMO FUNCIONA                           │
│    ┌─────┐      ┌─────┐      ┌─────┐                   │
│    │  1  │ ──→  │  2  │ ──→  │  3  │                   │
│    │Conf │      │Entr │      │Desp │                   │
│    └─────┘      └─────┘      └─────┘                   │
├─────────────────────────────────────────────────────────┤
│                 CAPACIDADES                             │
│ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐       │
│ │Calif│ │Agend│ │Sopor│ │Cobra│ │Entre│ │Perso│       │
│ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘       │
├─────────────────────────────────────────────────────────┤
│              CALCULADORA PRECIOS                        │
│ [Mensual/Anual] [Slider1] [Slider2] [Total: $XXX]      │
│                    [CTA Contacto]                       │
├─────────────────────────────────────────────────────────┤
│                   CTA FINAL                             │
│         HEADLINE DE CIERRE                              │
│              [CTA PRINCIPAL]                            │
├─────────────────────────────────────────────────────────┤
│ Logo │ Producto │ Recursos │ Legal │ Social             │ ← Footer
│      │ Link1    │ Link1    │ Link1 │ [Icons]            │
│      │ Link2    │ Link2    │ Link2 │                    │
└─────────────────────────────────────────────────────────┘
```

## Jerarquía de Headings

```html
<!-- Page Title -->
<h1>Headline Principal del Hero</h1>

<!-- Section Titles -->
<h2>Soluciones en Uno</h2>
<h2>Problemas que Resolvemos</h2>
<h2>Comparativa</h2>
<h2>Lo que Dicen Nuestros Clientes</h2>
<h2>Cómo Funciona</h2>
<h2>Capacidades de Agentes</h2>
<h2>Precios Transparentes</h2>

<!-- Subsection Titles -->
<h3>Brand Agent</h3>
<h3>Creative Director</h3>
<h3>Community Manager/RP</h3>
<h3>Trafficker</h3>
<h3>Integraciones</h3>

<!-- Component Titles -->
<h4>Configurar</h4>
<h4>Entrenar</h4>
<h4>Desplegar</h4>
```

## Responsive Behavior

### Mobile (320px - 767px)
- Single column layout
- Stacked CTAs
- Collapsed navigation
- Simplified tables (cards)
- Touch-optimized interactions

### Tablet (768px - 1023px)
- 2-column grids
- Side-by-side CTAs
- Expanded navigation
- Horizontal scrolling tables

### Desktop (1024px+)
- Multi-column layouts
- Full navigation
- Hover interactions
- Full table display
- Optimized for mouse/keyboard

## Performance Considerations

### Critical Path
1. Header + Hero (above fold)
2. Trust logos (immediate credibility)
3. Soluciones section (core value prop)

### Lazy Loading
- Testimonials section
- Pricing calculator
- Footer content
- Non-critical images

### Code Splitting
- Dashboard route
- Pricing calculator component
- Authentication modal

## SEO Structure

### Meta Tags
```html
<title>Node Agency - Agentes de IA que Venden y Escalan</title>
<meta name="description" content="Automatiza tu pipeline comercial con agentes de IA. Convierte 3x más leads en clientes. Prueba gratis.">
<meta name="keywords" content="agentes ia, automatización ventas, crm inteligente, leads">
```

### Schema Markup
- Organization
- Product
- Review (testimonials)
- FAQ (if added)

### URL Structure
```
/ (homepage)
/dashboard (protected)
/404 (error)
```