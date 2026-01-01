# Mahmoud Saleh - Professional Portfolio

## Overview

This is a professional portfolio website for Mahmoud Saleh, a Presale Manager specializing in Low Current Systems, Infrastructure Networking, and Security Solutions. The application is built as a full-stack TypeScript project with a React frontend and Express backend, designed to showcase professional experience, skills, and qualifications in an engaging, modern digital format.

The design approach draws inspiration from Linear, Read.cv, and bento-style portfolios, emphasizing clean typography, refined spacing, and strong visual hierarchy to transform a traditional CV into a scannable digital experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with hot module replacement

The frontend follows a component-based architecture with:
- Pages in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/`
- Custom hooks in `client/src/hooks/`
- Utility functions in `client/src/lib/`

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with tsx for TypeScript execution
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Storage Interface**: Abstracted storage layer (`IStorage`) with in-memory implementation, designed for easy database integration

The server structure includes:
- `server/index.ts`: Application entry point and middleware setup
- `server/routes.ts`: API route definitions
- `server/storage.ts`: Data access layer abstraction
- `server/vite.ts`: Development server integration
- `server/static.ts`: Production static file serving

### Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts`
- **Validation**: Zod schemas via drizzle-zod integration
- **Current Models**: Users table with id, username, password fields

### Theming System
- Dark/light mode support via ThemeProvider context
- CSS variables for comprehensive color customization
- Tailwind configuration extended with design system tokens
- Typography using Google Fonts (Inter, JetBrains Mono, DM Sans, Fira Code)

### Build Process
- Development: Vite dev server with Express backend proxy
- Production: Custom build script (`script/build.ts`) using esbuild for server bundling and Vite for client
- Output: Combined bundle in `dist/` directory

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **Drizzle Kit**: Database migrations and schema management

### UI Framework
- **Radix UI**: Headless component primitives (dialog, dropdown, tabs, etc.)
- **shadcn/ui**: Pre-styled component collection
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel functionality

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **Google Fonts**: Inter, DM Sans, Fira Code, Geist Mono, Architects Daughter

### Development Tools
- **Vite**: Frontend build tool and dev server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development environment indicator