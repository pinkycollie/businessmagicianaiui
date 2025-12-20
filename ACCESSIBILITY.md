# Accessibility Guidelines

This document outlines the accessibility features and best practices for Business Magician AI UI.

## Table of Contents

- [Overview](#overview)
- [WCAG Compliance](#wcag-compliance)
- [Keyboard Navigation](#keyboard-navigation)
- [Screen Reader Support](#screen-reader-support)
- [Visual Accessibility](#visual-accessibility)
- [Deaf and Hard of Hearing Accessibility](#deaf-and-hard-of-hearing-accessibility)
- [Component-Specific Guidelines](#component-specific-guidelines)
- [Testing](#testing)
- [Resources](#resources)

## Overview

Business Magician AI UI is committed to providing an accessible experience for all users, including those with disabilities. We follow Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards and implement best practices for inclusive design.

## WCAG Compliance

### Level AA Requirements

Our components aim to meet WCAG 2.1 Level AA standards:

- **Perceivable**: Information and UI components are presentable to users in ways they can perceive
- **Operable**: UI components and navigation are operable
- **Understandable**: Information and UI operation are understandable
- **Robust**: Content can be interpreted reliably by a wide variety of user agents

### Key Principles

1. **Alternative Text**: All non-text content has text alternatives
2. **Keyboard Accessible**: All functionality is available from a keyboard
3. **Distinguishable**: Content is easy to see and hear
4. **Navigable**: Users can navigate, find content, and determine their location
5. **Input Assistance**: Users are helped to avoid and correct mistakes

## Keyboard Navigation

### Essential Keyboard Support

All interactive elements support standard keyboard interactions:

| Action | Key |
|--------|-----|
| Navigate forward | `Tab` |
| Navigate backward | `Shift + Tab` |
| Activate/Select | `Enter` or `Space` |
| Close/Cancel | `Escape` |
| Navigate lists | `Arrow keys` |
| Navigate to first item | `Home` |
| Navigate to last item | `End` |

### Focus Management

- Visible focus indicators on all interactive elements
- Logical tab order following visual layout
- Focus trap in modal dialogs and overlays
- Focus restoration when closing overlays
- Skip links for keyboard users to bypass repetitive content

### Implementation Example

```tsx
// Proper keyboard support in a custom component
<button
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleAction()
    }
  }}
  className="focus:outline-none focus:ring-2 focus:ring-primary"
>
  Action
</button>
```

## Screen Reader Support

### Semantic HTML

Use semantic HTML elements for proper structure:

```tsx
// Good: Semantic HTML
<nav>
  <ul>
    <li><a href="/home">Home</a></li>
  </ul>
</nav>

// Avoid: Non-semantic divs
<div className="nav">
  <div className="nav-item" onClick={...}>Home</div>
</div>
```

### ARIA Attributes

Use ARIA attributes when semantic HTML is insufficient:

```tsx
// Button with loading state
<button 
  aria-label="Save changes"
  aria-busy={isLoading}
  disabled={isLoading}
>
  {isLoading ? 'Saving...' : 'Save'}
</button>

// Expandable section
<button
  aria-expanded={isOpen}
  aria-controls="content-panel"
>
  Toggle Content
</button>
<div id="content-panel" hidden={!isOpen}>
  Content here
</div>
```

### Live Regions

Announce dynamic content changes:

```tsx
// Status messages
<div role="status" aria-live="polite">
  {statusMessage}
</div>

// Urgent alerts
<div role="alert" aria-live="assertive">
  {errorMessage}
</div>
```

### Headings and Structure

- Use proper heading hierarchy (h1 → h2 → h3)
- Don't skip heading levels
- Use landmarks (main, nav, aside, footer)
- Provide descriptive labels for regions

## Visual Accessibility

### Color Contrast

Maintain WCAG AA contrast ratios:

- **Normal text**: 4.5:1 minimum
- **Large text** (18pt+ or 14pt+ bold): 3:1 minimum
- **Interactive elements**: 3:1 minimum against adjacent colors

```css
/* Good contrast examples */
.text-primary {
  color: hsl(222.2 47.4% 11.2%); /* Dark text */
  background: hsl(0 0% 100%); /* White background */
  /* Contrast ratio: 16.1:1 */
}

.text-muted {
  color: hsl(215.4 16.3% 46.9%); /* Muted text */
  /* Ensure sufficient contrast with background */
}
```

### Color Independence

Never rely on color alone to convey information:

```tsx
// Good: Icon + color
<div className="text-destructive">
  <AlertCircle className="inline mr-1" />
  Error: Please fix the issues
</div>

// Avoid: Color only
<div className="text-destructive">
  Please fix the issues
</div>
```

### Text Sizing

- Use relative units (rem, em) for font sizes
- Support browser zoom up to 200%
- Maintain readability at different zoom levels
- Minimum text size: 16px (1rem)

### Dark Mode

Support for users with light sensitivity:

```tsx
// Using next-themes for dark mode
<ThemeProvider attribute="class" defaultTheme="system">
  <Component />
</ThemeProvider>

// Components adapt automatically
<div className="bg-background text-foreground">
  Content adapts to theme
</div>
```

## Deaf and Hard of Hearing Accessibility

### Visual Communication First

Design with visual communication as the primary means:

1. **No Audio-Only Content**: All information conveyed through audio must have a visual alternative
2. **Visual Feedback**: Provide clear visual feedback for all user actions
3. **Visual Alerts**: Use toast notifications, badges, and visual indicators instead of audio alerts

### Implementation Guidelines

#### Notifications and Alerts

```tsx
// Good: Visual notification with icon and text
import { toast } from 'sonner'

toast.success('File uploaded successfully', {
  icon: <CheckCircle />,
  duration: 5000, // Sufficient time to read
})

// Good: Visual loading state
<Button disabled={isLoading}>
  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
  {isLoading ? 'Uploading...' : 'Upload File'}
</Button>
```

#### Video Content

When including video content:

```tsx
// Video with captions
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <track
    kind="captions"
    src="captions.vtt"
    srclang="en"
    label="English"
    default
  />
  Your browser doesn't support video.
</video>
```

#### Time-Based Content

```tsx
// Progress indicator for timed actions
<Progress value={progress} className="w-full" />
<p className="text-sm text-muted-foreground">
  {progress}% complete
</p>

// Countdown timer with visual display
<div className="text-2xl font-bold">
  {minutes}:{seconds}
</div>
```

#### Form Validation

```tsx
// Visual error indicators
<Input
  type="email"
  aria-invalid={hasError}
  className={cn(hasError && "border-destructive")}
/>
{hasError && (
  <p className="text-sm text-destructive flex items-center gap-1">
    <AlertCircle className="h-4 w-4" />
    Invalid email address
  </p>
)}
```

### Best Practices

1. **Icons with Text**: Always pair icons with descriptive text
2. **Visual State Changes**: Make state changes clearly visible
3. **No Blinking Content**: Avoid blinking or flashing (can cause seizures)
4. **Sufficient Duration**: Display messages long enough to read (minimum 5 seconds)
5. **Clear Visual Hierarchy**: Use size, weight, and spacing to show importance

## Component-Specific Guidelines

### Buttons

```tsx
// Accessible button
<Button
  aria-label="Add new item"
  disabled={isDisabled}
>
  <Plus className="mr-2 h-4 w-4" />
  Add Item
</Button>
```

### Dialogs/Modals

```tsx
// Accessible dialog
<Dialog>
  <DialogContent aria-describedby="dialog-description">
    <DialogHeader>
      <DialogTitle>Confirm Action</DialogTitle>
      <DialogDescription id="dialog-description">
        Are you sure you want to delete this item?
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Forms

```tsx
// Accessible form field
<div>
  <Label htmlFor="email">Email Address</Label>
  <Input
    id="email"
    type="email"
    aria-describedby="email-description"
    required
  />
  <p id="email-description" className="text-sm text-muted-foreground">
    We'll never share your email.
  </p>
</div>
```

### Tables

```tsx
// Accessible data table
<Table>
  <TableCaption>User list</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead scope="col">Name</TableHead>
      <TableHead scope="col">Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

## Testing

### Automated Testing

Use automated tools as a first pass:

- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [pa11y](https://pa11y.org/)

### Manual Testing

#### Keyboard Navigation

1. Disconnect your mouse
2. Use only `Tab`, `Shift+Tab`, `Enter`, `Space`, `Escape`, and arrow keys
3. Verify all functionality is accessible
4. Check focus indicators are visible

#### Screen Reader Testing

Test with major screen readers:

- **Windows**: NVDA (free), JAWS (paid)
- **macOS**: VoiceOver (built-in)
- **Linux**: Orca (free)
- **Mobile**: TalkBack (Android), VoiceOver (iOS)

#### Visual Testing

1. Test with browser zoom at 200%
2. Test in dark mode
3. Use browser DevTools to simulate color blindness
4. Verify color contrast ratios

#### Deaf/Hard of Hearing Testing

1. Mute all audio
2. Disable all sound notifications
3. Verify all information is conveyed visually
4. Check video captions work correctly
5. Verify visual alerts are clear and timely

### Testing Checklist

- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators are visible
- [ ] Screen reader announces all content correctly
- [ ] Color contrast meets WCAG AA standards
- [ ] No information conveyed by color alone
- [ ] Forms have clear labels and error messages
- [ ] Dialogs trap focus and announce correctly
- [ ] All images have alt text
- [ ] Headings follow proper hierarchy
- [ ] Page works at 200% zoom
- [ ] Dark mode works correctly
- [ ] All audio/video has text alternatives
- [ ] Visual feedback for all user actions
- [ ] Notifications are visible and readable

## Resources

### Standards and Guidelines

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Inclusive Design Principles](https://inclusivedesignprinciples.org/)

### Tools

- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Accessible Color Generator](https://www.learnui.design/tools/accessible-color-generator.html)
- [ARIA Documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)

### Learning Resources

- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)
- [Deque University](https://dequeuniversity.com/)
- [Google Web Fundamentals - Accessibility](https://developers.google.com/web/fundamentals/accessibility)

### Component Libraries

- [Radix UI Accessibility](https://www.radix-ui.com/primitives/docs/overview/accessibility)
- [React ARIA](https://react-spectrum.adobe.com/react-aria/)

---

## Contributing

When contributing to this project, please ensure your changes:

1. Meet WCAG 2.1 Level AA standards
2. Are keyboard accessible
3. Work with screen readers
4. Have sufficient color contrast
5. Provide visual alternatives for audio content
6. Include appropriate ARIA attributes
7. Pass automated accessibility tests

For questions or concerns about accessibility, please open an issue on GitHub.
