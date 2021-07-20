---
id: margin-padding
title: Margin & Padding
---

- Spacing can be either defined in a `CSS-unit` like `px`, `rem` or `%`.
- Or as `unitless number`, which sets the unit `grid-columns`.
- `Margin` and `Padding` can be — like in CSS — written out for every direction separately or in one single command.

```jsx live
function BasicExample() {
  return (
    <Box
      colspan={6}
      paddingLeft={"4rem"}
      paddingRight={3}
      control
      background="coral"
    >
      <Box
        padding={["1rem 1 1rem 1rem", "2rem 1 2rem 2rem"]}
        height={"250px"}
        background="lightblue"
      >
        The padding of my parent is <b>4rem to the left</b> and{" "}
        <b>3 grid-columns to the right</b>.
      </Box>
    </Box>
  );
}
```
