# Gestión de Archivos Electrónicos II — Portal del Curso

Portal educativo del curso **Gestión de Archivos Electrónicos II**, Escuela Nacional de Archivística (ENA) —
Archivo General de la Nación del Perú. Implementación fiel al diseño de Stitch (`code.html` / `DESIGN.md`).

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (tokens ported 1:1 from `DESIGN.md`, light/dark via CSS variables)
- shadcn/ui-style primitives (Radix UI + class-variance-authority)
- Framer Motion (page transitions)
- Lucide React (icons)
- React Router (client-side navigation)

## Estructura

```
src/
  components/
    ui/        primitivas estilo shadcn (Button, Card, Badge, Progress, Tabs, Accordion)
    common/    piezas reutilizables (Breadcrumb, Timeline, Quiz, Callout, Diagram)
    course/    composición específica del curso (LessonCard, ProgressCard, HeroSection...)
  layouts/     Header, Sidebar, Footer, MainLayout (shell de cada ruta)
  pages/       una página por ruta (Dashboard, Week/Lesson, placeholders)
  modules/
    weeks/     registro de las 17 semanas del curso (ver "Agregar una semana" abajo)
  hooks/       useTheme (claro/oscuro), useCourseData/useWeek
  services/    capa de acceso a datos (courseService)
  data/        datos estáticos (info del curso, navegación, progreso de ejemplo)
  types/       tipos del dominio (WeekModule, Lesson, ...)
  utils/       cn() (merge de clases), getIcon()
  styles/      globals.css (tokens de diseño + Tailwind)
```

## Agregar una semana nueva

Todo el catálogo del curso vive en `src/modules/weeks/registry.ts`. Para añadir contenido:

1. Si la semana ya existe en el registro (semanas 5-16 se generan con datos de ejemplo), reemplaza su
   entrada por una llamada a `createWeekModule({...})` con el contenido real, siguiendo el patrón de
   `week-01.content.ts`.
2. Si es una semana totalmente nueva (18+), añade una entrada más al arreglo `weeksRegistry`.

El sidebar, el grid del dashboard y el enrutamiento (`/semana/:numero/:leccion`) se derivan automáticamente
del registro — no requieren cambios.

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # type-check + build de producción
```
