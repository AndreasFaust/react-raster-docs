---
id: control
title: Visual Control
---

`react-raster` provides **visual control** of your Grid. Just add the prop `control` to the `Box`-component, that defines your grid.

> Press `ESC` to switch it on and off.

```jsx live
function Example() {
  return (
    <Box colspan={12} gridColumnGap={"10px"} gridRowGap={"10px"} control>
      <Box textAlign="center">
        Press <strong>ESC</strong> to see the Grid
      </Box>
      <Box cols={4} height="200px" background="blue" />
      <Box cols={4} height="200px" background="blue" />
      <Box cols={4} height="200px" background="blue" />
    </Box>
  );
}
```

### Production-handling

To use visual control only in development, bind it to `process.env.NODE_ENV`.

```jsx
<Box control={process.env.NODE_ENV !== "production"} />
```

### Control Color

You can setup a **custom color** for visual control.

```jsx
<Box controlColor="rgba(0, 255, 0, 0.1)" />
```
