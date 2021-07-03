---
id: breakpoints
title: Breakpoints
---

### Defining Breakpoints

Breakpoints is an array of numbers starting with `0`.
Every number defines a `min-width`.

#### Default Breakpoints

```json
[0, 432, 768, 1024, 1200, 1400]
```

### Props matching Breakpoints

Often you want to bind props to certain breakpoints.
You can achieve this by defining an **array** instead of a single string or number for your prop.
An array-element’s index matches the index of the breakpoint.
If the prop-array is shorter than the breakpoints-array, the last value is adapted for all larger breakpoints.

This simple example defines a grid with a left padding:

![Graphic to illustrate how the elements of an props-array match breakpoints.](/breakpoints.svg)

- 0px — 499px: 3vw
- 500px — 999px: 2vw
- 1000px — infinite: 1vw

**Almost all props support this feature.**
Look up the props-specification for `Box`.
