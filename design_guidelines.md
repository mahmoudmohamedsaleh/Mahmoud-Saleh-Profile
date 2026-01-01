# Design Guidelines: Mahmoud Saleh - Professional Portfolio

## Design Approach

**Reference-Based Approach** drawing inspiration from:
- **Linear**: Clean typography, refined spacing, professional polish
- **Read.cv**: Modern resume presentation with strong visual hierarchy
- **Bento-style portfolios**: Mixed content density with featured sections

**Core Principle**: Transform traditional CV into an engaging, scannable digital experience that establishes technical credibility while maintaining visual interest.

---

## Typography System

**Font Families** (Google Fonts):
- **Headings**: Inter (700, 600) - technical precision, modern feel
- **Body**: Inter (400, 500) - consistent, highly readable
- **Accent/Code**: JetBrains Mono (400) - for technical skills

**Hierarchy**:
- Hero Name: text-6xl/text-7xl font-bold
- Section Headers: text-3xl/text-4xl font-semibold
- Job Titles: text-xl font-semibold
- Body Text: text-base/text-lg
- Metadata: text-sm font-medium

---

## Layout System

**Spacing Primitives**: Tailwind units 4, 6, 8, 12, 16, 24
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24
- Element gaps: gap-4 to gap-8

**Container Strategy**:
- Max width: max-w-6xl
- Content sections: max-w-4xl for readability
- Full-width hero and footer

---

## Core Sections & Components

### 1. Hero Section (80vh)
Large professional hero image (business portrait or working environment)
- Overlay with name, current title "Presale Manager - Low Current Systems"
- Location indicator: "Riyadh, Saudi Arabia"
- Primary CTA: "Download Resume" + Secondary: "Contact Me"
- Buttons with backdrop-blur-md backgrounds
- Quick stats: "7+ Years Experience" | "15+ Projects" | "Multi-disciplinary"

### 2. About Summary (Single Column)
Concise 2-3 paragraph professional summary
Max-w-3xl centered, text-lg for readability

### 3. Experience Timeline (Left-aligned, Vertical)
Interactive timeline with connection lines
Each entry contains:
- Company logo placeholder
- Date range (text-sm)
- Job title (text-xl font-semibold)
- Company name
- 3-5 key bullet points (not all responsibilities)
- Collapsible "Show more" for full details

### 4. Skills Grid (3-Column on Desktop)
**Categories as Cards**:
- Networking & Systems (CCNA, Low Current)
- Programming (Python, C/C++, Embedded)
- Tools & Platforms (ORCAD, Proteus, Django)
Each card: icon placeholder + skill list with proficiency indicators

### 5. Projects Showcase (2-Column Grid)
Featured projects with:
- Project name header
- Client/organization
- Brief description (2-3 lines)
- Tech/systems involved as tags
- Hover effect revealing more details

### 6. Education & Certifications (2-Column)
- Degree information with university badge
- GPA and graduation project highlight
- Certifications in separate card

### 7. Contact Footer
Professional contact information
- Email, phone, WhatsApp in clean format
- Social links (LinkedIn placeholder)
- Secondary CTA: "Let's Work Together"

---

## Component Library

**Cards**: Subtle borders, rounded-lg, p-6, hover lift effect (translate-y)
**Buttons**: 
- Primary: Large, rounded-lg, font-semibold
- Secondary: Outlined variant
**Tags/Badges**: Small, rounded-full, text-xs, for skills and tech stacks
**Timeline Connectors**: Vertical line with dot indicators
**Section Dividers**: Minimal, subtle spacing-based separation

---

## Images

**Hero Image**: Professional portrait or working environment shot - full-width background with gradient overlay
**Company Logos**: Placeholder spaces for Samsung, Eshraq Al-Jazeera, etc.
**Section Backgrounds**: Optional subtle patterns for visual interest in alternating sections

---

## Animation Strategy

**Minimal & Purposeful**:
- Fade-in on scroll for timeline items (stagger effect)
- Subtle hover lifts on cards (2-4px)
- Smooth scrolling for anchor navigation
- NO complex scroll-driven animations

---

## Accessibility

- Semantic HTML structure (header, main, section)
- ARIA labels for timeline and navigation
- Keyboard navigation for interactive elements
- Sufficient contrast ratios throughout
- Focus states on all interactive elements