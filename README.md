# @kurlclub/ui-components

A modern, accessible React component library built with TypeScript, Tailwind CSS, and Radix UI primitives.

## Prerequisites

- Node.js 18+
- npm or yarn

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/kurlclub/kurlclub-ui-components.git
cd kurlclub-ui-components
```

2. Install dependencies:

```bash
npm install
```

3. Start Storybook:

```bash
npm run storybook
```

4. Build the library:

```bash
npm run build:lib
```

5. Run tests:

```bash
npm test
```

## Usage Instructions

### Installation

To install the `@kurlclub/ui-components` package:

1. Authenticate to GitHub Package Registry:

```bash
npm config set //npm.pkg.github.com/:_authToken=<your_github_token>
```

Or using the config command:

```bash
npm config set @kurlclub:registry https://npm.pkg.github.com
```

2. Set the registry:

```bash
echo @kurlclub:registry=https://npm.pkg.github.com >> .npmrc
```

3. Install the package:

```bash
npm install @kurlclub/ui-components
```

### Import Styles

Import the CSS file in your app's entry point:

```tsx
// main.tsx or App.tsx
import '@kurlclub/ui-components/style.css';
```

### Tailwind Configuration

Update your `tailwind.config.js` file:

```javascript
import { theme, themePlugin } from '@kurlclub/ui-components';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      ...theme,
    },
  },
  plugins: [themePlugin],
};
```

### Basic Usage

```tsx
import { Button } from '@kurlclub/ui-components';

function App() {
  return (
    <Button variant="default" size="lg" onClick={() => alert('Clicked!')}>
      Click me
    </Button>
  );
}
```

## Troubleshooting IntelliSense

If auto-suggestions are not working in VS Code when importing components:

### Enable Auto-Imports Globally

1. Open VS Code Settings (`Cmd+,` or `Ctrl+,`)
2. Search for: `auto imports`
3. Enable these settings:
   - ✅ **TypeScript › Suggest: Auto Imports**
   - ✅ **JavaScript › Suggest: Auto Imports**
4. Search for: `include package json`
5. Set **TypeScript › Preferences: Include Package Json Auto Imports** to `on`

### Restart TypeScript Server

1. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
2. Type: "TypeScript: Restart TS Server"
3. Press Enter

### Verify Installation

Check that the package is installed correctly:

```bash
ls -la node_modules/@kurlclub/ui-components/dist/
cat node_modules/@kurlclub/ui-components/package.json | grep "types"
```

You should see `"types": "./dist/index.d.ts"`

If issues persist, restart VS Code completely.

## License

MIT © Kurl Club
