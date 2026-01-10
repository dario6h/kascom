# Navbar Component Structure

This folder contains a clean, modular navbar implementation with separate components for better maintainability.

## File Structure

```
navbar/
├── Navbar.jsx                  # Main navbar component (orchestrates everything)
├── NavbarLogo.jsx             # Logo component with gradient background
├── NavbarLink.jsx             # Reusable link component with hover effects
├── LanguageToggle.jsx         # Desktop language toggle button
├── DesktopMenu.jsx            # Desktop menu container
├── MobileControls.jsx         # Mobile controls (language toggle + hamburger)
├── MobileLanguageToggle.jsx   # Mobile language toggle button
├── HamburgerButton.jsx        # Animated hamburger menu button
├── MobileMenuPanel.jsx        # Mobile menu slide-out panel
├── MobileMenuItem.jsx         # Individual mobile menu item (handles dropdowns)
└── index.js                   # Export barrel file
```

## Component Responsibilities

### Navbar.jsx
- Main orchestrator component
- Manages scroll state
- Manages mobile menu open/close state
- Handles language toggle
- Defines menu items
- Determines active route

### NavbarLogo.jsx
- Displays the "K" logo with gradient background
- Shows "KASCOOM" text with gradient
- Links to homepage

### NavbarLink.jsx
- Reusable link component
- Yellow underline animation on hover/active
- Accepts: href, isActive, children

### LanguageToggle.jsx
- Desktop language toggle button (ع)
- Yellow underline on hover

### DesktopMenu.jsx
- Container for desktop menu items
- Displays navigation links
- Includes language toggle
- Hidden on mobile (lg:hidden)

### MobileControls.jsx
- Container for mobile-only controls
- Language toggle button
- Hamburger menu button
- Visible only on mobile

### MobileLanguageToggle.jsx
- Mobile version of language toggle
- Similar styling to desktop but optimized for mobile

### HamburgerButton.jsx
- Animated three-line hamburger icon
- Transforms to X when menu is open
- Smooth rotation and opacity transitions

### MobileMenuPanel.jsx
- Slide-out menu panel from right
- Backdrop overlay
- Manages expanded dropdown state
- Spring animation for smooth entrance/exit

### MobileMenuItem.jsx
- Handles both regular links and dropdown items
- Chevron rotation for dropdowns
- Expandable/collapsible submenu
- Yellow underline on hover/active

## Design System

### Colors
- Background: `neutral-600` at 30% opacity
- Text: White (`text-white`)
- Accent: `#f5a623` (yellow-orange)
- Border: `primary-600` at 30% opacity

### Typography
- Font weight: `font-medium` for links
- Font weight: `font-bold` for logo

### Animations
- Underline: 300ms transition
- Hamburger: 300ms rotation/opacity
- Mobile panel: Spring animation (damping: 25, stiffness: 200)
- Dropdown: 200ms height/opacity transition

## Usage

The navbar is automatically imported and used in the main layout. All functionality remains the same as before the refactor.

```jsx
import Navbar from '@/components/layout/Navbar';

// In your layout
<Navbar />
```

## Benefits of This Structure

1. **Separation of Concerns**: Each component has a single responsibility
2. **Reusability**: Components like NavbarLink can be reused
3. **Maintainability**: Easy to find and update specific features
4. **Testability**: Small components are easier to test
5. **Readability**: Clean, well-organized code
6. **Scalability**: Easy to add new features or modify existing ones
