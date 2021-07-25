---
id: intersection-observer
title: Intersection Observer
---

- If the prop `onIntersect` is a function, an **Intersection Observer** is set. `onIntersect` has 2 arguments: `entry` and `observer`.
- The **Intersection Observer** can be configured by the props `root`, `rootMargin` and `threshold`.
- Learn more: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

```jsx
import React from "react";
import Box from "react-raster";

const ExamplePage = () => {
  const [opacity, setOpacity] = React.useState(0);
  function onIntersect(entry, observer) {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      setOpacity(1);
    }
  }
  return (
    <Box as="section" colspan={12} gap="1rem 1rem" control padding={[1]}>
      <Box
        background="yellow"
        height="50vh"
        marginTop="150vh"
        opacity={opacity}
        onIntersect={React.useCallback(() => onIntersect, [])}
      >
        Fade-in on intersecting!
      </Box>
    </Box>
  );
};

export default ExamplePage;
```

## Increase Performance with useCallback

Prevent re-rendering of your component by memoizing the callback for onIntersect. To do so you need to just wrap it into React’s `useCallback`-hook.
Learn more: https://dmitripavlutin.com/dont-overuse-react-usecallback/

```jsx
<Box onIntersect={React.useCallback(() => onIntersect, [])} />
```

## Examples

---

### [Fade in and stop observing](/docs/intersection-fade)

---

### [Fade in and out bound to Scroll](/docs/intersection-fade-scrollbound)

---
