# Node Agency - Documentación Técnica

## Stack Tecnológico

### Filosofía: Simple, Rápido, Seguro

Nuestro stack está diseñado para **máximo rendimiento** con **mínima complejidad**, priorizando la experiencia del usuario y la facilidad de mantenimiento.

---

## Frontend Stack

### Core Framework
**Vite + React 18 + TypeScript**

**¿Por qué Vite?**
- ⚡ **HMR instantáneo**: Desarrollo ultra-rápido
- 📦 **Bundle optimizado**: Rollup para producción
- 🔧 **Zero config**: Funciona out-of-the-box
- 🚀 **Build times**: 10x más rápido que Webpack

**¿Por qué React 18?**
- 🔄 **Concurrent features**: Mejor UX con Suspense
- 📱 **Ecosystem maduro**: Librerías probadas
- 👥 **Team familiarity**: Curva de aprendizaje mínima
- 🛠 **DevTools**: Debugging superior

**¿Por qué TypeScript?**
- 🐛 **Catch errors early**: Menos bugs en producción
- 🧠 **IntelliSense**: Mejor DX
- 📚 **Self-documenting**: Código más mantenible
- 🔒 **Type safety**: Refactoring seguro

### Styling & UI
**Tailwind CSS + Radix UI + Lucide Icons**

**¿Por qué Tailwind?**
- 🎨 **Utility-first**: Desarrollo rápido
- 📱 **Mobile-first**: Responsive por defecto
- 🗜 **Purge CSS**: Bundle mínimo
- 🎯 **Design consistency**: Sistema de design integrado

**¿Por qué Radix UI?**
- ♿ **Accessibility**: WAI-ARIA compliant
- 🎛 **Headless**: Styling completo control
- 🧪 **Battle-tested**: Usado por Vercel, GitHub
- 📦 **Tree-shakeable**: Solo importas lo que usas

**¿Por qué Lucide?**
- 🎨 **Consistent design**: Iconografía coherente
- 📦 **Lightweight**: SVG optimizados
- 🔧 **React optimized**: Componentes nativos
- 🎯 **Customizable**: Fácil styling

### Routing & State
**React Router v6**

**¿Por qué React Router?**
- 🛣 **Declarative routing**: Fácil de entender
- 🔄 **Code splitting**: Lazy loading automático
- 🔒 **Protected routes**: Auth guards simples
- 📱 **Mobile friendly**: History API

**State Management Strategy:**
- **Local state**: useState/useReducer para UI
- **URL state**: React Router para navegación
- **Server state**: Supabase real-time
- **Global state**: Context API (mínimo)

### Authentication
**Supabase Auth**

**¿Por qué Supabase?**
- 🔐 **Auth completo**: Email + OAuth out-of-the-box
- 🚀 **Zero backend**: No server management
- 🔄 **Real-time**: WebSocket connections
- 🛡 **Security**: Row Level Security (RLS)
- 💰 **Cost effective**: Generous free tier

---

## Arquitectura

### Estructura de Directorios

```
src/
├── main.tsx              # Entry point
├── App.tsx               # Root component + routing
├── routes/               # Page components
│   ├── marketing/        # Public pages
│   │   └── Home.tsx      # Landing page
│   └── app/              # Protected pages
│       └── Dashboard.tsx # User dashboard
├── components/           # Reusable UI components
│   ├── Header.tsx        # Navigation
│   ├── Footer.tsx        # Site footer
│   └── LoginDialog.tsx   # Auth modal
├── lib/                  # Utilities & config
│   └── supabaseClient.ts # Supabase setup
└── data/                 # Static data
    └── products.ts       # Product information
```

### Component Architecture

**Principios:**
1. **Single Responsibility**: Un componente, una función
2. **Composition over Inheritance**: Componentes pequeños y combinables
3. **Props down, Events up**: Flujo de datos predecible
4. **Separation of Concerns**: UI separado de lógica de negocio

**Patterns:**
```typescript
// Container/Presentational Pattern
const LoginContainer = () => {
  const [user, setUser] = useState(null);
  const handleLogin = async (email: string) => {
    // Business logic
  };
  return <LoginForm onLogin={handleLogin} user={user} />;
};

// Custom Hooks for Logic
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Auth logic
  return { user, loading, signIn, signOut };
};

// Compound Components
const Modal = ({ children }) => {
  return <RadixDialog.Root>{children}</RadixDialog.Root>;
};
Modal.Trigger = RadixDialog.Trigger;
Modal.Content = RadixDialog.Content;
```

### Routing Strategy

```typescript
// App.tsx - Route Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
]);

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) return <LoadingSpinner />;
  if (!user) return <Navigate to="/" replace />;
  
  return children;
};
```

---

## Supabase Integration

### Client Configuration

```typescript
// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### Auth Flow

```typescript
// Authentication Methods
export const signInWithEmail = async (email: string) => {
  const { error } = await supabase.auth.signInWithOtp({ email });
  return { error };
};

export const signInWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/dashboard`
    }
  });
  return { error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};
```

### Session Management

```typescript
// useAuth Hook
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return { user, loading };
};
```

---

## Performance Optimization

### Bundle Optimization

**Code Splitting:**
```typescript
// Route-based splitting
const Dashboard = lazy(() => import('./routes/app/Dashboard'));
const PricingCalculator = lazy(() => import('./components/PricingCalculator'));

// Component wrapping
<Suspense fallback={<LoadingSpinner />}>
  <Dashboard />
</Suspense>
```

**Tree Shaking:**
```typescript
// Good: Named imports
import { Button } from '@radix-ui/react-button';
import { Search, Menu } from 'lucide-react';

// Bad: Default imports
import * as RadixUI from '@radix-ui/react-button';
import LucideIcons from 'lucide-react';
```

### Asset Optimization

**Images:**
- WebP format with fallbacks
- Lazy loading below fold
- Responsive images with srcset
- SVG for icons and illustrations

**Fonts:**
```html
<!-- Preload critical fonts -->
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/manrope.woff2" as="font" type="font/woff2" crossorigin>
```

**CSS:**
```css
/* Critical CSS inlined */
/* Non-critical CSS loaded async */
<link rel="preload" href="/styles/non-critical.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

### Runtime Performance

**React Optimizations:**
```typescript
// Memoization for expensive calculations
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

// Callback memoization
const handleClick = useCallback((id: string) => {
  onItemClick(id);
}, [onItemClick]);

// Component memoization
const MemoizedComponent = memo(({ data }) => {
  return <ExpensiveComponent data={data} />;
});
```

---

## SEO & Accessibility

### Meta Tags

```typescript
// React Helmet or similar
const SEOHead = () => (
  <Helmet>
    <title>Node Agency - Agentes de IA que Venden y Escalan</title>
    <meta name="description" content="Automatiza tu pipeline comercial con agentes de IA. Convierte 3x más leads en clientes." />
    <meta property="og:title" content="Node Agency - Agentes de IA" />
    <meta property="og:description" content="Automatiza tu pipeline comercial con agentes de IA." />
    <meta property="og:image" content="/og-image.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
);
```

### Accessibility

**ARIA Labels:**
```typescript
<button 
  aria-label="Cerrar modal de login"
  onClick={onClose}
>
  <X size={20} />
</button>

<div 
  role="alert" 
  aria-live="polite"
>
  {errorMessage}
</div>
```

**Keyboard Navigation:**
```typescript
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    onClose();
  }
  if (e.key === 'Enter' || e.key === ' ') {
    onSubmit();
  }
};
```

**Focus Management:**
```typescript
const focusRef = useRef<HTMLButtonElement>(null);

useEffect(() => {
  if (isOpen) {
    focusRef.current?.focus();
  }
}, [isOpen]);
```

---

## Security

### Content Security Policy

```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://cdn.supabase.co;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https:;
  connect-src 'self' https://*.supabase.co;
">
```

### Environment Variables

```typescript
// .env validation
const requiredEnvVars = [
  'VITE_SUPABASE_URL',
  'VITE_SUPABASE_ANON_KEY'
];

requiredEnvVars.forEach(envVar => {
  if (!import.meta.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
});
```

### Input Validation

```typescript
import { z } from 'zod';

const emailSchema = z.string().email('Email inválido');
const loginSchema = z.object({
  email: emailSchema,
});

const validateLogin = (data: unknown) => {
  return loginSchema.safeParse(data);
};
```

---

## Testing Strategy

### Unit Testing
**Vitest + React Testing Library**

```typescript
// Component test example
import { render, screen, fireEvent } from '@testing-library/react';
import { LoginDialog } from './LoginDialog';

test('should show error for invalid email', async () => {
  render(<LoginDialog isOpen={true} onClose={() => {}} />);
  
  const emailInput = screen.getByLabelText(/email/i);
  const submitButton = screen.getByRole('button', { name: /iniciar sesión/i });
  
  fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
  fireEvent.click(submitButton);
  
  expect(await screen.findByText(/email inválido/i)).toBeInTheDocument();
});
```

### Integration Testing
**Playwright for E2E**

```typescript
// E2E test example
import { test, expect } from '@playwright/test';

test('user can sign in and access dashboard', async ({ page }) => {
  await page.goto('/');
  
  // Click login button
  await page.click('[data-testid="login-button"]');
  
  // Fill email
  await page.fill('[data-testid="email-input"]', 'test@example.com');
  
  // Submit form
  await page.click('[data-testid="submit-button"]');
  
  // Check success message
  await expect(page.locator('[data-testid="success-message"]')).toBeVisible();
});
```

### Performance Testing
**Lighthouse CI**

```json
// lighthouserc.json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:3000"],
      "numberOfRuns": 3
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.9}],
        "categories:best-practices": ["error", {"minScore": 0.9}],
        "categories:seo": ["error", {"minScore": 0.9}]
      }
    }
  }
}
```

---

## Deployment

### Build Process

```json
// package.json scripts
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:e2e": "playwright test",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "type-check": "tsc --noEmit"
  }
}
```

### Vercel Deployment

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "env": {
    "VITE_SUPABASE_URL": "@supabase-url",
    "VITE_SUPABASE_ANON_KEY": "@supabase-anon-key"
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      - run: npm ci
      - run: npm run type-check
      - run: npm run lint
      - run: npm run test
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## Monitoring & Analytics

### Performance Monitoring

```typescript
// Web Vitals tracking
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const sendToAnalytics = (metric) => {
  // Send to your analytics service
  console.log(metric);
};

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

### Error Tracking

```typescript
// Error boundary
class ErrorBoundary extends Component {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log to error tracking service
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

---

## Development Workflow

### Local Development

```bash
# Setup
npm install
cp .env.example .env
# Add your Supabase credentials to .env

# Development
npm run dev

# Testing
npm run test
npm run test:e2e

# Build
npm run build
npm run preview
```

### Code Quality

```json
// .eslintrc.json
{
  "extends": [
    "@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  "rules": {
    "react-hooks/exhaustive-deps": "error",
    "jsx-a11y/anchor-is-valid": "error"
  }
}
```

```json
// prettier.config.js
module.exports = {
  semi: true,
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
};
```

### Git Workflow

```bash
# Feature development
git checkout -b feature/new-component
git add .
git commit -m "feat: add new component"
git push origin feature/new-component

# Create PR → Review → Merge to main → Auto-deploy
```

---

## Performance Targets

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

### Bundle Size
- **Initial JS**: < 100KB gzipped
- **CSS**: < 20KB gzipped
- **Total page weight**: < 500KB

### Lighthouse Scores
- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 90
- **SEO**: > 90

---

## Maintenance & Updates

### Dependency Updates
```bash
# Check outdated packages
npm outdated

# Update dependencies
npm update

# Security audit
npm audit
npm audit fix
```

### Monitoring
- **Uptime**: Vercel analytics
- **Performance**: Web Vitals
- **Errors**: Console logs + Error boundaries
- **Usage**: Supabase analytics

### Backup Strategy
- **Code**: Git repository
- **Environment**: .env.example template
- **Dependencies**: package-lock.json
- **Database**: Supabase automatic backups