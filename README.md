# AnotherWorldArt

**AnotherWorldArt** is a gallery for **Another World**, a game built on **Spirit Connect** technology. It collects **AI-generated concept art**—environments, characters, and visual exploration—that supports the look and world of *Another World*.

This is a single static page: open `index.html` to browse. The gallery supports a responsive grid, click-to-focus, keyboard navigation, and deep links with `#piece-id`. By default only the logo at `images/logo_svg.svg` is listed; add more files under `images/` and register them in the `data` array.

## Local preview

No build step. Open `index.html` directly, or serve the repository root:

```bash
npx serve .
```

## Adding artwork

1. Place images in `images/` (webp, png, or svg recommended).
2. Append an object to the `data` array in `index.html`: unique `id` (for the URL hash), `w` and `h` (pixel dimensions, used for aspect and layout), `prompt` (caption), and `src` (path).

Optional **`thumb`**: thumbnail for the grid; if omitted, `src` is used for both thumb and full view.

## Deploy

Publish the folder that contains `index.html` and `images/` on any static host (e.g. GitHub Pages). For social previews, set `og:image` in `index.html` to an **absolute** image URL on your live site.

## Controls

- Click a tile to enter focus mode; **Escape** or click outside the side regions to return to the grid.
- **Arrow keys** move between pieces in focus mode.
- Open `your-url#piece-id` to jump to a specific entry.

Licensed under the [MIT License](LICENSE).
