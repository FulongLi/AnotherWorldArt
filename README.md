# AnotherWorldArt

**AnotherWorldArt** is a small static gallery for **Another World**, a game project built around **Spirit Connect** technology. This site is meant to collect **AI-generated concept art**—environments, characters, and visual ideas—that inform the look and feel of *Another World*. The concepts here grow out of the same fiction and design pillars as the Spirit Connect–driven game.

The page itself is a single `index.html`: responsive grid, spring-based motion, focused “carousel” mode, keyboard navigation, URL hashes per piece, and light DOM virtualization. That interaction layer is adapted from [chenglou/chenglou.github.io](https://github.com/chenglou/chenglou.github.io); see **Credits** below for upstream licensing.

## License

Original material in this repository (your images, copy, and project-specific changes) is under the [MIT License](LICENSE). Gallery mechanics derived from Cheng Lou’s project remain subject to that project’s terms—check [chenglou/chenglou.github.io](https://github.com/chenglou/chenglou.github.io) before redistributing only their code.

## Run locally

No build step. Open `index.html` in a browser, or serve the repo root:

```bash
npx serve .
```

```bash
python -m http.server 8080
```

## Add concept art

1. Add files under `images/` (e.g. `images/realm-gate.webp`).
2. Append an object to the `data` array in `index.html`. Each entry needs a unique `id` (used in URLs as `#your-id`), `w`, `h`, `prompt` (caption), and `src`.

```javascript
{
  id: 'realm-gate',
  w: 1920,
  h: 1080,
  prompt: `Concept: threshold between worlds`,
  src: 'images/realm-gate.webp',
},
```

Optional **`thumb`**: smaller image for the grid background; **`src`** is used in focused view. For **Midjourney CDN** URLs only, omit `src` and use an `id` like `uuid/0_0` (see comments in `index.html`).

Placeholder SVGs in `images/` are only for layout until you replace them with real concepts.

## Deploy (e.g. GitHub Pages)

Publish the folder that contains `index.html` and `images/`. For social previews, set `og:image` in `index.html` to an **absolute** URL once your site URL is fixed.

## Controls

- Click a tile to focus; **Escape** or click outside the side strips to return to the grid.
- **Arrow keys** move between images when focused.
- **`#id`** in the URL opens that piece on load.

## Credits

- UI patterns and render loop: [chenglou/chenglou.github.io](https://github.com/chenglou/chenglou.github.io) by Cheng Lou.

Repository: [https://github.com/FulongLi/AnotherWorldArt](https://github.com/FulongLi/AnotherWorldArt)
