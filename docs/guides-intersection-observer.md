---
id: intersection-observer
title: Intersection Observer
---

- If the prop `onIntersect` is a function, an `Intersection Observer` is set. `onIntersect` has 2 arguments: `entry` and `observer`.
- The `Intersection Observer` can be configured by the props `root`, `rootMargin` and `threshold`.
- Learn more: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

## Examples

---

### Fade a Box in and out on Intersection

```jsx
import React from "react";
import Box from "react-raster";

const ExamplePage = () => {
  const [opacity, setOpacity] = React.useState(0);
  function onIntersect(entry, observer) {
    if (entry.isIntersecting) {
      setOpacity(1);
    } else {
      setOpacity(0);
    }
  }
  return (
    <Box as="section" colspan={12} control>
      <Box
        background="yellow"
        marginTop="150vh"
        height="50vh"
        transition="opacity 2s"
        opacity={opacity}
        onIntersect={onIntersect}
        threshold={buildThresholdArray()}
      >
        This Box is fading in and out.
      </Box>
    </Box>
  );
};
```

---

### Basic Example: Fade a Box in and stop observing

```jsx
import React from "react";
import Box from "react-raster";

const ExamplePage = () => {
  const [opacity, setOpacity] = React.useState(0);
  function onIntersect(entry, observer) {
    if (entry.isIntersecting) {
      setOpacity(1);
      observer.unobserve(entry.target);
    }
  }
  return (
    <Box as="section" colspan={12} control>
      <Box
        background="yellow"
        marginTop="150vh"
        height="50vh"
        transition="opacity 2s"
        opacity={opacity}
        onIntersect={onIntersect}
        threshold={buildThresholdArray()}
      >
        This Box is fading in and out.
      </Box>
    </Box>
  );
};
```

---

### Smoothly Fade-in on Intersection bound to Scroll

```jsx
import React from "react";
import Box from "react-raster";

const buildThresholdArray = () => Array.from(Array(100).keys(), (i) => i / 100);

const ExamplePage = () => {
  const [opacity, setOpacity] = React.useState(0);
  function onIntersect(entry, observer) {
    setOpacity(entry.intersectionRatio);
  }
  return (
    <Box as="section" colspan={12} control>
      <Box
        background="yellow"
        marginTop="150vh"
        height="50vh"
        opacity={opacity}
        onIntersect={onIntersect}
        threshold={buildThresholdArray()}
      >
        This Box is fading in and out.
      </Box>
    </Box>
  );
};
```
