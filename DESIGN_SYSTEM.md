# SUPER NAPKIN — OFFICIAL DESIGN SYSTEM  
Version 1.0 (2025)  
Style: RAW / Noise Rock / Poster Minimalism

---

## 1. Brand Principles

### 1.1 Raw Authenticity
Design intentionally avoids polished patterns.  
No gradients, no soft shadows, no rounded cards.  
The site should feel like a poster, not a corporate page.

### 1.2 Poster Aesthetic
Layout resembles a long vertical gig poster:  
- Large typography  
- Heavy spacing  
- Minimal UI elements  
- Emphasis on imagery and album art

### 1.3 Let the Music Speak
The design serves the artwork and releases.  
Visual hierarchy emphasizes:
1. Band name  
2. Releases  
3. Gigs  
4. Social links / footer  

### 1.4 Minimal Structure
Content blocks remain independent without overly rigid grid systems.  
Spacing and rhythm should feel natural, not templated.

---

## 2. Color System (Tokens)

### Palette
| Token                  | Value                     | Usage           |
| ---------------------- | ------------------------- | --------------- |
| `--color-bg`           | `hsl(var(--white-hsl))`   | Main background |
| `--color-text-primary` | `hsl(var(--black-hsl))`   | Main text       |
| `--color-accent`       | `hsl(226 100% 77%)`       | Brand accent    |
| `--color-link`         | `hsl(217 100% 83%)`       | Links, hover    |

### Rules
- No colored blocks or backgrounds except black variants.
- Accent used for interaction, not decoration.
- Images remain untreated (no borders, no shadows).

---

## 3. Typography System

### 3.1 Fonts

- Heading / Body / Meta all use `Poppins`, sans-serif.
- Base font size: `20px` (visual design reference; web remains rem-based).
- Tailwind `font-heading`, `font-body`, `font-meta` map to this family.

### 3.2 Type Scale
| Style   | Tailwind class                      | Usage            |
| ------- | ----------------------------------- | ---------------- |
| Display | `text-5xl tracking-tight uppercase` | Main band title  |
| H1      | `text-2xl font-bold uppercase`      | Section titles   |
| H2      | `text-xl font-bold`                 | Subsections      |
| H3      | `text-lg font-semibold`             | Album titles     |
| Body    | `text-base`                         | General text     |
| Caption | `text-sm text-secondary`            | Dates / metadata |

### 3.3 General Rules
- All section titles use uppercase.
- Avoid justified text; keep natural ragged edges.
- Line-height slightly tight for large titles.

---

## 4. Layout & Grid

### 4.1 Container

max-width: 1280px;
padding-inline: 24px (48px on md+);
centered layout;

### 4.2 Vertical Rhythm
| Section  | Spacing       |
| -------- | ------------- |
| Hero     | `pt-32 pb-20` |
| Members  | `py-20`       |
| Releases | `py-32`       |
| Footer   | `py-20`       |

### 4.3 Grid System
Releases:
grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
gap-12

### 4.4 Image Rules
- Use `object-cover`
- Strict aspect-ratio: `aspect-square`
- No border / shadow / radius

---

## 5. Components

### 5.1 Navbar

flex justify-between items-center py-6
uppercase tracking-wide text-sm gap-6
hover:opacity-70 transition-opacity

### 5.2 Hero Title

text-5xl font-bold uppercase tracking-tight text-primary text-center

### 5.3 Member Vertical Block
- Vertical stacked letters OR three-column layout  
- Keep fixed letter spacing  
- Avoid centering inside the page; slight asymmetry is acceptable

### 5.4 Release Card

```html
<div class="space-y-4">
  <img class="w-full aspect-square object-cover" />
  <h3 class="text-lg font-semibold hover:text-accent transition">
</div>
```

5.5 Next Gig

text-xl font-bold mb-4
text-secondary for 'TBA'

5.6 Footer
py-16 text-center text-xs text-secondary space-y-4
flex gap-6 justify-center
icons: w-6 h-6 hover:text-primary transition

6. Interaction Rules

|State|Behavior|
|---|---|
|Hover|opacity-70|
|Active|opacity-50|
|Focus|ring-1 ring-accent|
|Image hover|scale-[1.02] transition

7. Accessibility
	•	All text meets at least 4.5:1 contrast.
	•	Add alt text for every album cover.
	•	Ensure keyboard-focusable navigation.

File Standards

Required project files

DESIGN_SYSTEM.md
tailwind.config.js
src/styles/tokens.css
README.md (must reference the design system)

must always reference DESIGN_SYSTEM.md.

10. Implementation Notes
	•	All styling MUST use Tailwind tokens from tailwind.config.js
	•	Custom CSS only allowed for:
	•	Keyframes (if needed)
	•	Global resets
	•	Font-face definitions

End of Document