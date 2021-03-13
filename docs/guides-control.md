---
id: control
title: Visual Control
---

`react-raster` provides **visual control** of your Grid. Just add the prop `control` to the `Grid`-component.

> Press `ESC` to switch it on and off.  

```jsx live
function Example() {
    return (
        <Grid
            colspan={12}
            gutterX={'10px'}
            gutterY={'10px'}
            control // false by default
        >
            <Box cols={4} css={`height: 200px; background: blue;`}/>
            <Box cols={4} css={`height: 200px; background: blue;`}/>
            <Box cols={4} css={`height: 200px; background: blue;`}/>
        </Grid>
    )
}
```

### Production-handling 

To use `visual control` just in development, connect it to `process.env.NODE_ENV`.

```jsx
<Grid
    control={process.env.NODE_ENV !== "production"}
/>
```

### Control Color
You can setup a custom color for `visual control`.

```jsx
<Grid
    controlColor="rgba(0, 255, 0, 0.1)"
/>
```