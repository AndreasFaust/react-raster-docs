---
id: polyfill
title: Polyfill for CSS Grid-Layout
---

`react-raster` polyfills `Grid Layout` using `Flexbox`, if you need to support legacy browsers. This feature is activated by default.

### The prop `cssMode`

`cssMode` defines which CSS-layout-engine `react-raster` should use.
- `grid` uses Grid-Layout (default)
- `flex` the older Flexbox 

If the user’s browser does not support `CSS Grid Layout`, `cssMode` automatically falls back to `flex`. You can overwrite the prop manually.

CSS Grid-Layout support: https://caniuse.com/css-grid