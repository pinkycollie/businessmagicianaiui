# Tailwind CSS Configuration and Usage

This document provides detailed information about Tailwind CSS setup and usage in Business Magician AI UI.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Configuration](#configuration)
- [Theme Customization](#theme-customization)
- [Using Components](#using-components)
- [Dark Mode](#dark-mode)
- [Custom Utilities](#custom-utilities)
- [Best Practices](#best-practices)

## Overview

Business Magician AI UI uses **Tailwind CSS v3.4.6** as its primary styling framework. Tailwind is a utility-first CSS framework that allows you to build custom designs without leaving your HTML.

### Why Tailwind CSS?

- **Utility-First**: Apply styles directly in your markup
- **Responsive**: Mobile-first responsive design built-in
- **Customizable**: Extensive configuration options
- **Performance**: Optimized CSS output with PurgeCSS
- **Dark Mode**: First-class dark mode support
- **Developer Experience**: IntelliSense support in VS Code

## Installation

The project comes with Tailwind CSS pre-configured. If you're setting up a new project:

```bash
pnpm add -D tailwindcss postcss autoprefixer
pnpm add tailwindcss-animate
```

## Configuration

### Main Configuration File

The Tailwind configuration is located at `tailwind.config.cjs`:

```javascript
const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      // Custom configuration
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### PostCSS Configuration

Located at `postcss.config.cjs`:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Content Configuration

Tailwind scans these paths for class names:

```javascript
content: [
  "app/**/*.{ts,tsx}",
  "components/**/*.{ts,tsx}",
  "registry/**/*.{ts,tsx}", // Component registry
]
```

## Theme Customization

### CSS Variables

The project uses CSS variables for theming, defined in your global CSS:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;
    
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    
    --radius: 0.5rem;
  }
  
  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    
    /* ... dark mode variables */
  }
}
```

### Using Theme Colors

```tsx
// Using theme colors in components
<div className="bg-background text-foreground">
  <h1 className="text-primary">Heading</h1>
  <p className="text-muted-foreground">Secondary text</p>
  <button className="bg-primary text-primary-foreground">
    Button
  </button>
</div>
```

### Custom Colors

Extend the color palette in `tailwind.config.cjs`:

```javascript
theme: {
  extend: {
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      // ... more colors
    },
  },
}
```

### Border Radius

Custom border radius scale:

```javascript
borderRadius: {
  xl: "calc(var(--radius) + 4px)",
  lg: "var(--radius)",
  md: "calc(var(--radius) - 2px)",
  sm: "calc(var(--radius) - 4px)",
}
```

Usage:

```tsx
<div className="rounded-lg"> {/* Uses var(--radius) */}
<div className="rounded-md"> {/* Slightly smaller */}
```

### Typography

Custom font families:

```javascript
fontFamily: {
  sans: ["var(--font-geist-sans)", ...fontFamily.sans],
  mono: ["var(--font-geist-mono)", ...fontFamily.mono],
}
```

## Using Components

### Basic Component Example

```tsx
import { cn } from "@/lib/utils"

interface ButtonProps {
  variant?: "default" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}

function Button({ variant = "default", size = "md", className, ...props }) {
  return (
    <button
      className={cn(
        // Base styles
        "inline-flex items-center justify-center rounded-md font-medium",
        "transition-colors focus-visible:outline-none focus-visible:ring-2",
        "disabled:pointer-events-none disabled:opacity-50",
        
        // Variant styles
        variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        variant === "outline" && "border border-input bg-background hover:bg-accent",
        
        // Size styles
        size === "sm" && "h-9 px-3 text-sm",
        size === "md" && "h-10 px-4",
        size === "lg" && "h-11 px-8 text-lg",
        
        className
      )}
      {...props}
    />
  )
}
```

### Utility Function: cn()

The `cn()` function combines class names and handles conflicts:

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Benefits:
- Merges Tailwind classes intelligently
- Removes conflicting classes (e.g., `px-2 px-4` → `px-4`)
- Handles conditional classes

### Component Composition

```tsx
// Composing components with Tailwind
<Card className="w-full max-w-md">
  <CardHeader className="space-y-1">
    <CardTitle className="text-2xl">Sign In</CardTitle>
    <CardDescription className="text-sm text-muted-foreground">
      Enter your credentials below
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <Input 
      placeholder="Email" 
      className="bg-background"
    />
    <Button className="w-full">
      Sign In
    </Button>
  </CardContent>
</Card>
```

## Dark Mode

### Setup

Dark mode is configured with the `class` strategy:

```javascript
// tailwind.config.cjs
module.exports = {
  darkMode: ["class"],
  // ...
}
```

### Usage with next-themes

```tsx
// app/layout.tsx
import { ThemeProvider } from "next-themes"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### Theme Toggle Component

```tsx
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
```

### Dark Mode Classes

Use the `dark:` modifier for dark mode styles:

```tsx
<div className="bg-white dark:bg-slate-900">
  <h1 className="text-slate-900 dark:text-white">
    Adapts to theme
  </h1>
  <p className="text-slate-600 dark:text-slate-400">
    Secondary text
  </p>
</div>
```

## Animations

### tailwindcss-animate Plugin

The project uses `tailwindcss-animate` for common animations:

```javascript
// tailwind.config.cjs
theme: {
  extend: {
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
    },
  },
}
```

### Using Animations

```tsx
// Accordion animation
<div className="animate-accordion-down">
  Content
</div>

// Fade in
<div className="animate-in fade-in duration-300">
  Fading in
</div>

// Slide in from bottom
<div className="animate-in slide-in-from-bottom-4 duration-500">
  Sliding in
</div>
```

## Responsive Design

### Breakpoints

Default Tailwind breakpoints:

```javascript
sm: '640px',   // Small devices
md: '768px',   // Medium devices
lg: '1024px',  // Large devices
xl: '1280px',  // Extra large devices
2xl: '1536px', // 2X large devices
```

### Responsive Classes

```tsx
<div className="
  w-full           /* Full width on mobile */
  md:w-1/2         /* Half width on tablets */
  lg:w-1/3         /* Third width on desktop */
">
  <h1 className="
    text-2xl       /* 2xl on mobile */
    md:text-3xl    /* 3xl on tablets */
    lg:text-4xl    /* 4xl on desktop */
  ">
    Responsive Text
  </h1>
</div>
```

### Mobile-First Approach

Tailwind uses a mobile-first approach. Base styles apply to all sizes, then use breakpoint prefixes for larger screens:

```tsx
// ✅ Good: Mobile first
<div className="p-4 md:p-6 lg:p-8">

// ❌ Avoid: Desktop first
<div className="p-8 md:p-6 sm:p-4">
```

## Best Practices

### 1. Use the cn() Utility

```tsx
// ✅ Good
<div className={cn("base-class", condition && "conditional-class")} />

// ❌ Avoid
<div className={`base-class ${condition ? "conditional-class" : ""}`} />
```

### 2. Extract Reusable Components

```tsx
// ✅ Good: Create a reusable component
function Card({ children, className }) {
  return (
    <div className={cn("rounded-lg border bg-card p-6", className)}>
      {children}
    </div>
  )
}

// ❌ Avoid: Repeating classes
<div className="rounded-lg border bg-card p-6">...</div>
<div className="rounded-lg border bg-card p-6">...</div>
```

### 3. Use Semantic Color Names

```tsx
// ✅ Good: Semantic colors
<button className="bg-primary text-primary-foreground">

// ❌ Avoid: Hard-coded colors
<button className="bg-blue-600 text-white">
```

### 4. Leverage Theme Variables

```tsx
// ✅ Good: Uses theme variable
<div className="text-foreground">

// ❌ Avoid: Hard-coded color
<div className="text-gray-900 dark:text-gray-100">
```

### 5. Group Related Classes

```tsx
// ✅ Good: Grouped logically
<button className={cn(
  // Layout
  "flex items-center gap-2",
  // Styling
  "rounded-md bg-primary text-primary-foreground",
  // States
  "hover:bg-primary/90 focus:ring-2",
  // Responsive
  "px-3 py-2 md:px-4 md:py-2.5"
)} />
```

### 6. Avoid Arbitrary Values When Possible

```tsx
// ✅ Good: Use design tokens
<div className="w-64 h-40 p-4">

// ⚠️ Use sparingly
<div className="w-[267px] h-[163px] p-[17px]">
```

### 7. Use Container Classes

```tsx
// ✅ Good: Consistent container
<div className="container mx-auto px-4 max-w-7xl">
  Content
</div>
```

## Custom Utilities

### Adding Custom Utilities

Extend Tailwind with custom utilities:

```javascript
// tailwind.config.cjs
module.exports = {
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      fontSize: {
        'xxs': '0.625rem',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    }
  ],
}
```

## IDE Setup

### VS Code Extensions

Install these extensions for the best experience:

1. **Tailwind CSS IntelliSense**
   - Auto-complete class names
   - Syntax highlighting
   - Linting

2. **PostCSS Language Support**
   - Syntax highlighting for PostCSS

### VS Code Settings

```json
{
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ],
  "editor.quickSuggestions": {
    "strings": true
  }
}
```

## Resources

### Official Documentation

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)
- [Tailwind Play (Playground)](https://play.tailwindcss.com/)

### Tools

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Tailwind Shades Generator](https://www.tints.dev/)
- [Tailwind Color Palette Generator](https://uicolors.app/)

### Community

- [Tailwind CSS Discord](https://tailwindcss.com/discord)
- [GitHub Discussions](https://github.com/tailwindlabs/tailwindcss/discussions)

---

For more information about using Tailwind CSS in this project, refer to the component examples in the `registry` directory.
