---
id: use-raster
title: useRaster
---

In child-components of `Grid` and `Box` you have access to some grid-settings via the hook `useRaster`:

```jsx
import React from "react";
import { useRaster } from "react-raster";

const ChildComponent = () => {
  const { currentBreakpoint } = useRaster();
  return <h1>The current breakpoint is {breakpoint.value}</h1>;
};

export default ChildComponent;
```

Here is the complete list of props:
https://github.com/AndreasFaust/react-raster/blob/master/src/context.ts
