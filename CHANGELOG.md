# Changelog

## [1.0.0] - 2024-12-06

### 🎉 Initial Release

First stable release of @kurlclub/ui-components!

### ✨ Features

- **50+ Production-Ready Components**
  - Form components: Input, Select, MultiSelect, Password, Textarea, Switch, DatePicker
  - Layout components: AppLayout, AppHeader, AppSidebar
  - Data components: DataTable with sorting, filtering, and pagination
  - UI components: Button, Badge, Dialog, Popover, Command, Breadcrumbs
  - Advanced components: RichTextEditor, ProfileUploader, FileUploader

- **Full Next.js Support**
  - ✅ Compatible with Next.js 13+ App Router
  - ✅ Compatible with Next.js Pages Router
  - ✅ All components properly marked with 'use client' where needed
  - ✅ Server Component support for static components

- **TypeScript First**
  - Full TypeScript support with exported types
  - Proper type declarations for all components
  - IntelliSense support in IDEs

- **Tailwind CSS v4**
  - Built with latest Tailwind CSS
  - Custom theme with Kurl Club branding
  - Responsive design utilities
  - Dark mode ready

- **Accessibility**
  - Built on Radix UI primitives
  - ARIA labels and roles
  - Keyboard navigation support
  - Screen reader friendly

### 🔧 Technical Details

- **Bundle Size**
  - ES Module: 225.62 kB (59.46 kB gzipped)
  - CommonJS: 155.34 kB (49.15 kB gzipped)
  - CSS: 89.19 kB (14.74 kB gzipped)

- **Dependencies**
  - React 18+ / 19+ support
  - Radix UI primitives
  - TanStack Table for data tables
  - Tiptap for rich text editing
  - date-fns for date manipulation

### 📦 Package Exports

```json
{
  ".": {
    "types": "./dist/index.d.ts",
    "import": "./dist/index.es.js",
    "require": "./dist/index.js"
  },
  "./style.css": "./dist/style.css"
}
```

### 🐛 Bug Fixes

- Fixed TypeScript declaration issues in Select component
- Fixed DatePicker type compatibility with range and single modes
- Added missing 'use client' directives to Input, Select, and FileUploader

### 📚 Documentation

- Comprehensive README with setup instructions
- Next.js compatibility guide
- Storybook documentation for all components
- TypeScript examples

### 🎨 Theme

- Custom color palette with Kurl Club branding
- Primary green (#d3f702) and blue (#11141c) colors
- Secondary colors for various UI states
- Semantic colors for alerts and notifications

### 🔐 Security

- No known vulnerabilities
- Peer dependencies properly configured
- External dependencies properly marked

---

For upgrade instructions and breaking changes in future versions, see this file.
