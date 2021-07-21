---
id: migrate
title: Migrate from 7 to 8
---

Version `8` is a vast rewrite.

### 1. Fallback for CSS Grid Layout was removed

Until version `7` react-raster provided a fallback for browsers, that do not support **CSS Grid Layout**. In version `8` this feature was removed. **If you rely on it, you need to stick to version 7.**

---

### 2. Exports have changed

- `Box` is now **default export**.
- `Types` is now `Props`.

```jsx
import Box, { Props } from "react-raster";
```

---

### 3. Grid is now Box

Change all `Grid`-components to `Box`

```jsx
<Box
  breakpoints={[0, 400, 800, 1200]}
  colspan={12}
  gridRowGap={"2vw"}
  gridColumnGap={"2vw"}
  control
>
  <Box cols={3}>Hello</Box>
</Box>
```

---

### 4. Box-Alignment was removed

- react-raster used to provide alignment `center` and `right` for **CSS Grid Layout**. The props were named `alignX` and `alignY`. **This feature was removed.**
- In **Grid Layout** Boxes are aligned with `margin` now manually.
- With **Flexbox** Boxes are aligned with `justifyContent` and `alignItems`/`alignContent`.

---

### 5. Props changed names

- alignX → justifyContent
- alignY → alignItems/alignContent
- attrs → ~~removed~~
- bottom → marginBottom
- cssMode → ~~removed~~
- gutterX → gridRowGap
- gutterY → gridColumnGap
- hasChildBoxes → ~~removed~~
- left → marginLeft
- right → marginRight
- css → styles
- tag → as
- top → marginTop

---

### 6. Check out the Docs for new features and possibilities
