# Getting Started

## Prerequisites
- Node.js and yarn/bun installed

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```
   yarn
   # or
   bun install
   ```

3. Start the development server:
   ```
   yarn dev
   # or
   bun run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see your application running.

---

## Code Quality: Biome Commands

- **Check code:**
  ```bash
  bun run check
  ```
- **Format code:**
  ```bash
  bun run format
  ```
- **Lint code:**
  ```bash
  bun run lint
  ```

## Creating a New Page

1. Add a new folder under `app/` (e.g., `app/new-page/`).
2. Create a `page.tsx` file inside your folder:
   ```tsx
   export default function NewPage() {
     return <section>New Page Content</section>;
   }
   ```
3. Your page will automatically use the global layout (navbar, wrapper, footer).

## PageWrapper Usage

- The `PageWrapper` layout is now applied globally via `app/layout.tsx`.
- You do **not** need to import or wrap your page components with `PageWrapper`.
- All pages automatically get the consistent layout and blur background.

## Using the BlurElement Component

The `BlurElement` is a customizable, reusable blur effect for backgrounds and highlights.

**Import:**
```tsx
import BlurElement from '@/components/shared/blur-element';
```

**Props:**
- `position`: `'left' | 'top' | 'right' | 'bottom' | 'inset'` (default: `'inset'`)
- `positionValue`: string (default: `'0'`)
- `zIndex`: number (default: `0`)
- `opacity`: number (default: `0.5`)
- `size`: string (default: `'100px'`)
- `blur`: string (default: `'40px'`)
- `className`: string (optional)

**Usage Example:**
```tsx
<BlurElement
  position="left"
  positionValue="10"
  size="200px"
  blur="60px"
  opacity={0.7}
  zIndex={-1}
  className="custom-blur"
/>
```

**How it works:**
- Renders an absolutely positioned, blurred, rounded div with a gradient background.
- Easily place and style background blurs anywhere in your layout.

---

For more details, see the code comments and explore the `components/` folder.

