# Business Magician AI UI

A customized fork of [shadcn/ui](https://github.com/shadcn-ui/ui) - Accessible and customizable components built with Radix UI and Tailwind CSS.

> **Credits**: This project is based on the excellent work by [shadcn](https://twitter.com/shadcn) and the shadcn/ui project. All core components and architecture come from the original [shadcn/ui repository](https://github.com/shadcn-ui/ui).

![hero](apps/www/public/og.jpg)

## 🎨 Built With

### Tailwind CSS
This project is built with **Tailwind CSS** - a utility-first CSS framework for rapidly building custom user interfaces.

**Key Features:**
- Utility-first CSS approach for flexible styling
- Customizable design system with CSS variables
- Dark mode support out of the box
- Responsive design utilities
- Animation support with `tailwindcss-animate`

**Configuration:**
- Main config: `tailwind.config.cjs`
- PostCSS setup: `postcss.config.cjs`
- Custom color system using HSL CSS variables
- Configurable border radius with CSS variables

### shadcn/ui Components
Pre-built, accessible components based on:
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible component primitives
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [class-variance-authority](https://cva.style/) - Component variant management
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) - Conflict-free Tailwind classes

## ♿ Accessibility

This project prioritizes accessibility to ensure all users can effectively use the interface.

### Core Accessibility Features

**Keyboard Navigation:**
- All interactive elements are keyboard accessible
- Proper focus management and visible focus indicators
- Logical tab order throughout the interface
- Keyboard shortcuts where appropriate

**Screen Reader Support:**
- Semantic HTML structure
- ARIA labels and descriptions where needed
- Proper heading hierarchy
- Alt text for images and icons
- Live regions for dynamic content updates

**Visual Accessibility:**
- High contrast ratios meeting WCAG AA standards
- Resizable text without loss of functionality
- Dark mode support to reduce eye strain
- Color is never the only means of conveying information
- Customizable color themes

### Deaf and Hard of Hearing Accessibility

**Visual Communication:**
- All audio content has visual alternatives
- Clear visual feedback for all actions
- Icons and visual indicators supplement text
- No reliance on audio-only alerts or notifications
- Visual progress indicators for time-based operations

**Captions and Transcripts:**
- Video content includes captions (when applicable)
- Audio content includes transcripts (when applicable)
- Visual alerts for system notifications
- Clear visual state changes

**Best Practices:**
- Use of visual cues alongside any audio
- Toast notifications with sufficient display time
- Visual loading states and progress indicators
- Clear error messages with visual indicators
- Confirmation dialogs with clear visual hierarchy

### Radix UI Accessibility

Components from Radix UI provide built-in accessibility features:
- WAI-ARIA compliant patterns
- Keyboard navigation support
- Focus management
- Screen reader announcements
- Proper semantic markup

### Testing for Accessibility

When contributing, please ensure:
- Test with keyboard-only navigation
- Verify screen reader compatibility (NVDA, JAWS, VoiceOver)
- Check color contrast ratios
- Test responsive behavior at different zoom levels
- Validate HTML semantics

## 📚 Documentation

Visit http://ui.shadcn.com/docs to view the original shadcn/ui documentation.

### Quick Start

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run development server:**
   ```bash
   pnpm dev
   ```

3. **Build for production:**
   ```bash
   pnpm build
   ```

### Tailwind CSS Usage

The project uses Tailwind CSS v3.4.6 with custom configuration:

```js
// Example component with Tailwind classes
<button className="bg-primary text-primary-foreground hover:bg-primary/90 
                   rounded-md px-4 py-2 transition-colors">
  Click me
</button>
```

**Custom CSS Variables:**
- `--background`, `--foreground` - Base colors
- `--primary`, `--primary-foreground` - Primary theme colors
- `--secondary`, `--secondary-foreground` - Secondary theme colors
- `--muted`, `--accent`, `--destructive` - Semantic colors
- `--radius` - Border radius base value

## 🤝 Contributing

Please read the [contributing guide](/CONTRIBUTING.md).

When contributing, please consider:
- Maintain accessibility standards (WCAG 2.1 AA minimum)
- Test with keyboard navigation
- Verify screen reader compatibility
- Ensure color contrast meets requirements
- Document any accessibility features or considerations

## 📄 License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).

## 🙏 Acknowledgments

- **[shadcn](https://twitter.com/shadcn)** - Creator of shadcn/ui
- **[shadcn/ui](https://github.com/shadcn-ui/ui)** - Original project
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Vercel](https://vercel.com/)** - Hosting and deployment platform

---

**Note:** This is a customized fork. For the original shadcn/ui project, please visit [https://github.com/shadcn-ui/ui](https://github.com/shadcn-ui/ui)
