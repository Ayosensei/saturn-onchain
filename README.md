# Saturn Portfolio - Specification Document

## 1. Concept & Vision

A sleek, minimal digital hub for @saturn_onchain that positions you as a trusted Web3/blockchain authority. The site conveys sharp expertise through deliberate restraint — letting the content breathe in a dark void while subtle motion and premium typography do the heavy lifting. It feels like stepping into a high-end crypto terminal: sophisticated, focused, and unapologetically technical.

## 2. Design Language

### Aesthetic Direction
**Terminal Noir** — Inspired by Bloomberg terminals and premium fintech dashboards. Deep blacks, sharp accent colors, monospace elements mixed with elegant sans-serif. Every pixel earns its place.

### Color Palette
```
--bg-primary:      #0A0A0A    (near-black base)
--bg-secondary:    #111111    (elevated surfaces)
--bg-tertiary:     #1A1A1A    (cards, inputs)
--border:          #2A2A2A    (subtle dividers)
--text-primary:    #FAFAFA    (headings, primary content)
--text-secondary:  #A0A0A0    (body text, descriptions)
--text-muted:      #666666    (timestamps, meta info)
--accent-primary:  #00D4AA    (teal - CTAs, links, highlights)
--accent-hover:    #00F5C4    (lighter teal on hover)
--accent-secondary:#FF6B35    (orange - alerts, important)
--gradient-start:  #00D4AA
--gradient-end:    #00A8E8
```

### Typography
- **Headings:** `Space Grotesk` (700, 600) — geometric, modern, sharp
- **Body:** `Inter` (400, 500) — clean readability
- **Mono/Code:** `JetBrains Mono` — for stats, tags, technical content
- **Scale:** 14px base, 1.5 line-height, modular scale (1.25)

### Spatial System
- Base unit: 8px
- Section padding: 120px vertical, 24px horizontal (mobile: 80px/16px)
- Card padding: 32px
- Component gaps: 24px standard, 48px between major elements

### Motion Philosophy
- **Entrance:** Staggered fade-up (opacity 0→1, translateY 20px→0), 600ms ease-out, 100ms stagger
- **Hover:** Scale 1.02, border glow, 200ms ease-out
- **Page transitions:** Fade with slight upward movement
- **Accent elements:** Subtle pulse on CTA buttons, gradient shimmer on hover
- **Scroll:** Parallax on hero background elements, progressive reveal

### Visual Assets
- **Icons:** Lucide React — consistent 1.5px stroke, 24px default size
- **Decorative:** Geometric grid patterns, subtle noise texture overlay, glowing accent orbs
- **Images:** User-provided or placeholder crypto/Web3 imagery

## 3. Layout & Structure

### Page Architecture
Single-page application with smooth scroll navigation:

```
┌─────────────────────────────────────┐
│  NAVIGATION (fixed, blur backdrop)  │
├─────────────────────────────────────┤
│                                     │
│         HERO SECTION                │
│    (100vh, centered value prop)     │
│                                     │
├─────────────────────────────────────┤
│                                     │
│       FEATURED CONTENT              │
│    (Latest X thread preview)        │
│                                     │
├─────────────────────────────────────┤
│                                     │
│        PORTFOLIO                    │
│    (Grid of threads & case studies) │
│                                     │
├─────────────────────────────────────┤
│                                     │
│        SERVICES                     │
│    (What you offer, pricing tiers) │
│                                     │
├─────────────────────────────────────┤
│                                     │
│         ABOUT                       │
│    (Credibility section)            │
│                                     │
├─────────────────────────────────────┤
│                                     │
│        CONTACT                      │
│    (Call to action, links)         │
│                                     │
├─────────────────────────────────────┤
│           FOOTER                    │
└─────────────────────────────────────┘
```

### Responsive Strategy
- **Desktop (1200px+):** Full layout, max-width 1200px container
- **Tablet (768-1199px):** Adjusted grid (2 columns), reduced spacing
- **Mobile (<768px):** Single column, hamburger nav, touch-optimized

## 4. Features & Interactions

### Navigation
- Fixed position, transparent initially, gains backdrop-blur on scroll
- Logo/handle on left, nav links on right
- Mobile: Hamburger menu with slide-in drawer
- Active section highlighted via scroll spy

### Hero Section
- **Content:** Your X handle, value proposition headline, 1-sentence tagline
- **CTA:** Primary button "Connect" (links to contact), secondary "View Work"
- **Background:** Subtle animated gradient mesh or floating geometric shapes
- **Interaction:** Parallax movement on mouse, scroll indicator pulsing

### Featured X Content
- Displays your latest/featured thread with preview
- Shows engagement metrics (likes, reposts, replies)
- Direct link to full thread on X
- Auto-refresh option (optional)

### Portfolio Section
- **Grid layout:** 2-3 columns of cards
- **Card types:**
  - Thread cards (X thread with preview, metrics)
  - Case study cards (image + title + description + metrics)
  - Visual cards (images/media with overlay text)
- **Hover:** Card lifts, border glows with accent color
- **Click:** Opens modal with full content or external link
- **Filter tabs:** All / Threads / Case Studies / Visuals

### Services Section
- 3-column grid of service cards
- Each card: Icon, title, description, price/tier indicator
- Hover: Subtle scale and glow effect
- Services based on your expertise (Web3 consulting, content creation, etc.)

### About Section
- Split layout: Image/bio on left, detailed info on right
- Key stats/metrics in accent boxes (e.g., "500+ threads", "10K+ followers")
- Trust indicators (brands worked with, notable mentions)
- Personal touch: Brief origin story, what drives you

### Contact Section
- **Primary CTA:** Large "Let's Work Together" button
- **Direct links:** X profile, email, other social platforms
- **Optional:** Simple contact form (name, email, message)
- Form submission: Success toast notification

### Footer
- Minimal: Copyright, quick links, social icons
- Subtle top border

## 5. Component Inventory

### Button
- **Variants:** Primary (gradient bg, white text), Secondary (transparent, accent border), Ghost (text only)
- **Sizes:** Small (32px), Medium (44px), Large (56px)
- **States:** Default, Hover (glow + slight scale), Active (pressed), Disabled (50% opacity)
- **Icons:** Optional leading/trailing icon support

### Card (Portfolio)
- **Default:** Dark bg, subtle border, rounded corners (12px)
- **Hover:** Border color transitions to accent, box-shadow glow, translateY -4px
- **Content:** Thumbnail, title, description, tags, metrics
- **Loading:** Skeleton with shimmer animation
- **Empty:** Placeholder with dashed border

### Navigation Link
- **Default:** Muted text color
- **Hover:** Primary text color, underline animation (left to right)
- **Active:** Accent color, persistent underline

### Stat Box
- **Appearance:** Compact box with large number in mono font, label below
- **Accent:** Optional accent-colored top border
- **Animation:** Number count-up on scroll into view

### Tag/Chip
- **Appearance:** Small rounded pill, monospace font, muted bg
- **Hover:** Slightly lighter bg
- **Use:** Categories, topics, metrics

### Toast Notification
- **Success:** Accent left border, checkmark icon
- **Error:** Orange left border, alert icon
- **Animation:** Slide in from bottom-right, auto-dismiss after 5s

### Modal
- **Backdrop:** Black 80% opacity with blur
- **Content:** Centered card, max-width 600px
- **Animation:** Fade in backdrop, scale-up content
- **Close:** X button top-right, click outside, Escape key

## 6. Technical Approach

### Stack
- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS (utility-first, custom config for design tokens)
- **Animation:** Framer Motion for complex animations
- **Icons:** Lucide React
- **Routing:** React Router (for potential multi-page expansion)
- **Build:** Vite with optimized production build

### Project Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Featured.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Card.jsx
│       ├── StatBox.jsx
│       └── Toast.jsx
├── data/
│   └── content.js        (portfolio items, services, etc.)
├── hooks/
│   └── useScrollSpy.js
├── App.jsx
├── index.css
└── main.jsx
```

### X/Twitter Integration
- **Option 1:** Static - Embed your latest posts as content
- **Option 2:** API Integration - Use X API v2 for live feed (requires API access)
- **Fallback:** Display pinned tweet/featured content statically

### Performance Targets
- Lighthouse: 90+ across all metrics
- First Contentful Paint: <1.5s
- Cumulative Layout Shift: <0.1
- Lazy load images below fold
- Preload critical fonts

### Accessibility
- Semantic HTML throughout
- Keyboard navigation support
- ARIA labels on interactive elements
- Focus-visible states
- Reduced motion media query support
