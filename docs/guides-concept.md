---
id: concept
title: Concept
---

**Layouting user-interfaces is tough.** Every viewport-size needs its own composition. 
`react-raster` provides a simplified, but flexible interface for `CSS Grid Layout`. With `react-raster` defining a grid and placing and stacking boxes is as easy as never before.

---
### 1. Define your Grid and style it in one place
Setup the layout for every breakpoint directly in your `react`-component. No need for switching files or scrolling around. `react-raster` provides a concise API directly on top of its `React components`.

---
### 2. Nest components within each other while keeping the original grid
When components are wrapped inside each other, `react-raster` keeps track of your original `Grid-settings`. 

---
### 3. Add Flexbox-like `flow` to Grid Layout
`Grid Layout` has limited `document flow`. `react-raster` provides you with these additional features:
- Add `margin` to boxes
- Automatic `aligning` of sibling boxes to `center` or `right`

---
### 4. Combine `react-raster` components with other frameworks
`react-raster` is highly composable. You can use it alongside all your favourite tools.

---
### 5. Grid-Layout-Polyfill
Additionally it polyfills `Grid Layout` using `Flexbox`, if you need to support legacy browsers. 
