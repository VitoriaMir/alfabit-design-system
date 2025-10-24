<div align="center">
  <img src="./public/images/logo.svg" alt="Alfabit Design System" width="200" />
  
  # Alfabit Design System
  
  <p>
    <strong>A modern and accessible design system built with React, TypeScript, and Tailwind CSS</strong>
  </p>
  
  <p>
    <a href="https://www.npmjs.com/package/alfabit-ds">
      <img src="https://img.shields.io/npm/v/alfabit-ds.svg" alt="npm version" />
    </a>
    <a href="https://github.com/VitoriaMir/alfabit-design-system/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" />
    </a>
    <a href="https://github.com/VitoriaMir/alfabit-design-system/stargazers">
      <img src="https://img.shields.io/github/stars/VitoriaMir/alfabit-design-system.svg" alt="GitHub stars" />
    </a>
    <a href="https://storybook.js.org/">
      <img src="https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg" alt="Storybook" />
    </a>
  </p>
</div>

---

## 📦 Installation

```bash
# npm
npm install alfabit-ds

# yarn
yarn add alfabit-ds

# pnpm
pnpm add alfabit-ds
```

## 🚀 Quick Start

```tsx
import { Button, Avatar, Typography } from 'alfabit-ds';
import 'alfabit-ds/app/globals.css';

function App() {
  return (
    <div>
      <Typography variant="h1">Welcome to Alfabit</Typography>
      <Avatar size="lg" />
      <Button variant="primary">Get Started</Button>
    </div>
  );
}

export default App;
```

## 📚 Documentation

Visit our [Storybook documentation](https://alfabit-design-system.vercel.app) to explore all components with interactive examples.

## 🧩 Components

### Atoms
- **Avatar** - User profile pictures with different sizes
- **Box** - Flexible container with variants
- **Button** - Interactive buttons with multiple styles
- **Divider** - Visual separators
- **Input** - Form input fields
- **Link** - Styled navigation links
- **Typography** - Text components with semantic variants

### Molecules  
- **Dropdown** - Searchable select component
- **Modal** - Overlay dialogs with animations
- **Notice** - Alert and notification messages
- **Switch** - Toggle switches with custom styling
- **TextBlock** - Rich text content blocks

## 🎨 Design Tokens

Built with a comprehensive design system including:
- **Colors** - Primary, secondary, success, warning, and error palettes
- **Typography** - Consistent font scales and weights
- **Spacing** - Harmonious layout system
- **Shadows** - Depth and elevation
- **Border Radius** - Consistent corner rounding

## 🛠 Technologies

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Headless UI** - Accessible components
- **Heroicons** - Beautiful SVG icons
- **Storybook** - Component documentation
- **Chromatic** - Visual regression testing

## 🌟 Features

- ✅ **Accessible** - WCAG compliant components
- ✅ **TypeScript** - Full type safety
- ✅ **Customizable** - Theme support via CSS variables
- ✅ **Tree-shakeable** - Import only what you need  
- ✅ **SSR Ready** - Server-side rendering support
- ✅ **Modern** - Latest React patterns and hooks

## 📖 Usage Examples

### Button Component
```tsx
import { Button } from 'alfabit-ds';

// Different variants
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="tertiary" disabled>Tertiary Disabled</Button>
```

### Modal Component
```tsx
import { Modal } from 'alfabit-ds';

function MyModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={() => setIsOpen(false)}
      title="Confirmation"
    >
      <p>Are you sure you want to continue?</p>
    </Modal>
  );
}
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Contributors

<a href="https://github.com/VitoriaMir/alfabit-design-system/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=VitoriaMir/alfabit-design-system" />
</a>

---

<div align="center">
  <p>Made with ❤️ by the Alfabit team</p>
  <p>
    <a href="https://alfabit-design-system.vercel.app">Documentation</a> •
    <a href="https://github.com/VitoriaMir/alfabit-design-system/issues">Issues</a> •
    <a href="https://www.npmjs.com/package/alfabit-ds">NPM Package</a>
  </p>
</div>
