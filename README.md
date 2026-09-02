# SCF Another World Art

**SCF Another World Art** is a gallery for artwork from **Spirit Connect** and **Dragon Drive**. It collects concept art, environments, characters, and restored card artwork.

**Live site:** [https://fulongli.github.io/SCF-Another-World-Art/](https://fulongli.github.io/SCF-Another-World-Art/)

This is a static gallery: open `index.html` to browse. It supports a responsive grid, click-to-focus, keyboard navigation, and deep links with `#piece-id`. Gallery entries are listed in `gallery-data.js`; original artwork lives under `images/`, with small grid previews under `images/thumbnails/`.

## Local preview

No build step. Open `index.html` directly, or serve the repository root:

```bash
npx serve .
```

## Adding artwork

1. Place images in the appropriate collection under `images/` (webp, png, or svg recommended).
2. Add an entry to `gallery-data.js`: unique `id` (for the URL hash), `w` and `h` (pixel dimensions, used for aspect and layout), `prompt` (caption), and `src` (path).

Optional **`thumb`**: thumbnail for the grid; if omitted, `src` is used for both the thumbnail and full view. Dragon Drive entries are generated from the `dragonDriveFiles` filename list.

## Deploy

Publish the folder that contains `index.html` and `images/` on any static host (e.g. GitHub Pages). For social previews, set `og:image` in `index.html` to an **absolute** image URL on your live site.

## Controls

- Click a tile to enter focus mode; **Escape** or click outside the side regions to return to the grid.
- **Arrow keys** move between pieces in focus mode.
- Open `your-url#piece-id` to jump to a specific entry.

Licensed under the [MIT License](LICENSE).
