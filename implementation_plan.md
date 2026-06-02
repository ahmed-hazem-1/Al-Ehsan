# Al Ihsan Landing Page — Implementation Plan

## Goal

Build a single-page, conversion-focused landing page for Al Ihsan — a B2B healthcare consulting brand. The page targets healthcare executives and must feel premium, minimal, and trustworthy using a Swiss-inspired editorial design system with violet accents on a white-first layout.

**Every section must have a minimum height of 100vh (full viewport height).**

---

## Tech Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | **React 18** + **Vite** | Component-based architecture, fast HMR, modern DX |
| Structure | **JSX** with semantic HTML elements | SEO, accessibility, PRD requirement FR-10 |
| Styling | **Vanilla CSS** with CSS custom properties | Full control, no dependencies, matches design precision needs |
| Animations | **CSS animations + custom `useInView` hook** (Intersection Observer) | Lightweight scroll-triggered reveals, no library needed |
| Icons | **lucide-react** | Thin monoline React icon components per DESIGN.md |
| Fonts | **Google Fonts: Inter** | Neo-grotesk, matches DESIGN.md typography direction |
| Form | **React controlled form** with state-based validation | Low friction, future CRM integration ready (FR-15) |

---

## Project Structure

```
d:\Alehsan\
├── index.html                    # Vite entry HTML
├── vite.config.js
├── package.json
├── src/
│   ├── App.jsx                   # Root component — assembles all sections
│   ├── App.css                   # Global styles, tokens, resets
│   ├── main.jsx                  # React entry point
│   ├── hooks/
│   │   ├── useInView.js          # Intersection Observer hook for scroll animations
│   │   └── useCountUp.js         # Animated number counter hook
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── ResultsBar/
│   │   │   ├── ResultsBar.jsx
│   │   │   └── ResultsBar.css
│   │   ├── Problem/
│   │   │   ├── Problem.jsx
│   │   │   └── Problem.css
│   │   ├── BeforeAfter/
│   │   │   ├── BeforeAfter.jsx
│   │   │   └── BeforeAfter.css
│   │   ├── Services/
│   │   │   ├── Services.jsx
│   │   │   ├── PillarCard.jsx
│   │   │   └── Services.css
│   │   ├── WhyAlIhsan/
│   │   │   ├── WhyAlIhsan.jsx
│   │   │   └── WhyAlIhsan.css
│   │   ├── VisionMission/
│   │   │   ├── VisionMission.jsx
│   │   │   └── VisionMission.css
│   │   ├── FinalCTA/
│   │   │   ├── FinalCTA.jsx
│   │   │   ├── LeadForm.jsx
│   │   │   └── FinalCTA.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   └── assets/
│       └── logo.svg
├── Init Helpers/                  # Existing — PRD, DESIGN, reference video
```

---

## Design System Foundation

### [NEW] `src/App.css` — Design Tokens & Base

#### Color Tokens (from PRD palette)
```css
:root {
  --bg-white: #FFFFFF;
  --bg-soft: #F8F5FF;
  --primary: #5B21B6;
  --primary-deep: #4C1D95;
  --accent: #7C3AED;
  --border-soft: #E9D5FF;
  --heading-ink: #231942;
  --body-gray: #5B5870;
  --muted-gray: #8B87A3;
  --surface-card: #FFFFFF;
}
```

#### Typography Scale
| Token | Size | Weight | Usage |
|---|---|---|---|
| `--text-hero` | clamp(2.5rem, 5vw, 4.5rem) | 800 | Hero H1 only |
| `--text-section-title` | clamp(1.75rem, 3vw, 2.75rem) | 700 | Section H2 headings |
| `--text-card-title` | clamp(1.125rem, 1.5vw, 1.5rem) | 600 | Card/pillar headings |
| `--text-body` | 1rem (16px) | 400 | Body paragraphs |
| `--text-small` | 0.875rem | 400 | Labels, captions |
| `--text-metric` | clamp(2rem, 4vw, 3.5rem) | 800 | Stats/numbers |

#### Spacing Scale
```
--space-xs: 0.5rem;   --space-sm: 1rem;    --space-md: 1.5rem;
--space-lg: 2rem;     --space-xl: 3rem;    --space-2xl: 4rem;
--space-3xl: 6rem;    --space-4xl: 8rem;
```

#### Global Rules
- All sections: `min-height: 100vh; display: flex; align-items: center;`
- Max content width: `1200px`, centered with auto margins
- Border-radius for cards: `16px` (rounded, not sharp — per DESIGN.md)
- Transition default: `all 160ms ease`
- No box-shadow on buttons (FR-11)
- Buttons: solid fill, color-change hover only (FR-12)

#### Base Component Styles

**Primary Button**
- Background: `var(--primary)`, color: white
- Padding: `14px 32px`, border-radius: `8px`, font-weight: 600
- Hover: `var(--primary-deep)`, no shadow, no elevation
- Transition: `background-color 160ms ease`

**Secondary Button**
- Background: transparent, border: `1.5px solid var(--primary)`
- Color: `var(--primary)`
- Hover: `var(--bg-soft)` background tint

**Section Container**
- `min-height: 100vh`
- `display: flex; align-items: center; justify-content: center;`
- `padding: var(--space-3xl) var(--space-lg);`
- Inner wrapper: `max-width: 1200px; width: 100%; margin: 0 auto;`

---

## Section-by-Section Implementation

---

### Section 1: Sticky Header

**Component:** `src/components/Header/Header.jsx` + `Header.css`

#### Components
| Component | Description |
|---|---|
| Logo | SVG logo on the left (placeholder text "Al Ihsan" in heading-ink color until real logo provided) |
| CTA Button | "Book a Free Consultation" — primary button style, right-aligned |

#### Layout
- `position: sticky; top: 0; z-index: 1000;`
- Flexbox row: `justify-content: space-between; align-items: center;`
- Height: `64px` on desktop, `56px` on mobile
- Background: `rgba(255,255,255,0.95)` with `backdrop-filter: blur(8px)`
- Bottom border on scroll: `1px solid var(--border-soft)` — toggled via `useInView` hook observing the hero
- `scrolled` state managed via `useState` + `useEffect` with scroll listener

#### Behavior
- Always visible at top of viewport
- Slim, unobtrusive — no complex nav menu (PRD: "logo + one CTA only")
- On scroll past hero: add subtle bottom border for separation
- Smooth background transition

#### Responsive
- Mobile: Logo shrinks, CTA text becomes "Book Now" (shorter)
- Padding reduces to `0 var(--space-sm)`

> [!NOTE]
> The header does NOT count as a full-height section — it is an overlay element.

---

### Section 2: Hero Section

**Component:** `src/components/Hero/Hero.jsx` + `Hero.css`  
**Minimum height:** `100vh`

#### Components

| Component | Description |
|---|---|
| Eyebrow Tag | Small violet pill/badge: "Healthcare Growth Partner" |
| H1 Headline | "Your Partner in Growth and Profit Maximization for Healthcare Facilities" |
| Subheadline Paragraph | Expanded value message about hidden monthly losses |
| Pain-Point Bullets | 4 short bullet points with monoline icons |
| Primary CTA | "Book a Free Consultation" button |
| Secondary CTA | "Get a Free Revenue Analysis" — secondary/outline button |
| Visual Centerpiece | Floating rounded cards arrangement (per DESIGN.md — layered showcase cards) |

#### Layout
- Two-column on desktop: left = text content (55%), right = visual centerpiece (45%)
- Centered vertically within viewport using flexbox
- On mobile: stacked — text first, visual below, full-width

#### Visual Centerpiece (Floating Cards)
Per DESIGN.md's "Soft-stack hero cards" pattern:
- 3 overlapping rounded cards fanned out slightly
- Each card contains a metric or key service highlight
- Cards have: `border-radius: 16px`, subtle `box-shadow: 0 8px 32px rgba(91,33,182,0.08)`
- Slight rotation differences (`transform: rotate(-3deg)`, `rotate(2deg)`, `rotate(5deg)`)
- Staggered z-index for depth
- Subtle floating animation: `@keyframes float { 0%,100% { translateY(0) } 50% { translateY(-8px) } }` — slow, 6s duration

#### Pain-Point Bullets
- Monoline Lucide icons (e.g., `alert-circle`, `file-text`, `shield-off`, `trending-down`)
- Icon in soft circular container: `40px` circle, `var(--bg-soft)` background
- Text beside icon: short one-liner

#### Entrance Animation
- H1: fade-up, 600ms delay 0
- Subheadline: fade-up, 600ms delay 100ms
- Bullets: fade-up staggered, 100ms between each
- CTAs: fade-up, delay 400ms
- Cards: fade-in + slight scale from 0.95, delay 300ms, staggered per card

#### Responsive
- Mobile: single column, cards become a horizontal scroll or compact stack
- CTA buttons stack vertically with full-width
- H1 size scales down via clamp()

---

### Section 3: Results / Metrics Bar

**Component:** `src/components/ResultsBar/ResultsBar.jsx` + `ResultsBar.css`  
**Minimum height:** `100vh`

#### Components

| Component | Description |
|---|---|
| Section Label | Small eyebrow: "Proven Results" |
| Metrics Grid | 5 metric items in a horizontal row |
| Each Metric | Large numeral + compact label below |

#### Metrics Data
| Metric | Label |
|---|---|
| +3.2M LYD | Improved Collections |
| +45 | Insurance Entities Added |
| +120 | Contracts Optimized |
| +38% | Average Revenue Growth |
| +60 | Healthcare Facilities Supported |

#### Layout
- Centered content within full-vh section
- Background: `var(--bg-soft)` to create visual rhythm change
- Metrics in a 5-column grid on desktop, 2-column + 1 on tablet, stacked on mobile
- Each metric card: centered text, large number in `var(--primary)` color, label in `var(--muted-gray)`

#### Components Per Metric
- Number: `font-size: var(--text-metric)`, `font-weight: 800`, `color: var(--primary)`
- Label: `font-size: var(--text-small)`, `color: var(--muted-gray)`, uppercase tracking
- Optional: thin separator line between metrics on desktop

#### Animation
- Count-up animation via `useCountUp` custom hook, triggered by `useInView`
- Numbers animate from 0 to target value over 2s with easing
- Stagger: each metric starts 150ms after the previous (CSS `transition-delay` via inline style)
- Fade-up entrance for the entire row

#### Responsive
- Tablet: 3+2 grid layout
- Mobile: 2+2+1 or vertical stack with horizontal dividers

---

### Section 4: Problem Section

**Component:** `src/components/Problem/Problem.jsx` + `Problem.css`  
**Minimum height:** `100vh`

#### Components

| Component | Description |
|---|---|
| Section Label | Eyebrow tag: "The Hidden Problem" |
| H2 Headline | "The real problem is not a lack of patients." |
| Problem Grid | 6 problem cards in a grid |
| Outcome Statement | Pull-quote style statement below the grid |

#### Problem Cards (6 items)
| Icon | Problem |
|---|---|
| `file-warning` | Revenue leakage from claims |
| `file-minus` | Weak current contracts |
| `clock` | Slow collections |
| `shield-off` | Ineffective insurance management |
| `link-2-off` | Unused partnerships |
| `eye-off` | Weak financial and operational visibility |

#### Each Problem Card
- Rounded card: `border-radius: 16px`, `background: var(--surface-card)`, `border: 1px solid var(--border-soft)`
- Padding: `var(--space-lg)`
- Icon in soft circular holder (48px, `var(--bg-soft)` background, `var(--accent)` icon color)
- Problem title: `font-weight: 600`, `var(--heading-ink)`
- No box-shadow on cards (keep clean per DESIGN.md "avoid exaggerated shadows")
- Subtle hover: border color shifts to `var(--accent)`, 160ms transition

#### Layout
- 3×2 grid on desktop, 2×3 on tablet, 1-column stack on mobile
- Gap: `var(--space-lg)`

#### Outcome Statement
- "Facilities may operate at full capacity and still miss full profitability."
- Styled as a centered pull-quote: larger italic text, violet left border accent, or centered with em-dash

#### Animation
- H2: fade-up on scroll enter
- Cards: staggered fade-up, 100ms between each
- Outcome statement: fade-up last

---

### Section 5: Before vs After

**Component:** `src/components/BeforeAfter/BeforeAfter.jsx` + `BeforeAfter.css`  
**Minimum height:** `100vh`

#### Components

| Component | Description |
|---|---|
| Section Label | Eyebrow: "The Transformation" |
| H2 Headline | "From Missed Opportunities to Measurable Growth" |
| Comparison Layout | Side-by-side Before and After columns |
| Connector | Visual arrow or transition indicator between columns |

#### Before Column (4 items)
| Icon | Item |
|---|---|
| `trending-down` | Unstable revenue |
| `file-x` | Low-yield contracts |
| `hourglass` | Slow collections |
| `x-circle` | Missed opportunities |

#### After Column (4 items)
| Icon | Item |
|---|---|
| `trending-up` | Stronger cash flow |
| `file-check` | More profitable contracts |
| `zap` | Faster collections |
| `bar-chart-3` | Consistent growth |

#### Layout
- Two equal columns side by side on desktop
- Before: subtle red-tinted card or muted styling (`opacity: 0.7` feel, muted gray tones)
- After: vibrant styling with violet accents, full opacity
- Each column is a rounded card (`border-radius: 16px`)
- Before card: `background: #FAFAFA`, `border: 1px solid #E5E5E5`
- After card: `background: var(--bg-soft)`, `border: 1px solid var(--border-soft)`, subtle violet glow or thicker border
- Column header: "Before" / "After Al Ihsan" with appropriate styling
- Items: icon + text in a list format with `var(--space-md)` gap

#### Visual Arrow/Connector
- CSS arrow or chevron icon between columns (centered vertically)
- On mobile: arrow points downward between stacked cards

#### Animation
- Before column: fade-in from left
- After column: fade-in from right, slight delay
- Arrow: appears after both columns (scale-up)
- On mobile: sequential top-to-bottom reveal

#### Responsive
- Mobile: full-width stacked cards, Before on top, arrow rotates 90° to point down, After below

---

### Section 6: Services / Solution Architecture (3 Pillars)

**Component:** `src/components/Services/Services.jsx` + `PillarCard.jsx` + `Services.css`  
**Minimum height:** `100vh`

#### Components

| Component | Description |
|---|---|
| Section Label | Eyebrow: "How We Help" |
| H2 Headline | "Three Strategic Pillars for Healthcare Growth" |
| Pillar Cards | 3 large pillar cards side by side |

#### Pillar 1: Revenue Growth
- Icon: `trending-up` or `dollar-sign`
- Title: "Revenue Growth"
- Points (5): Analyze contracts, Review claims, Examine financial flows, Identify opportunities, Turn findings into profit

#### Pillar 2: Contracts & Insurance Expansion
- Icon: `handshake` or `file-text`
- Title: "Contracts & Insurance Expansion"
- Points (5): Review contracts, Improve terms, Increase value, Negotiate with insurers, Attract new agreements

#### Pillar 3: Governance & Operational Excellence
- Icon: `settings` or `layout-grid`
- Title: "Governance & Operational Excellence"
- Points (6): Organize structure, Build policies, Improve controls, Enhance reporting, Support decisions, Improve operations
- Sub-section label: "Performance Management" with dashboard/analytics points

#### Each Pillar Card
- Rounded card: `border-radius: 16px`
- `background: var(--surface-card)`, `border: 1px solid var(--border-soft)`
- Top accent: thin `4px` top border in `var(--accent)`
- Padding: `var(--space-xl) var(--space-lg)`
- Icon in circular holder at top: `56px`, `var(--bg-soft)` background
- Title: `var(--text-card-title)`, `var(--heading-ink)`
- Points: bulleted list with checkmark or small dot, `var(--body-gray)` text
- Equal height across all 3 cards using CSS Grid `align-items: stretch`

#### Layout
- 3-column grid on desktop with equal widths
- Gap: `var(--space-lg)`
- Tablet: stack to 1-column, each card full width
- Mobile: same as tablet, vertical scroll

#### Animation
- Cards: staggered fade-up, 150ms delay between each
- Icon circles: subtle scale-in when visible

---

### Section 7: Why Al Ihsan

**Component:** `src/components/WhyAlIhsan/WhyAlIhsan.jsx` + `WhyAlIhsan.css`  
**Minimum height:** `100vh`

#### Components

| Component | Description |
|---|---|
| Section Label | Eyebrow: "Why Al Ihsan" |
| H2 Headline | "A Results Partner, Not a Service Vendor" |
| Description | Short paragraph explaining the Al Ihsan difference |
| Differentiator Cards | 4 reason-to-believe items |

#### Differentiator Items
| Icon | Title | Description |
|---|---|---|
| `heart-pulse` | Business-First Healthcare | Specialization in healthcare business, not clinical operations |
| `target` | Measurable Outcomes | Every engagement tied to quantifiable results |
| `layers` | Revenue + Operations | Dual perspective covering both financial and operational sides |
| `users` | Strategic Partnership | Working alongside your team, not as an outsourced vendor |

#### Layout
- Two-column layout: left = title + paragraph (40%), right = 2×2 grid of differentiator cards (60%)
- Or: centered title + 4-column card row below
- Each card: rounded, icon top, title, short description
- Cards: `border-radius: 16px`, `padding: var(--space-lg)`, `border: 1px solid var(--border-soft)`

#### Animation
- Left content: fade-up
- Cards: staggered fade-up from left to right

#### Responsive
- Mobile: full-width stacked, title first then cards in single column

---

### Section 8: Vision & Mission

**Component:** `src/components/VisionMission/VisionMission.jsx` + `VisionMission.css`  
**Minimum height:** `100vh`

#### Components

| Component | Description |
|---|---|
| Section Label | Eyebrow: "Our Purpose" |
| Vision Block | Vision heading + statement |
| Mission Block | Mission heading + statement |

#### Content
- **Vision:** "To become the leading partner for growth and medical expense management in the healthcare sector."
- **Mission:** "To enable healthcare facilities to focus on delivering care while Al Ihsan improves profitability, develops business performance, manages medical expenses, and builds sustainable operating systems."

#### Layout
- Centered, text-focused section
- Background: `var(--bg-soft)` for contrast
- Two cards or two text blocks side by side on desktop
- Each: icon or large decorative quote mark at top, heading, statement text
- Clean separator or minimal visual between the two
- Max-width: `800px` for readability

#### Visual Treatment
- Large decorative monoline icon per block (e.g., `eye` for Vision, `compass` for Mission)
- Or: large opening quote mark as decorative element
- Calm, editorial, magazine-like feel

#### Animation
- Fade-up for each block, staggered

#### Responsive
- Mobile: stacked vertically, full-width

---

### Section 9: Final CTA + Lead Form

**Component:** `src/components/FinalCTA/FinalCTA.jsx` + `LeadForm.jsx` + `FinalCTA.css`  
**Minimum height:** `100vh`

#### Components

| Component | Description |
|---|---|
| H2 Headline | "Your healthcare facility can achieve more than it does today." |
| Support Line | "The difference is how opportunities are managed." |
| Lead Form | 5–6 field form (FR-7) |
| Submit Button | "Book My Free Consultation" |
| Promise Note | "A quick assessment of your facility within 24 hours." |

#### Form Fields
| Field | Type | Required |
|---|---|---|
| Full Name | text input | Yes |
| Organization / Facility Name | text input | Yes |
| Job Title | text input | Yes |
| Phone Number | tel input | Yes |
| Email Address | email input | Yes |
| Main Challenge | textarea (short) or dropdown | No |

#### Layout
- Two-column on desktop: left = headline + support text + trust badge, right = form card
- Form card: `border-radius: 16px`, `background: var(--surface-card)`, `border: 1px solid var(--border-soft)`, `padding: var(--space-xl)`
- Inputs: `border: 1px solid var(--border-soft)`, `border-radius: 8px`, `padding: 12px 16px`
- Focus state: `border-color: var(--primary)`, subtle violet outline
- Submit button: full-width primary button style
- Promise note: small text below button with checkmark icon

#### Form Validation (React)
- Controlled inputs with `useState` for each field
- `errors` state object for validation messages
- `onSubmit` handler: validates all fields, prevents default
- Email format check via regex
- Phone format basic check
- Inline error messages rendered conditionally below each field
- `submitted` state: when true, form replaces with a thank-you message + checkmark animation
- `LeadForm.jsx` is a separate child component receiving `onSubmit` callback from `FinalCTA.jsx`

#### Animation
- Content fade-up on scroll
- Form inputs: subtle staggered reveal
- Submit button: pulse animation after form is visible for 3s (subtle attention grab)

#### Responsive
- Mobile: single column, text above, form below
- Full-width inputs
- Large tap targets (min 48px height)

---

### Section 10: Footer

**Component:** `src/components/Footer/Footer.jsx` + `Footer.css`  
**Minimum height:** NOT 100vh (exception — footer should be compact)

#### Components

| Component | Description |
|---|---|
| Logo | Al Ihsan logo (text or SVG) |
| Contact Info | Phone, email, location |
| Quick Links | Section anchor links |
| Social Links | LinkedIn, Twitter/X (if applicable) |
| Copyright | "© 2026 Al Ihsan. All rights reserved." |

#### Layout
- Background: `var(--heading-ink)` (dark) or very dark violet `#1a0f2e`
- Text: white / light gray
- 3-column grid: Logo + tagline | Quick links | Contact
- Bottom bar: copyright + subtle separator
- Padding: `var(--space-2xl) var(--space-lg)`

#### Responsive
- Mobile: single column stacked, centered text

---

## Global Features

### Scroll-Triggered Animations — `useInView` Hook

Custom React hook (`src/hooks/useInView.js`):
```jsx
function useInView(options = {}) {
  const [ref, setRef] = useState(null);
  const [isInView, setIsInView] = useState(false);
  // IntersectionObserver watches ref element
  // Sets isInView = true once, threshold default 0.15
  return [setRef, isInView];
}
```

Usage in components:
```jsx
const [ref, isInView] = useInView({ threshold: 0.15 });
return <div ref={ref} className={`fade-up ${isInView ? 'is-visible' : ''}`}>...</div>
```

- CSS classes: `.fade-up`, `.fade-in`, `.scale-in` with `.is-visible` trigger
- Stagger via inline `style={{ transitionDelay: '${index * 100}ms' }}`

### Count-Up Hook — `useCountUp`

Custom React hook (`src/hooks/useCountUp.js`):
```jsx
function useCountUp(target, duration = 2000, startCounting = false) {
  // Animates from 0 to target over duration using requestAnimationFrame
  // Only starts when startCounting becomes true
  return currentValue;
}
```

### Smooth Scroll
- `html { scroll-behavior: smooth; }` in CSS
- Header CTA uses `onClick` → `document.getElementById('contact').scrollIntoView()`

### Mobile Sticky CTA
- Rendered inside `Header.jsx` as a conditional element
- `position: fixed; bottom: 0` on mobile only (CSS media query)
- Visibility controlled by `useInView` hook on hero section (shows when hero leaves viewport)
- Background: white with top border, `backdrop-filter: blur`
- `z-index: 999`

### SEO Structure
- Single `<h1>` in hero
- Sequential `<h2>` for each section
- `<h3>` for sub-items (pillar titles, card titles)
- Meta title: "Al Ihsan — Healthcare Revenue Growth & Consulting Partner"
- Meta description: "Uncover hidden revenue, optimize contracts, and accelerate collections. Book a free consultation with Al Ihsan."
- Open Graph tags for social sharing
- Semantic landmarks: `<header>`, `<main>`, `<section>`, `<footer>`

---

## File Breakdown

### [NEW] `index.html`
- Vite entry HTML with `<div id="root">`
- SEO meta tags, Open Graph tags
- Google Fonts link (Inter)

### [NEW] `src/main.jsx`
- React entry point: renders `<App />` into `#root`

### [NEW] `src/App.jsx`
- Root component assembling all sections in order:
  `Header → Hero → ResultsBar → Problem → BeforeAfter → Services → WhyAlIhsan → VisionMission → FinalCTA → Footer`
- Wraps content in `<main>` with semantic structure

### [NEW] `src/App.css`
- CSS custom properties (all design tokens)
- CSS reset/normalize rules
- Typography base styles
- Button component styles (`.btn-primary`, `.btn-secondary`)
- Card component styles (`.card`)
- Section container utility (`.section`)
- Animation keyframes & trigger classes (`.fade-up`, `.fade-in`, `.scale-in`, `.is-visible`)
- Responsive breakpoints (`768px`, `1024px`, `1280px`)

### [NEW] `src/hooks/useInView.js`
- Intersection Observer hook for scroll-triggered animations
- Returns `[ref, isInView]`

### [NEW] `src/hooks/useCountUp.js`
- requestAnimationFrame-based counter hook for metrics
- Returns current animated value

### [NEW] 10 Component directories (listed in Project Structure above)
- Each has a `.jsx` component file + `.css` file
- `Services/PillarCard.jsx` — reusable sub-component for each pillar
- `FinalCTA/LeadForm.jsx` — isolated form component with controlled inputs

### [NEW] `vite.config.js`
- Vite config with React plugin (`@vitejs/plugin-react`)

### [NEW] `package.json`
- Dependencies: `react`, `react-dom`, `lucide-react`
- Dev dependencies: `vite`, `@vitejs/plugin-react`

---

## Open Questions

> [!IMPORTANT]
> **Logo Asset:** Do you have an SVG/PNG logo for Al Ihsan, or should I create a text-based logo placeholder?

> [!IMPORTANT]
> **Hero Visual Centerpiece:** The DESIGN.md describes "floating showcase cards" as the hero visual. Should these cards display actual metrics/service highlights, or would you prefer a different visual element (e.g., an abstract illustration, a dashboard mockup)?

> [!NOTE]
> **Form Backend:** The PRD mentions "form submission integration readiness." For now, I'll implement the form with client-side validation and a simulated success state. You can connect it to Google Sheets or a CRM later (as done in your previous project per conversation history).

> [!NOTE]
> **Language:** PRD specifies English copy structure. The content will be in English. Should any section also support Arabic or RTL?

---

## Verification Plan

### Automated Checks
1. **Build test:** `npm run build` — ensure no errors
2. **Dev server:** `npm run dev` — verify all sections render correctly
3. **Lighthouse audit:** Run in browser DevTools for Performance, Accessibility, SEO, Best Practices scores

### Visual Verification (Browser)
1. Desktop (1440px): verify all sections at 100vh, layout, spacing, typography
2. Tablet (768px): verify responsive breakpoints
3. Mobile (375px): verify stacked layouts, sticky CTA, tap targets
4. Scroll animations: verify smooth entrance, no jank
5. Form: test validation, submit flow, error states
6. Header: verify sticky behavior, border on scroll
7. Metrics: verify count-up animation triggers correctly

### Cross-section Checks
- [ ] Every section is minimum 100vh
- [ ] Single H1 on page
- [ ] Primary CTA appears in header, hero, and final section
- [ ] No box-shadow on any button
- [ ] Transitions are 140–180ms
- [ ] White-first appearance with violet accents only
- [ ] All interactive elements have unique IDs
