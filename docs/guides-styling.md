---
id: styling
title: Styling
---

`Grid` and `Box` are styled by [Styled-Components](https://styled-components.com/) via the prop `css`. 

## Style by Breakpoint

The current breakpoint is reflected in two classes of the `Grid`-component. 
One is named based on **index**
The other is named based on **pixel**

### ClassName based on `index`

```jsx
    <Box 
        css={`
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
        css={`
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
        css={[
            `background: red;`,
            `background: red;`,
            `background: red;`,
            `background: blue;`, // from width 1024 on, the background is blue
        ]}
    />
```

## Style-Object

Alternatively the default `style`-prop can be used.

```jsx
    <Box 
        style={{ background: 'red' }}
    />
```