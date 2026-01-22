# Wayond Plus Theme Documentation

A comprehensive reference guide for building an LMS with the Wayond Plus design system.

---

## 🎨 Color Palette

| Token | Hex Code | Usage |
|-------|----------|-------|
| **Primary** | `#FFCD01` | CTAs, highlights, accent text, icons |
| **Secondary** | `#D9D9D9` | Button outer layer, muted elements |
| **Background** | `#000000` | Main background color |
| **Foreground** | `#FFFFFF` | Primary text color |
| **Dark Brown** | `#241D00` | Card backgrounds (subtle contrast) |
| **Error/Strikethrough** | `#FF0000` | Price strikethrough, error states |

### Opacity Variations
- **Glass backgrounds**: `bg-white/[0.04]` to `bg-white/[0.10]`
- **Borders**: `border-white/10` to `border-white/30`
- **Glow effects**: `opacity-15` to `opacity-40`

---

## 🔤 Typography

### Font Family
```css
font-family: 'FreeSans', system-ui, -apple-system, sans-serif;
```

**Font Weights:**
- `400` - Normal (body text)
- `700` - Bold (headings, emphasis)

**Note:** No italic fonts are used in this design system.

### Heading Styles

| Element | Desktop | Mobile | Weight | Line Height | Letter Spacing |
|---------|---------|--------|--------|-------------|----------------|
| `h2` | 50px | 32px | 700 | 100% | -0.05em |
| `h3` | 30-40px | 24-30px | 700 | 100% | -0.05em |

### Body Text Sizes
- Large: `20px` (line-height: 22-28px)
- Medium: `16px` (line-height: 22px)
- Small: `14px`
- XSmall: `12px`

### Global Letter Spacing
```css
letter-spacing: -0.05em; /* Used on most text */
```

---

## 🔘 Buttons

### Primary Button (Double-Layer Style)
A distinctive button with outer gray layer and inner yellow layer.

**Structure:**
```jsx
<button className="bg-[#D9D9D9] border-[0.7px] border-white rounded-[36.5px] p-[3px]">
  <span className="bg-[#FFCD01] border-[0.7px] border-white rounded-[inherit] shadow-[0px_2.75px_2.75px_rgba(0,0,0,0.25)]">
    Button Text
  </span>
</button>
```

**Sizes:**
| Variant | Width | Height | Border Radius |
|---------|-------|--------|---------------|
| Default | auto | 52-58px | 36.5px |
| Hero CTA | 222px | 58px | 53px |
| Small | 150px | 40px | 53px |

**States:**
- Hover: Inner shadow `inset 0 4px 4px rgba(0,0,0,0.25)`
- Active: `scale-95`
- Hover scale: `hover:scale-[1.02]` or `hover:scale-105`

---

## 📦 Container Styles

### Glass Card (Frosted Glass Effect)
```css
/* Glass Background */
background: rgba(255, 255, 255, 0.04);
border: 1px solid rgba(255, 255, 255, 0.10);
backdrop-filter: blur(24px);
border-radius: 20-30px;
```

**Tailwind Classes:**
```jsx
className="bg-white/[0.04] border border-white/10 backdrop-blur-2xl rounded-[20px]"
```

### Card with Yellow Border
```jsx
className="bg-[#241D00] border border-[#FFCD01] rounded-[20px] p-8"
```

### Glow Effects (Yellow)
```jsx
<div className="absolute w-[190px] h-[190px] bg-[#FFCD01] rounded-full blur-[225px] opacity-20" />
```

**Placement:** Top-left or bottom-right corners, outside visible bounds

---

## ✨ Animations

### Keyframes

| Animation | Description | Duration |
|-----------|-------------|----------|
| `fadeIn` | Opacity 0 → 1 | 0.6s |
| `slideUp` | Translate Y +30px → 0, fade in | 0.6s |
| `scaleIn` | Scale 0.95 → 1, fade in | 0.5s |
| `float` | Subtle up/down movement | 3s infinite |

### CSS Classes
```css
.animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
.animate-slide-up { animation: slideUp 0.6s ease-out forwards; }
.animate-scale-in { animation: scaleIn 0.5s ease-out forwards; }
.animate-float { animation: float 3s ease-in-out infinite; }
```

### Staggered Delays
```css
.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
.delay-500 { animation-delay: 0.5s; }
```

### Hover Transitions
All buttons, links, and `.interactive` elements have:
```css
transition: all 0.3s ease;
```

---

## 📐 Layout & Spacing

### Container
- Max width: `1080px` to `1280px`
- Padding: `1rem` (16px) on sides

### Section Padding
- Desktop: `py-20` (80px vertical)
- Mobile: `py-12` (48px vertical)

### Common Gaps
- Card grids: `gap-6` (24px)
- Feature lists: `gap-3` to `gap-4` (12-16px)

---

## 🏷️ Labels & Badges

### Top Label (Leaning Outside Container)
```jsx
<div className="absolute -top-[35px] right-[50px]">
  <div className="px-6 py-2 bg-white rounded-t-[10px]">
    <span className="text-black text-[12px]">Label Text</span>
  </div>
</div>
```

---

## 📝 Form Elements

### Input Fields
```jsx
className="w-full h-[82px] bg-black border border-[#FFCD01] rounded-[10px] px-6 py-4"
```

**Label:** 15px, white
**Input text:** 20px, white
**Placeholder:** white, opacity reduced

### Focus State
```css
focus-within:shadow-lg focus-within:shadow-primary/20
```

---

## 📋 Lists

### Feature List with Arrow Icons
```jsx
<li className="flex items-center gap-3">
  <Icon icon="mingcute:arrows-left-fill" className="w-6 h-6 text-[#FFCD01] rotate-180" />
  <span className="text-[20px] text-white">Feature text</span>
</li>
```

### Checkmark List
```jsx
<svg className="w-5 h-5">
  <circle cx="12" cy="12" r="10" fill="#FFCD01" fillOpacity="0.2" />
  <path d="M8 12L11 15L16 9" stroke="#FFCD01" strokeWidth="2" />
</svg>
```

---

## 🖼️ Special UI Patterns

### Pricing Display
```jsx
<span className="text-[#FFCD01] text-[35px] font-bold">
  <span className="relative inline-block">
    $49.99
    <span className="absolute top-1/2 left-0 w-full h-[2px] bg-[#FF0000] -rotate-12" />
  </span>
  <span className="text-white mx-2">→</span>
  <span>$19.99</span>
</span>
```

### Long Arrow (Decorative)
```jsx
<svg width="140" height="20" viewBox="0 0 154 20">
  <path d="M0 10H154M154 10L146 6M154 10L146 14" stroke="white" strokeWidth="1"/>
</svg>
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Tailwind Prefix | Usage |
|------------|-----------------|-------|
| Mobile | (default) | < 768px |
| Tablet | `md:` | ≥ 768px |
| Desktop | `lg:` | ≥ 1024px |

### Common Responsive Patterns
```jsx
// Text sizing
className="text-[16px] md:text-[20px]"

// Padding
className="p-4 md:p-8"

// Grid columns
className="grid-cols-1 md:grid-cols-2"
```

---

## 🛠️ Required Dependencies

```json
{
  "next": "^16.x",
  "tailwindcss": "^4.x",
  "@iconify/react": "^5.x",
  "react-phone-number-input": "^3.x"
}
```

### Font Files (Required)
Place in `/public/fonts/`:
- `FreeSans.ttf` (400 weight)
- `FreeSansBold.ttf` (700 weight)

---

## 📁 Component Reference

| Component | Path | Description |
|-----------|------|-------------|
| PrimaryButton | `/components/ui/PrimaryButton.tsx` | Yellow double-layer CTA button |
| AnimateOnScroll | `/components/ui/AnimateOnScroll.tsx` | Scroll-triggered animation wrapper |

---

## 🎯 Key Design Principles

1. **Dark-first design** - Black backgrounds with light text
2. **Yellow as accent** - `#FFCD01` for all interactive elements
3. **Glassmorphism** - Frosted glass cards with subtle borders
4. **No italics** - All text is normal or bold only
5. **Smooth animations** - Fade, slide, and scale on scroll
6. **Tight letter-spacing** - `-0.05em` for a modern look
7. **Rounded corners** - Consistent 20-30px radius on cards
