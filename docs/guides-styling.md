---
id: styling
title: Styling
---

`Box` can also be styled directly with [Styled-Components](https://styled-components.com/) via the prop `styles`. This is e.g. handy for applying `pseudo-elements` and `hover`.

```jsx
<Box
  styles={`
    &&::before {
        content: "Hello!"
        background: red;
    }
    &&:hover {
        background: green;
    }
`}
/>
```

## Style by Breakpoint

The current breakpoint is reflected in two classes of the `Box`-component.
One is named based on **index**
The other is named based on **pixel**

### ClassName based on `index`

```jsx
<Box
  styles={`
    &&.bp-1,
    &&.bp-2,
    &&.bp-3 {
        background: red;
    }
    &&.bp-4,
    &&.bp-5,
    &&.bp-6 {
        background: blue;
    }
`}
/>
```

### ClassName based on `pixel`

```jsx
<Box
  styles={`
    &&.bp-0,
    &&.bp-432,
    &&.bp-768 {
        background: red;
    }
    &&.bp-1024,
    &&.bp-1200,
    &&.bp-1400 {
        background: blue;
    }
`}
/>
```

### Style based on Array

```jsx
<Box
  styles={[
    `
        background: red;
    `,
    `
        background: red;
    `,
    `
        background: red;
    `,
    `
        background: blue;
    `, // from width 1024 on, the background is blue
  ]}
/>
```
