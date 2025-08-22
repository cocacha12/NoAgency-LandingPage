# Node Agency - Guía de Diseño

## Filosofía de Diseño

Inspirándose en NotCo Tech, nuestro diseño abraza la **simplicidad radical** y el **contraste alto** para crear una experiencia que refleje la eficiencia y precisión de nuestros agentes de IA.

### Principios Fundamentales

1. **Claridad sobre ornamentación**: Cada elemento debe tener un propósito funcional
2. **Contraste dramático**: Negro/blanco con acentos lime para máxima legibilidad
3. **Jerarquía visual clara**: Tipografía bold para headlines, regular para cuerpo
4. **Movimiento sutil**: Animaciones que mejoran UX sin distraer
5. **Accesibilidad primero**: AA compliance en contraste y navegación

## Paleta de Colores

### Colores Principales
```css
--bg: #0B0B0B        /* Near-black background */
--fg: #F5F5F5        /* Off-white foreground */
--accent: #A8FF60    /* Electric lime accent */
--muted: #9CA3AF     /* Gray for secondary text */
```

### Uso de Colores

**Background (#0B0B0B)**
- Fondo principal de toda la aplicación
- Crea la base dramática para el contraste
- Nunca usar negro puro (#000000) para evitar fatiga visual

**Foreground (#F5F5F5)**
- Texto principal y elementos de UI
- Bordes y divisores (con opacidad)
- Iconos principales

**Accent (#A8FF60)**
- CTAs primarios y elementos interactivos
- Highlights y estados activos
- Métricas y números importantes
- Logo y elementos de marca

**Muted (#9CA3AF)**
- Texto secundario y descripciones
- Placeholders y labels
- Iconos secundarios

### Variaciones de Opacidad
```css
/* Para bordes y divisores */
border-color: rgba(156, 163, 175, 0.2)  /* muted/20 */

/* Para backgrounds sutiles */
background: rgba(168, 255, 96, 0.1)     /* accent/10 */

/* Para hover states */
background: rgba(245, 245, 245, 0.05)   /* fg/5 */
```

## Tipografía

### Familias de Fuentes

**Display (Manrope)**
- Headlines (H1-H3)
- CTAs y botones importantes
- Números y métricas destacadas
- Logo y elementos de marca

**Sans (Inter)**
- Cuerpo de texto
- Navegación
- Formularios
- UI elements

### Jerarquía Tipográfica

```css
/* Display Headlines */
h1: 4rem (64px) / font-bold / Manrope
h2: 3rem (48px) / font-bold / Manrope  
h3: 2rem (32px) / font-bold / Manrope

/* Body Text */
body: 1rem (16px) / font-normal / Inter
large: 1.25rem (20px) / font-normal / Inter
small: 0.875rem (14px) / font-normal / Inter

/* UI Elements */
button: 1rem (16px) / font-semibold / Inter
nav: 1rem (16px) / font-medium / Inter
label: 0.875rem (14px) / font-medium / Inter
```

### Responsive Typography

```css
/* Mobile First */
h1: text-4xl md:text-6xl lg:text-7xl
h2: text-3xl md:text-4xl lg:text-5xl
h3: text-xl md:text-2xl lg:text-3xl
```

## Espaciado y Layout

### Sistema de Espaciado (Tailwind Scale)

```css
/* Micro spacing */
1: 0.25rem (4px)   /* Elementos muy cercanos */
2: 0.5rem (8px)    /* Spacing mínimo */
3: 0.75rem (12px)  /* Elementos relacionados */
4: 1rem (16px)     /* Spacing estándar */

/* Macro spacing */
6: 1.5rem (24px)   /* Entre secciones pequeñas */
8: 2rem (32px)     /* Entre componentes */
12: 3rem (48px)    /* Entre secciones */
16: 4rem (64px)    /* Padding de secciones */
24: 6rem (96px)    /* Separación mayor */
32: 8rem (128px)   /* Separación de secciones principales */
```

### Grid System

```css
/* Container */
.container-custom {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Responsive Grids */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3  /* Cards/Features */
grid-cols-1 md:grid-cols-4                /* Footer */
flex-col sm:flex-row                       /* CTAs */
```

## Componentes de UI

### Botones

**Primary Button**
```css
.btn-primary {
  background: var(--accent);
  color: var(--bg);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-primary:hover {
  background: rgba(168, 255, 96, 0.9);
  transform: translateY(-1px);
}
```

**Secondary Button**
```css
.btn-secondary {
  border: 1px solid var(--fg);
  color: var(--fg);
  background: transparent;
}

.btn-secondary:hover {
  background: var(--fg);
  color: var(--bg);
}
```

### Cards

```css
.card {
  border: 1px solid rgba(156, 163, 175, 0.2);
  border-radius: 0.75rem;
  padding: 2rem;
  transition: border-color 0.3s;
}

.card:hover {
  border-color: rgba(168, 255, 96, 0.5);
}
```

### Inputs

```css
.input {
  background: var(--bg);
  border: 1px solid rgba(156, 163, 175, 0.2);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  color: var(--fg);
}

.input:focus {
  border-color: var(--accent);
  outline: none;
  box-shadow: 0 0 0 3px rgba(168, 255, 96, 0.1);
}
```

## Iconografía

### Librería: Lucide React
- **Tamaño estándar**: 20px (w-5 h-5)
- **Tamaño grande**: 24px (w-6 h-6) para headers
- **Tamaño pequeño**: 16px (w-4 h-4) para inline

### Uso de Iconos
- **Accent color**: Para iconos de features y beneficios
- **Muted color**: Para iconos de navegación y secundarios
- **Foreground color**: Para iconos de acciones principales

## Animaciones y Transiciones

### Principios de Movimiento
1. **Sutil y funcional**: Mejora UX sin distraer
2. **Rápido**: Duraciones de 0.2s-0.3s
3. **Easing natural**: ease-out para entradas, ease-in para salidas

### Animaciones Definidas

```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
@keyframes slideUp {
  from { 
    transform: translateY(20px); 
    opacity: 0; 
  }
  to { 
    transform: translateY(0); 
    opacity: 1; 
  }
}

/* Hover Lift */
.hover-lift:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease-out;
}
```

## Estados y Interacciones

### Focus States
```css
.focus-ring {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
```

### Loading States
```css
.loading-spinner {
  border: 2px solid rgba(168, 255, 96, 0.2);
  border-top: 2px solid var(--accent);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

### Error States
```css
.error {
  color: #EF4444;
  border-color: #EF4444;
  background: rgba(239, 68, 68, 0.1);
}
```

## Responsive Design

### Breakpoints
```css
sm: 640px   /* Tablet portrait */
md: 768px   /* Tablet landscape */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

### Mobile-First Approach
- Diseño base para móvil (320px+)
- Progressive enhancement para pantallas mayores
- Touch-friendly targets (44px mínimo)
- Readable text sin zoom (16px mínimo)

## Accesibilidad

### Contraste
- **Texto principal**: 21:1 ratio (AAA)
- **Texto secundario**: 7:1 ratio (AA)
- **Elementos interactivos**: 4.5:1 ratio mínimo

### Navegación
- Focus visible en todos los elementos interactivos
- Navegación por teclado completa
- Screen reader friendly
- Semantic HTML structure

### ARIA Labels
```html
<!-- Botones con iconos -->
<button aria-label="Cerrar modal">
  <XIcon />
</button>

<!-- Estados dinámicos -->
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>
```

## Performance

### Optimizaciones
- **Fonts**: Preload critical fonts
- **Images**: WebP format, lazy loading
- **CSS**: Critical path inlined
- **JS**: Code splitting por rutas

### Bundle Size Targets
- **Initial JS**: <100KB gzipped
- **CSS**: <20KB gzipped
- **Total page weight**: <500KB
- **LCP**: <2.5s
- **CLS**: <0.1