# Velocity Landing Page

Una landing page moderna y optimizada construida con Next.js 16, TypeScript, Tailwind CSS y SCSS.

## 🚀 Características

- ⚡ **Next.js 16** - Framework React de última generación
- 🎨 **Tailwind CSS 4** - Estilos modernos y responsive
- 📝 **TypeScript** - Tipado estático para mayor seguridad
- 🌍 **i18n** - Soporte para múltiples idiomas (ES/EN)
- 📱 **Mobile First** - Diseño optimizado para móviles
- 🔍 **SEO Optimizado** - Metadata completa y estructura semántica
- ♿ **Accesibilidad** - ARIA labels y navegación por teclado
- 🎯 **Performance** - Optimizado para velocidad y Core Web Vitals

## 📁 Estructura del Proyecto

```
├── app/
│   ├── layout.tsx          # Layout principal con metadata SEO
│   ├── page.tsx            # Página principal de la landing
│   └── globals.scss        # Estilos globales en SCSS
├── components/
│   └── ui/                 # Componentes UI reutilizables
│       ├── badge.tsx
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   ├── utils.ts            # Utilidades (cn function)
│   └── i18n.ts             # Sistema de traducciones
├── locales/
│   ├── en.json             # Traducciones en inglés
│   └── es.json             # Traducciones en español
└── public/                 # Assets estáticos
```

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 🎨 Estilos

Los estilos están escritos en **SCSS** y se encuentran en `app/globals.scss`. El proyecto utiliza:

- Tailwind CSS para utilidades
- Variables CSS para temas (light/dark)
- Mobile-first approach
- Optimizaciones de performance

## 🌐 Internacionalización

El proyecto incluye soporte para múltiples idiomas. Los archivos de traducción se encuentran en `locales/`:

- `en.json` - Inglés
- `es.json` - Español

Para cambiar el idioma, modifica el estado `locale` en `app/page.tsx`.

## 🔍 SEO

La landing page está optimizada para SEO con:

- Metadata completa en `layout.tsx`
- Open Graph tags
- Twitter Cards
- Estructura semántica HTML5
- Schema.org markup (preparado)
- Sitemap y robots.txt (configurables)

## 📱 Mobile First

El diseño sigue un enfoque mobile-first:

- Breakpoints responsive: `sm:`, `md:`, `lg:`, `xl:`
- Navegación adaptativa
- Imágenes optimizadas
- Touch-friendly interactions

## ⚡ Performance

Optimizaciones incluidas:

- Image optimization con Next.js Image
- Code splitting automático
- Lazy loading de imágenes
- Font optimization
- CSS minification

## 📝 Licencia

Este proyecto es privado.

