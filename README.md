# @kurlclub/ui-components

A modern, accessible React component library built with TypeScript, Tailwind CSS, and Radix UI primitives.

[![npm version](https://img.shields.io/npm/v/@kurlclub/ui-components.svg)](https://www.npmjs.com/package/@kurlclub/ui-components)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Features

- 🎨 **Tailwind CSS** - Utility-first styling with custom theme support
- ♿ **Accessible** - Built on Radix UI primitives for WCAG compliance
- 📦 **Tree-shakeable** - Import only what you need
- 🔷 **TypeScript** - Full type safety and IntelliSense support
- 📚 **Storybook** - Interactive component documentation
- ✅ **Tested** - Comprehensive test coverage with Vitest
- 🎭 **Variants** - Multiple style variants using CVA (Class Variance Authority)

## Installation

```bash
npm install @kurlclub/ui-components
```

### Peer Dependencies

Ensure you have the following peer dependencies installed:

```bash
npm install react react-dom
```

## Usage

### Basic Import

```tsx
import { Button } from '@kurlclub/ui-components';

function App() {
  return (
    <Button variant="default" size="lg">
      Click me
    </Button>
  );
}
```

### Import Styles

Import the CSS file in your app's entry point:

```tsx
// main.tsx or App.tsx
import '@kurlclub/ui-components/style.css';
```

### TypeScript Support

Full TypeScript support with auto-completion and type checking:

```tsx
import { Button, type ButtonProps } from '@kurlclub/ui-components';

const props: ButtonProps = {
  variant: 'default',
  size: 'lg',
  onClick: () => console.log('Clicked!'),
};

<Button {...props}>Click me</Button>
```

## Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@kurlclub/ui-components';

// Variants
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="outlinePrimary">Outline Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>

// With Icons
import { ChevronRight } from 'lucide-react';

<Button Icon={ChevronRight} iconPlacement="right">
  Next
</Button>
```

#### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'destructive' \| 'outline' \| 'outlinePrimary' \| 'secondary' \| 'ghost' \| 'link' \| 'expandIcon'` | `'default'` | Visual style variant |
| `size` | `'default' \| 'sm' \| 'lg' \| 'icon'` | `'default'` | Button size |
| `asChild` | `boolean` | `false` | Render as child element (Radix Slot) |
| `Icon` | `React.ElementType` | - | Icon component to display |
| `iconPlacement` | `'left' \| 'right'` | - | Icon position |

## Theme Customization

### Using the Theme Plugin

```tsx
import { theme, themePlugin } from '@kurlclub/ui-components';

// Access theme colors
console.log(theme.colors.primary);

// Use in Tailwind config
// tailwind.config.js
export default {
  plugins: [themePlugin],
};
```

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/kurlclub/kurlclub-ui-components.git

# Install dependencies
npm install

# Start Storybook
npm run storybook

# Run tests
npm test

# Build library
npm run build:lib
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build:lib` | Build library for production |
| `npm run storybook` | Start Storybook on port 6006 |
| `npm run build-storybook` | Build Storybook for deployment |
| `npm test` | Run tests with Vitest |
| `npm run lint` | Lint code with ESLint |
| `npm run format` | Format code with Prettier |
| `npm run check-types` | Type check with TypeScript |

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b KC-123`
3. Make your changes
4. Run tests: `npm test`
5. Commit with conventional format: `feat(FE): [KC-123] add new component`
6. Push and create a Pull Request

### Commit Convention

```
<type>(<scope>): [KC-<number>] <description>

Types: feat, fix, style, refactor, test, chore, docs
Scopes: FE, BE, auth, db, other
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT © Kurl Club

## Links

- [GitHub Repository](https://github.com/kurlclub/kurlclub-ui-components)
- [Storybook Documentation](https://your-storybook-url.com)
- [Report Issues](https://github.com/kurlclub/kurlclub-ui-components/issues)

## Acknowledgments

Built with:
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Vite](https://vitejs.dev/)
- [Storybook](https://storybook.js.org/)
