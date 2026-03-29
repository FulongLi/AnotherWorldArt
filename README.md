# SpiritConnectArt

Static, single-page image gallery with smooth spring animations, grid and “line” (focused) browsing, keyboard shortcuts, URL routing via hash, and occlusion culling so off-screen tiles are not kept in the DOM. The interaction model and core loop are adapted from [chenglou/chenglou.github.io](https://github.com/chenglou/chenglou.github.io).

## Run locally

There is no build step. Open `index.html` in a browser, or serve the repo root with any static file server (relative paths and `images/` resolve correctly).

Examples:

```bash
npx serve .
```

```bash
python -m http.server 8080
```

Then open the URL shown in the terminal.

## Add your artwork

1. Put image files under `images/` (for example `images/my-piece.webp`).
2. Edit the `data` array in `index.html` (inside the main `<script>`). Each entry needs a **unique** `id` (used in the URL as `#your-id`), intrinsic dimensions `w` and `h`, a `prompt` string shown under the image, and a `src` path to the file.

```javascript
{
  id: 'my-piece',
  w: 1920,
  h: 1080,
  prompt: `Short caption or prompt text`,
  src: 'images/my-piece.webp',
},
```

Optional **`thumb`**: if set, it is used as the low-res background in the grid; **`src`** is still used for the full view when a tile is focused. Omit `thumb` to use `src` for both.

You can also use **Midjourney CDN** entries like the original site: provide only `id` in the form `uuid/0_0` (no `src`), and omit `thumb`. The script will load `https://cdn.midjourney.com/...` URLs automatically.

The starter repo ships with a few SVG placeholders in `images/` so the layout works before you add real assets.

## Deploy (e.g. GitHub Pages)

Publish the repository root (or the folder that contains `index.html` and `images/`) as static hosting. For Open Graph previews (`og:image` in the page head), set `content` to an **absolute** URL of a preview image once you know your site URL; a relative path is fine for local use only.

## Controls

- **Click** a tile to enter focused mode; **click** outside the side strips or use **Escape** to return to the grid.
- **Arrow keys** move between images when focused.
- **`#id`** in the URL opens that image when the page loads (must match an entry’s `id`).

## Credits

UI architecture and behavior are derived from Cheng Lou’s public gallery at [https://github.com/chenglou/chenglou.github.io](https://github.com/chenglou/chenglou.github.io). Respect the license and terms of that project if you redistribute or build on it.

If you publish this work, follow the license (if any) of [chenglou/chenglou.github.io](https://github.com/chenglou/chenglou.github.io) for the adapted gallery code.
