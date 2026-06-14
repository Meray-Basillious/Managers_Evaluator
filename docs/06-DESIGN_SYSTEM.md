# UI/UX Design System - مقيم الأداء

## Design Philosophy

**Modern Enterprise Design** inspired by:
- McKinsey Digital platforms
- Deloitte consulting interfaces
- PwC analytics dashboards
- SAP SuccessFactors
- Workday HCM

**Core Principles**:
- **Clarity**: Clear hierarchy and information architecture
- **Efficiency**: Minimize clicks to get insights
- **Bilingual**: Full Arabic/English support with RTL/LTR
- **Accessibility**: WCAG 2.1 AA compliance
- **Mobile First**: Responsive across all devices
- **Professional**: Enterprise-grade appearance

---

## Color Palette

### Primary Colors
```
Primary Blue: #0066CC (Main brand color)
- Light: #E6F2FF
- Dark: #003D99

Secondary Blue: #0099FF (Accents, links)
Secondary Green: #00AA44 (Success, positive)
Secondary Red: #DD0000 (Errors, alerts)
Secondary Orange: #FF8800 (Warnings)
Secondary Yellow: #FFCC00 (Highlights)
```

### Neutral Colors
```
White: #FFFFFF
Light Gray: #F5F5F5
Medium Gray: #D9D9D9
Dark Gray: #666666
Black: #1A1A1A
```

### Semantic Colors
```
Success: #00AA44
Warning: #FF8800
Error: #DD0000
Info: #0099FF
Focus: #0066CC
Disabled: #CCCCCC
```

---

## Typography

### Font Family
```
Primary Font: Inter (for Latin)
Arabic Font: Segoe UI / System UI / Arabic font stack

Font Stack (EN):
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

Font Stack (AR):
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Arabic Typesetting', sans-serif;
```

### Font Sizes
```
H1 (Page Title): 32px / 40px line-height / 700 weight
H2 (Section Title): 24px / 32px line-height / 600 weight
H3 (Subsection): 20px / 28px line-height / 600 weight
H4 (Card Title): 18px / 24px line-height / 600 weight
Body Large: 16px / 24px line-height / 400 weight
Body Normal: 14px / 20px line-height / 400 weight
Body Small: 12px / 18px line-height / 400 weight
Caption: 11px / 16px line-height / 400 weight
Button: 14px / 20px line-height / 600 weight
```

---

## Spacing System

```
Base Unit: 4px

Spacing Scale:
- XS: 4px
- S: 8px
- M: 12px
- L: 16px
- XL: 24px
- 2XL: 32px
- 3XL: 48px
- 4XL: 64px

Padding/Margin patterns:
- Container: 24px (3XL)
- Section: 16px (L)
- Component: 12px (M)
- Element: 8px (S)
```

---

## Component Library

### Buttons
```
Primary Button:
- Background: #0066CC
- Text: White
- Padding: 12px 24px
- Border Radius: 6px
- Hover: #003D99
- Active: #001A4D
- Disabled: #CCCCCC

Secondary Button:
- Background: #F5F5F5
- Text: #1A1A1A
- Border: 1px solid #D9D9D9
- Padding: 12px 24px
- Border Radius: 6px

Danger Button:
- Background: #DD0000
- Text: White
- Padding: 12px 24px
- Border Radius: 6px
- Hover: #BB0000
```

### Input Fields
```
Text Input:
- Height: 40px
- Padding: 10px 12px
- Border: 1px solid #D9D9D9
- Border Radius: 6px
- Font Size: 14px
- Placeholder Color: #999999

Focus State:
- Border: 2px solid #0066CC
- Box Shadow: 0 0 0 4px rgba(0, 102, 204, 0.1)

Error State:
- Border: 2px solid #DD0000
- Box Shadow: 0 0 0 4px rgba(221, 0, 0, 0.1)
```

### Cards
```
Card Container:
- Background: White
- Border: 1px solid #E6E6E6
- Border Radius: 8px
- Box Shadow: 0 2px 8px rgba(0, 0, 0, 0.06)
- Padding: 24px

Hover State:
- Box Shadow: 0 4px 16px rgba(0, 0, 0, 0.12)
- Transform: translateY(-2px)
```

### Badges
```
Success Badge:
- Background: #E6F9F0
- Text: #00AA44
- Padding: 4px 12px
- Border Radius: 12px
- Font Size: 12px

Warning Badge:
- Background: #FFF3E6
- Text: #FF8800
- Padding: 4px 12px
- Border Radius: 12px

Error Badge:
- Background: #FFE6E6
- Text: #DD0000
- Padding: 4px 12px
- Border Radius: 12px

Info Badge:
- Background: #E6F2FF
- Text: #0099FF
- Padding: 4px 12px
- Border Radius: 12px
```

### Modal
```
Modal Overlay:
- Background: rgba(0, 0, 0, 0.5)
- Backdrop Filter: blur(4px)

Modal Container:
- Background: White
- Border Radius: 12px
- Box Shadow: 0 20px 60px rgba(0, 0, 0, 0.15)
- Min Width: 480px
- Max Width: 90vw

Modal Header:
- Padding: 24px
- Border Bottom: 1px solid #E6E6E6

Modal Body:
- Padding: 24px

Modal Footer:
- Padding: 24px
- Border Top: 1px solid #E6E6E6
- Display: flex
- Gap: 12px
- Justify: flex-end
```

---

## Page Layouts

### Dashboard Layout
```
┌────────────────────────────────────────────┐
│         Header with User Menu              │
└────────────────────────────────────────────┘
┌──────────────┬──────────────────────────────┐
│              │                              │
│   Sidebar    │     Main Content Area        │
│   (240px)    │                              │
│              │                              │
│              │  ┌──────┐ ┌──────┐          │
│              │  │      │ │      │          │
│              │  │Card 1│ │Card 2│          │
│              │  │      │ │      │          │
│              │  └──────┘ └──────┘          │
│              │  ┌──────────────────────┐   │
│              │  │                      │   │
│              │  │    Chart/Analytics   │   │
│              │  │                      │   │
│              │  └──────────────────────┘   │
│              │                              │
└──────────────┴──────────────────────────────┘
```

### Assessment Form Layout
```
┌────────────────────────────────────────────┐
│              Header                        │
│   Assessment Title | Progress Bar          │
└────────────────────────────────────────────┘
┌────────────────────────────────────────────┐
│  Question Title                            │
│  Help Text / Description                   │
│                                            │
│  [Input Area / Form Fields]                │
│                                            │
│  [ ] Evidence Upload (if required)         │
│                                            │
│  ┌─────────────────────────────────────┐   │
│  │ Previous │              │   Next    │   │
│  │ Button   │   Save Draft │   Button  │   │
│  └─────────────────────────────────────┘   │
└────────────────────────────────────────────┘
```

### Report Layout
```
┌────────────────────────────────────────────┐
│  Report Title                              │
│  Assessment Date | Employee Name           │
│  Share | Export | Download PDF             │
└────────────────────────────────────────────┘
┌────────────────────────────────────────────┐
│  Executive Summary                         │
│  ┌──────────────────────────────────────┐  │
│  │ Radar Chart - Overall Scores         │  │
│  └──────────────────────────────────────┘  │
└────────────────────────────────────────────┘
┌────────────────────────────────────────────┐
│  Key Findings                              │
│  • Strength 1                              │
│  • Strength 2                              │
│  • Development Area 1                      │
│  • Development Area 2                      │
└────────────────────────────────────────────┘
┌────────────────────────────────────────────┐
│  Detailed Analysis                         │
│  ┌──────────────────────────────────────┐  │
│  │ Scores Table with Visualizations     │  │
│  └──────────────────────────────────────┘  │
└────────────────────────────────────────────┘
```

---

## Responsive Breakpoints

```
Mobile Small: 320px - 479px
Mobile Large: 480px - 767px
Tablet: 768px - 1023px
Desktop: 1024px - 1439px
Large Desktop: 1440px+

Layout Changes:
- Mobile: Single column, full width, compact
- Tablet: 2 columns, adjusted spacing
- Desktop: Multi-column, optimized layout
- Large: Max width constraint (1440px)
```

---

## Icons & Illustrations

### Icon Set
- Use Feather Icons or FontAwesome
- Size: 16px, 20px, 24px, 32px
- Color: Inherit from text color or custom

### Common Icons
```
- Dashboard: grid
- Assessment: clipboard-check
- Reports: file-text
- Settings: settings
- Users: users
- Organization: network
- Upload: upload-cloud
- Download: download
- Export: download
- Share: share-2
- Edit: edit-2
- Delete: trash-2
- Close: x
- Menu: menu
- Search: search
- Filter: filter
```

---

## Animation & Transitions

```
Timing Functions:
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Fast: 150ms
- Medium: 300ms
- Slow: 500ms

Animations:
- Fade In: 200ms
- Slide In: 300ms
- Hover Effects: 150ms
- Load Progress: Smooth (no abrupt changes)

Principles:
- Purposeful: Every animation has a reason
- Fast: Don't slow down workflows
- Smooth: Natural easing curves
- Subtle: Not distracting
```

---

## Dark Mode (Future)

```
Dark Background: #1A1A1A
Dark Surface: #2D2D2D
Dark Border: #404040
Light Text: #E0E0E0
Light Text Secondary: #999999
Accent Colors: Slightly desaturated
```

---

## Accessibility Features

### WCAG 2.1 AA Compliance

1. **Color Contrast**
   - Normal text: 4.5:1 ratio
   - Large text: 3:1 ratio
   - UI components: 3:1 ratio

2. **Focus Indicators**
   - Visible focus ring on all interactive elements
   - Color not sole indicator of state
   - Focus order logical and intuitive

3. **Keyboard Navigation**
   - Tab navigation through all interactive elements
   - Skip to main content link
   - Keyboard accessible dropdowns and modals

4. **Screen Reader Support**
   - Semantic HTML
   - ARIA labels where needed
   - Image alt text
   - Form labels associated with inputs

5. **Text & Language**
   - Clear, simple language
   - Defined terminology
   - Language attribute on HTML
   - RTL support for Arabic

6. **Motion & Animation**
   - Reduced motion support (prefers-reduced-motion)
   - Animations can be disabled
   - No auto-playing content

---

## Internationalization (i18n)

### Language Support
```
- English (en-US)
- Arabic (ar-SA)

Direction:
- English: LTR (Left-to-Right)
- Arabic: RTL (Right-to-Left)

Date Format:
- English: MM/DD/YYYY
- Arabic: DD/MM/YYYY

Number Format:
- English: 1,000.00 (. as decimal, , as thousands)
- Arabic: 1٬000٫00 (Arabic decimal point)

Currency:
- English: $1,000.00 (prefix)
- Arabic: 1٬000٫00 ر.س (suffix)
```

### Text Expansion
- Arabic text typically 15-20% longer than English
- Layout must accommodate expansion
- Line height adjusted for Arabic: 1.8-2.0
- English line height: 1.5-1.6

---

## Form Validation

### Input States
```
Normal State:
- Border: 1px solid #D9D9D9
- Background: White

Focus State:
- Border: 2px solid #0066CC
- Background: White
- Box Shadow: 0 0 0 4px rgba(0, 102, 204, 0.1)

Filled State:
- Border: 1px solid #D9D9D9
- Background: White

Error State:
- Border: 2px solid #DD0000
- Background: #FFF5F5
- Box Shadow: 0 0 0 4px rgba(221, 0, 0, 0.1)
- Error Message: 12px, #DD0000, below input

Success State:
- Border: 2px solid #00AA44
- Background: #F5FAF8
- Success Message: 12px, #00AA44, below input

Disabled State:
- Border: 1px solid #E6E6E6
- Background: #F5F5F5
- Text Color: #999999
- Cursor: not-allowed
```

### Validation Rules
```
Required Fields:
- Marked with red asterisk (*)
- Show error on blur or submit if empty

Email Fields:
- Validate format on blur
- Show error message if invalid

Password Fields:
- Show strength indicator
- Require minimum 8 characters
- At least one uppercase, lowercase, number

Number Fields:
- Accept numbers only
- Show min/max if applicable
- Format as user types
```

---

## Loading States

```
Skeleton Loading:
- Use content skeleton
- Pulse animation
- Placeholder for images
- Duration: 1-3 seconds before showing error

Progress Bar:
- Top of page for page-level loading
- Indeterminate: 3-8 second tasks
- Determinate: >8 second tasks

Loading Spinner:
- Center of content area
- For component-level loading
- 24px or 32px size

Loading Message:
- "Loading..." with i18n
- Updated message for long operations
```

---

## Empty States

```
Empty Assessment:
- Icon (clipboard or similar)
- Heading: "No assessments yet"
- Description: "Start by creating a new assessment"
- Primary CTA: "Create Assessment"

Empty Results:
- Icon (magnifying glass or similar)
- Heading: "No results found"
- Description: "Try adjusting your search filters"
- Secondary CTA: "Clear filters"

Error State:
- Icon (alert triangle)
- Heading: "Something went wrong"
- Description: "Please try again or contact support"
- Primary CTA: "Retry"
- Secondary CTA: "Contact support"
```

---

## Mobile Considerations

### Touch Targets
- Minimum 44x44px (target size)
- 8px minimum spacing between targets
- Larger buttons for important actions

### Mobile Navigation
```
Bottom Navigation:
- 5 primary sections maximum
- Icons + Labels
- Active state highlighted
- Safe area padding on notch devices

Header:
- Sticky top
- Compact height (56px)
- Hamburger menu for additional options
```

### Mobile Forms
```
- Full width inputs
- Large tap targets
- Single column layout
- Native date/time pickers
- Optimized keyboard input types
```

