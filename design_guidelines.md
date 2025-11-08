# Houseplant E-Commerce Design Guidelines

## Design Approach
**Reference-Based: Nature-Inspired E-Commerce**
Drawing inspiration from premium plant retailers and modern e-commerce platforms (The Sill, Bloomscape, Shopify aesthetics), combined with organic, botanical design principles. The design emphasizes visual product showcase while maintaining clean, trustworthy e-commerce functionality.

**Core Principles:**
- Organic sophistication: Natural elements with modern refinement
- Visual product focus: Let plant imagery drive the experience
- Breathing room: Generous whitespace mirrors natural growth space
- Approachable premium: High-quality but welcoming, not intimidating

## Typography

**Font Families:**
- **Primary (Headings):** Playfair Display or Cormorant - serif fonts that evoke organic elegance
- **Secondary (Body/UI):** Inter or Work Sans - clean, highly readable sans-serif
- **Accent (Optional highlights):** Same as primary but in italic

**Hierarchy:**
- Hero Headlines: text-5xl to text-7xl, font-serif, font-light
- Section Headers: text-3xl to text-4xl, font-serif, font-normal
- Product Names: text-xl to text-2xl, font-serif, font-medium
- Body Copy: text-base to text-lg, font-sans, font-normal
- UI Elements/Buttons: text-sm to text-base, font-sans, font-medium, tracking-wide uppercase for CTAs
- Prices: text-lg to text-xl, font-sans, font-semibold
- Cart Numbers/Badges: text-xs to text-sm, font-sans, font-bold

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 24
- Component padding: p-4, p-6, p-8
- Section spacing: py-16, py-24 (desktop), py-12 (mobile)
- Grid gaps: gap-6, gap-8, gap-12
- Element margins: m-4, mb-8, mt-12

**Container Strategy:**
- Full-width sections with max-w-7xl inner containers
- Product grids: max-w-6xl
- Cart content: max-w-4xl
- Text-heavy sections: max-w-3xl

**Grid Systems:**
- Product listing: 3-column grid (lg:grid-cols-3 md:grid-cols-2 grid-cols-1)
- Category sections: Stacked with visual separation
- Cart items: Single column with responsive internal layout

## Component Library

### Navigation Header
- Sticky positioning with subtle shadow on scroll
- Logo/company name left-aligned, navigation center/right
- Shopping cart icon with circular badge showing item count
- Badge: Absolute positioned, small circle with centered count
- Navigation links with subtle underline on hover
- Height: h-16 to h-20

### Landing Page Hero
- Full viewport height section (min-h-screen)
- Background image with subtle overlay for text readability
- Centered content with max-w-3xl
- Company name: Large serif headline
- Tagline/description: Generous line-height (leading-relaxed), max 2-3 sentences
- CTA button with backdrop-blur-md background for image overlay
- Scroll indicator at bottom (optional down arrow)

### Product Cards
- Aspect-ratio-square image container with subtle rounded corners (rounded-lg)
- Image hover: Gentle scale transform (hover:scale-105 transition-transform)
- Content section with p-6 padding
- Plant name, category tag (small pill badge), price clearly separated
- Add to Cart button full-width at bottom
- Disabled state: Reduced opacity with cursor-not-allowed
- Card shadow: Subtle elevation (shadow-md) intensifying on hover (hover:shadow-xl)

### Category Headers
- Decorative leaf/botanical icon or simple line accent
- Category name in large serif font
- Optional short category description in smaller sans-serif
- Margin-bottom spacing before product grid (mb-12)

### Shopping Cart Items
- Horizontal layout: Thumbnail (left) | Details (center-expand) | Controls (right)
- Thumbnail: Fixed size square (w-24 h-24), rounded corners
- Details section: Plant name, unit price, subtotal calculation
- Quantity controls: Centered group with decrease/value/increase buttons
- Delete button: Icon-based, positioned top-right or inline with controls
- Border-bottom separator between items

### Buttons
**Primary CTA (Get Started, Checkout):**
- Rounded-full or rounded-lg
- Generous padding (px-8 py-4)
- Font-medium, tracking-wide, uppercase text
- Transform/shadow transitions on hover

**Secondary (Continue Shopping, Add to Cart):**
- Similar sizing to primary but visually lighter treatment
- Border variant or subtle fill

**Icon Buttons (Increase/Decrease/Delete):**
- Square or circular (w-8 h-8 to w-10 h-10)
- Icon-only with accessible labels
- Subtle background, border on hover

**Disabled State:**
- opacity-50, cursor-not-allowed
- No hover effects

### Cart Summary Panel
- Sticky sidebar or bottom section
- Total items count with large prominent display
- Subtotal and total cost with clear typography hierarchy
- Checkout button as primary CTA
- "Coming Soon" modal: Centered card with backdrop, simple message

### Empty States
- Cart empty: Centered illustration or icon, encouraging message, Continue Shopping CTA

## Images

### Landing Page Hero Background
Large, high-quality botanical photography. Suggestions:
- Lush indoor jungle with hanging/potted plants creating depth
- Overhead flat-lay of various plant varieties with beautiful leaves
- Sun-dappled plant shelf with diverse greenery
- Single statement plant (Monstera, Fiddle Leaf Fig) in lifestyle setting

Image treatment: Subtle darkening overlay or gradient to ensure text legibility. Position background with object-fit-cover.

### Product Images
Each of the 6 plants needs a clean product shot:
- Consistent white or natural light background
- Plant centered, showing full form and distinctive leaf patterns
- Square aspect ratio for grid consistency
- High resolution for zoom/detail viewing

Suggested plant varieties (ensure visual diversity):
1. **Tropical:** Monstera deliciosa (large split leaves)
2. **Succulent:** Echeveria arrangement (rosette pattern)
3. **Hanging:** Pothos or String of Pearls (trailing vines)
4. **Statement:** Fiddle Leaf Fig (tall, dramatic leaves)
5. **Low-light:** Snake Plant (architectural upright form)
6. **Flowering:** Orchid or Peace Lily (blooms for variety)

### Additional Visual Elements
- Subtle botanical line-art icons for category markers
- Leaf motifs for section dividers
- Shopping cart icon: Simple line-art or filled style

## Accessibility & Interactions

- Focus states with visible outline rings on all interactive elements
- Cart badge has sufficient contrast against header
- Disabled buttons clearly communicate state visually
- Form inputs (if any) maintain consistent styling with other UI
- Smooth transitions (transition-all duration-300) for hover states
- Loading states for add-to-cart actions (brief spinner or checkmark confirmation)

## Responsive Behavior

- Mobile (base): Single column, stacked navigation, full-width buttons
- Tablet (md): 2-column product grid, compact header
- Desktop (lg+): 3-column product grid, full header with inline navigation
- Cart page: Stack thumbnail/details/controls on mobile, horizontal layout on desktop