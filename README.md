# Whimsical Dreamscape Storybook

This simple static site implements the "Whimsical Dreamscape" concept requested by the user.

## Features

- 4×5 responsive grid of 20 story cards
- 32 px rounded corners, floating drop shadow, hover scaling & glow
- Shared element transition when opening a story:
  - cover image morphs into header
  - background grid blurs/fades
  - story text slides up with spring bounce
  - close button reverses animation
- Playful serif title font (`Cherry Bomb One`) and legible sans-serif body (`Quicksand`)
- Base64 placeholder page-turn sound effect

## Files

- `index.html` – markup and layout
- `styles.css` – all styling
- `script.js` – grid generation and transition logic

## Customization

- Replace placeholder images by editing the `img.src` line in `script.js`
- Update or add full text for any story in the `stories` array.
- To use a real audio clip, change the `src` attribute of the `#page-turn-sound` element (currently uses a tiny base64 stub).

## Development

Simply open `index.html` in a browser (no build step required).

---

Feel free to extend or polish further – the structure is intentionally minimal and self‑contained.