# TRABAJO FINAL - FRONT END

Sitio web de **Mendez Vedia & Asociados**, desarrollado con React como trabajo final del Curso Inicial de Desarrollo Front-End de la **UTN**. Sigue el enfoque de la Opción A: migración de HTML y CSS a una aplicación con componentes reutilizables.

## Tecnologías

React · Vite · React Router DOM · JavaScript · CSS · ESLint

## Funcionalidades

- Navegación entre Inicio, Nosotros, Servicios, Urgencias y Contacto.
- Tarjetas de servicios y galería de imágenes reutilizables mediante props.
- Layout compartido con barra de navegación, footer y acceso a WhatsApp.
- Formulario controlado con `useState`, validación, envío simulado y limpieza de campos.

## Instalación y ejecución

**Requisitos:** Node.js 20.19+ (rama 20) o 22.12+, y npm.

Descargá o cloná el repositorio. Desde la carpeta `TPF`, ejecutá:

```bash
cd vite-project
npm install
npm run dev
```

Si ya estás en `vite-project`, omití el primer comando. Abrí la URL indicada en la terminal, habitualmente `http://localhost:5173`.

### Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Previsualiza la versión generada después del build. |
| `npm run lint` | Revisa el código con ESLint. |

## Estructura

src/
├── assets/       # Imágenes y recursos
├── components/   # Navbar, Layout, Home, Card, Gallery, Contact y Footer
├── pages/        # Nosotros, Servicios y Urgencias
├── styles/       # Estilos generales y por sección
├── App.jsx       # Rutas de la aplicación
└── main.jsx      # Punto de entrada
